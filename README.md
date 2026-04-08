# Akwa IT Support — PWA

## Structure
```
akwa-helpdesk-pwa/
├── index.html      ← App complète (single-file)
├── manifest.json   ← PWA manifest
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Déployer sur Netlify

### Option 1 — Drag & Drop (le plus rapide)
1. Aller sur **app.netlify.com**
2. Glisser-déposer le dossier `akwa-helpdesk-pwa/`
3. ✅ Déployé en 30 secondes

### Option 2 — CLI
```bash
cd akwa-helpdesk-pwa
npm i -g netlify-cli
netlify login
netlify deploy --dir . --prod
```

## Contacts configurés
- Support : 0522677766
- Email : support@akwagroup.ma
- Odoo : odoo.akwagroup.ma
- Print : srv-myq-01:8090
- Wi-Fi : r2f01m6


## Providers conseillés
Le projet est maintenant configuré pour utiliser uniquement:
1. Gemini (principal)
2. Groq (fallback)

### Variables Netlify
- GEMINI_API_KEY
- GROQ_API_KEY

### Ordre de fallback
- texte: Gemini -> Groq
- image: Gemini uniquement
