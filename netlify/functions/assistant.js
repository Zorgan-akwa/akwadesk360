const SYSTEM_PROMPT = `Tu es Super Akwa, l'assistant IT interne d'Akwa Group (Maroc).

## Contexte IT Akwa Group
Appareils et logiciels courants :
- TPE / APOS (terminaux de paiement) sous logiciel DOMS, Wi-Fi SSID : r2f01m6
- PCs Windows avec Office 365, Teams, Azure AD
- ERP Odoo : odoo.akwagroup.ma
- Xcally (centre d'appels), AGL, Micros, Afriware, Caisse AX (Retail POS)
- Serveur impression MyQ : srv-myq-01:8090 (code PIN)
- Email Exchange : mail.akwagroup.com / outlook.office.com
- Routeurs Mikrotik (Fibre + 4G backup)
- Système Station VID (pompiste, commandes carburant)
- Carte Afriquia, carte SNTL, Easy One (TPE spéciaux)

## Règles de réponse
- Réponds en Darija marocain si le message est en Darija, en français si en français, en anglais si en anglais.
- Sois pratique, concis, orienté action. Phrases courtes.
- Ne parle pas de tickets sauf si l'utilisateur le demande.
- Donne des étapes numérotées quand tu résolus un problème.
- Mentionne les vidéos tutoriels disponibles dans l'app quand elles sont pertinentes (section "Vidéos tutoriels" sur l'écran d'accueil).

## Vidéos disponibles dans l'app
- "Guide Carte Afriquia" → paiements TPE carte Afriquia
- "Commande Station" → station VID, commandes carburant pompiste
- "Transaction Carte SNTL" → transactions carte SNTL sur TPE
- "Guide Easy One" → terminal Easy One

## Codes spéciaux (réponds UNIQUEMENT avec le code, sans autre texte)
- FLOW:tpe_connexion → problème connexion TPE/APOS, erreur DOMS, "Pas de connexion" sur TPE, Wi-Fi introuvable sur TPE
- IMAGE:UNIDENTIFIED → l'image ne contient aucun problème IT reconnaissable (photo personnelle, document flou, image non technique)`;

const TPE_CONNEXION_KEYWORDS = [
  'tpe',
  'apos',
  'doms',
  'pas de connexion',
  'erreur doms',
  'message doms',
  'connexion tpe',
  'tpe bloqu',
  'terminal de paiement',
  'wifi tpe',
  'wi-fi tpe',
  'reseau tpe',
  'réseau tpe',
  'tpe wifi',
  'tpe bloque',
  'tpe ne marche',
  'tpe hors ligne',
  'tpe offline',
  'no connection',
  'doms error',
  'appel centre'
];

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';
const GROQ_MODEL = process.env.GROQ_MODEL || 'meta-llama/llama-4-scout-17b-16e-instruct';
const GEMINI_TIMEOUT_MS = Number(process.env.GEMINI_TIMEOUT_MS || 20000);
const GROQ_TIMEOUT_MS = Number(process.env.GROQ_TIMEOUT_MS || 15000);
const MAX_IMAGE_BYTES = Number(process.env.MAX_IMAGE_BYTES || 8 * 1024 * 1024);

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function shouldTriggerFlow(text) {
  const lower = normalize(text);
  return TPE_CONNEXION_KEYWORDS.some((keyword) => lower.includes(normalize(keyword)));
}

function getFetch() {
  if (typeof fetch === 'function') return fetch.bind(globalThis);
  throw new Error('Global fetch unavailable. Set Netlify NODE_VERSION to 18+ .');
}

function sanitizeBase64(input) {
  return String(input || '')
    .replace(/^data:[^;]+;base64,/, '')
    .replace(/\s+/g, '');
}

function estimateBase64Bytes(base64) {
  if (!base64) return 0;
  const padding = (base64.match(/=+$/) || [''])[0].length;
  return Math.floor((base64.length * 3) / 4) - padding;
}

function buildImageInstruction() {
  return {
    text: [
      "## ANALYSE D'IMAGE — Protocole strict",
      "",
      "### Étape 1 — Lecture exhaustive",
      "Transcris TOUT le texte visible : messages d'erreur, codes, labels, noms d'app, boutons, notifications, numéros de version, adresses IP. Ne saute rien.",
      "",
      "### Étape 2 — Identification du contexte",
      "Identifie le type d'appareil/écran :",
      "- Écran TPE/APOS (terminal de paiement avec clavier numérique, marque Ingenico/Verifone/PAX/Newland)",
      "- PC Windows (barre des tâches, fenêtres Windows, popups Office/Azure)",
      "- Imprimante ou écran MyQ",
      "- Application web (Odoo, Xcally, Azure AD, Office 365, Teams)",
      "- Application mobile",
      "- Équipement réseau (routeur Mikrotik, switch)",
      "- Station VID pompiste",
      "",
      "### Étape 3 — Application des règles de réponse",
      "RÈGLE A — Si l'image montre l'un de ces cas sur un TPE/APOS :",
      "  'Pas de connexion', 'No Connection', erreur DOMS, 'DOMS Error', Wi-Fi absent, 'TPE BLOQUÉ', 'Re-fait appel centre', icône Wi-Fi barrée, message réseau → réponds UNIQUEMENT : FLOW:tpe_connexion",
      "",
      "RÈGLE B — Si l'image ne contient aucun problème IT identifiable → réponds UNIQUEMENT : IMAGE:UNIDENTIFIED",
      "",
      "RÈGLE C — Pour tout autre problème IT → cite d'abord le texte exact vu dans l'image entre guillemets, identifie l'application et le problème, puis donne la solution étape par étape."
    ].join("\n")
  };
}

async function requestJson(url, options, timeoutMs, providerName) {
  const fetchImpl = getFetch();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetchImpl(url, { ...options, signal: controller.signal });
    const rawText = await response.text();
    let data = null;

    try {
      data = rawText ? JSON.parse(rawText) : null;
    } catch (_parseError) {
      data = { rawText };
    }

    if (!response.ok) {
      const details = data?.error?.message || data?.message || data?.rawText || `${providerName} HTTP ${response.status}`;
      const error = new Error(`${providerName} HTTP ${response.status}: ${String(details).slice(0, 600)}`);
      error.provider = providerName;
      error.status = response.status;
      error.details = data;
      throw error;
    }

    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      const timeoutError = new Error(`${providerName} timeout after ${timeoutMs}ms`);
      timeoutError.provider = providerName;
      timeoutError.code = 'TIMEOUT';
      throw timeoutError;
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function callGemini({ message, imageBase64, imageMimeType }) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('Missing GEMINI_API_KEY');
  }

  const cleanImageBase64 = sanitizeBase64(imageBase64);
  const imageBytes = estimateBase64Bytes(cleanImageBase64);
  if (imageBytes > MAX_IMAGE_BYTES) {
    throw new Error(`Image too large (${imageBytes} bytes). Max allowed: ${MAX_IMAGE_BYTES} bytes.`);
  }

  const parts = [
    {
      text: `${SYSTEM_PROMPT}\n\nUser message: ${message || '(no text provided)'}`
    }
  ];

  if (cleanImageBase64) {
    parts.push(buildImageInstruction());
    parts.push({
      inline_data: {
        mime_type: imageMimeType || 'image/png',
        data: cleanImageBase64
      }
    });
  }

  const data = await requestJson(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 800
        }
      })
    },
    GEMINI_TIMEOUT_MS,
    'Gemini'
  );

  const reply = data?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || '')
    .join('\n')
    .trim();

  if (!reply) {
    console.error('Gemini empty response payload:', JSON.stringify(data, null, 2));
    throw new Error('Gemini empty response');
  }

  return reply;
}

async function callGroq({ message, imageBase64, imageMimeType }) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error('Missing GROQ_API_KEY');
  }

  const cleanImageBase64 = sanitizeBase64(imageBase64);
  const imageBytes = estimateBase64Bytes(cleanImageBase64);
  if (imageBytes > MAX_IMAGE_BYTES) {
    throw new Error(`Image too large (${imageBytes} bytes). Max allowed: ${MAX_IMAGE_BYTES} bytes.`);
  }

  const userContent = [];
  userContent.push({
    type: 'text',
    text: cleanImageBase64
      ? `${message || 'Analyse cette image.'}\n\n${buildImageInstruction().text}`
      : (message || '(no text provided)')
  });

  if (cleanImageBase64) {
    userContent.push({
      type: 'image_url',
      image_url: {
        url: `data:${imageMimeType || 'image/png'};base64,${cleanImageBase64}`
      }
    });
  }

  const data = await requestJson(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.2,
        max_tokens: 800,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: cleanImageBase64 ? userContent : message }
        ]
      })
    },
    GROQ_TIMEOUT_MS,
    'Groq'
  );

  const reply = data?.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    console.error('Groq empty response payload:', JSON.stringify(data, null, 2));
    throw new Error('Groq empty response');
  }

  return reply;
}

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { reply: 'Method not allowed.' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const message = String(body.message || '').trim();
    const imageBase64 = sanitizeBase64(body.imageBase64 || '');
    const imageMimeType = body.imageMimeType ? String(body.imageMimeType) : 'image/png';

    if (!message && !imageBase64) {
      return json(400, { reply: 'Message vide.' });
    }

    if (shouldTriggerFlow(message)) {
      return json(200, {
        type: 'flow',
        flowKey: 'tpe_connexion',
        reply: "Je lance le guide pas à pas pour l'erreur de connexion TPE."
      });
    }

    const providerErrors = [];
    let reply = '';

    try {
      reply = await callGemini({ message, imageBase64, imageMimeType });
    } catch (geminiError) {
      console.error('Gemini failed:', geminiError);
      providerErrors.push(`Gemini: ${geminiError.message}`);

      try {
        reply = await callGroq({ message, imageBase64, imageMimeType });
      } catch (groqError) {
        console.error('Groq failed:', groqError);
        providerErrors.push(`Groq: ${groqError.message}`);

        const imageHint = imageBase64
          ? " L'image n'a pas pu être analysée pour le moment."
          : '';

        return json(502, {
          reply: `Les deux fournisseurs IA sont indisponibles pour le moment.${imageHint} Réessaie dans quelques instants.`,
          errors: providerErrors
        });
      }
    }

    if (String(reply).trim() === 'FLOW:tpe_connexion' || shouldTriggerFlow(reply)) {
      return json(200, {
        type: 'flow',
        flowKey: 'tpe_connexion',
        reply: "Je lance le guide pas à pas pour l'erreur de connexion TPE."
      });
    }

    if (String(reply).trim() === 'IMAGE:UNIDENTIFIED') {
      return json(200, { type: 'unidentified' });
    }

    return json(200, {
      reply,
      provider: providerErrors.length ? 'groq-fallback' : 'gemini'
    });
  } catch (error) {
    console.error('Assistant error:', error);
    return json(500, {
      reply: 'Erreur assistant.',
      error: error.message
    });
  }
};
