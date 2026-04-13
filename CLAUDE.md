# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Akwa IT Support is a zero-dependency PWA (Progressive Web App) for internal IT helpdesk. No build step, no npm, no framework — pure HTML/CSS/JS served as static files. Deployed on Netlify.

## Development

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

Deploy to production:
```bash
netlify deploy --dir . --prod
```

## Architecture

All app logic lives in two files:
- **`js/app.js`** — single JS file: icon definitions (`IC` object), inline fallback data, all rendering, navigation, search, chat (AI assistant), and service worker registration.
- **`css/styles.css`** — all styles.

Data is loaded at runtime via `fetch`:
- **`data/problems.json`** — each problem has: `id`, `title`, `icon` (key into `IC`), `cat`, `iconColor`, `iconBg`, `p` (P1/P2/P3), `pl` (URGENT/IMPORTANT/NORMAL), `keys` (search terms), `time`, `symptoms[]`, `steps[]` (`e` = icon key, `t` = markdown text with `**bold**`), optional `note`, `escalateAfter`, `phone`, `imgs[]` (paths to reference screenshots in `problemes solution/`), `video` (path to a `.webm` in `guide/`).
- **`data/groups.json`** — defines sidebar categories and their ordered item list. Each item has `label` and `problemId` (null = ticket link fallback).

`app.js` also contains `_PROBLEMS_INLINE` and `_GROUPS_INLINE` — exact mirrors of the JSON files used as offline fallback when `fetch` fails (e.g. `file://` protocol). **Keep these in sync with the JSON files.**

## Chat assistant

Two-tier chat architecture:

1. **Netlify Function (deployed)** — `netlify/functions/assistant.js` calls **Gemini** (primary) then falls back to **Groq** if Gemini fails. Supports text + image (base64, max 8 MB). Special response codes:
   - `FLOW:tpe_connexion` — LLM detected a TPE/APOS/DOMS connection issue; function returns `{ type: 'flow', flowKey: 'tpe_connexion' }` which triggers a guided step-by-step flow in the UI. The function also has a `shouldTriggerFlow()` fast-path that checks `TPE_CONNEXION_KEYWORDS` and can bypass the LLM call.
   - `IMAGE:UNIDENTIFIED` — LLM could not identify a recognizable IT problem in the provided image; the function surfaces a friendly "image not recognized" response.
   - Required env vars in Netlify: `GEMINI_API_KEY`, `GROQ_API_KEY`. Optional: `GEMINI_MODEL`, `GROQ_MODEL`, `GEMINI_TIMEOUT_MS`, `GROQ_TIMEOUT_MS`.

2. **Local fallback** — `localReply()` in `app.js` is used when the Netlify function is unavailable (e.g. `file://` protocol or fetch failure). It scores problems by matching the user's message against each problem's `keys[]` array and title words, then surfaces the best match. No external API call.

`netlify/functions/tts.js` exists but is a stub (returns 204); TTS is handled entirely by the browser's Speech Synthesis API.

## Critical: service worker caching

The app uses a cache-first service worker (`sw.js`) with a versioned cache name (currently `akwa-it-v41`). **Every time any content file is changed, the cache version must be bumped** (e.g. `akwa-it-v41` → `akwa-it-v42`) so the browser discards the old cache and fetches fresh files. Without this, users will continue to see the old version.

`netlify.toml` sets `Cache-Control: no-cache` on all HTML/JS/CSS/data assets so the CDN never serves stale files — but the **service worker version** is still the mechanism that forces existing PWA installs to update.

## Adding a new problem

1. Add the entry to **`data/problems.json`** with a new unique `id`.
2. Add the entry to the relevant group in **`data/groups.json`** (`{ "label": "...", "problemId": <id> }`).
3. Add the matching entry to `_PROBLEMS_INLINE` and `_GROUPS_INLINE` in **`js/app.js`** (offline fallback).
4. Update the "N cas couverts" counter in **`index.html`**.
5. Bump the cache version in **`sw.js`**.

If the problem has reference screenshots, place them under `problemes solution/<category>/<problem name>/` and reference the paths in `imgs[]`. If it has a video tutorial, reference the `.webm` path in the `video` field and add it to `GUIDE_VIDEOS` in `app.js` (which drives the home screen video section).

## Video guides

Tutorial videos live in the `guide/` directory and are served as static files. They are referenced by the home screen's "Vidéos tutoriels" section. Available videos: guide connexion TPE, guide carte Afriquia, guide Easy One, guide commande station, transaction carte SNTL, guide station VID pompiste. PDF/PPTX guides also live there (VPN WARP, changement mot de passe, récupération code PIN imprimante).

The chat assistant's system prompt mentions these videos by name so users can be directed to them; if you add a video, update the system prompt in `netlify/functions/assistant.js` too.

## Chat assistant language

The assistant replies in the user's language: Moroccan Darija (Darija), French, or English. The system prompt in `netlify/functions/assistant.js` defines this and all other assistant behavior. Default Gemini model: `gemini-3-flash-preview`. Default Groq model: `meta-llama/llama-4-scout-17b-16e-instruct`.

## Icons

Icons are inline SVG strings stored in the `IC` object at the top of `app.js`. Available keys: `creditCard`, `wifi`, `wifiOff`, `globe`, `clock`, `hourglass`, `mail`, `printer`, `lock`, `zap`, `monitor`, `activity`, `shield`, `check`, `info`, `alertTriangle`, `phone`, `searchX`, `bot`, `eye`, `smartphone`, `settings`, `clipboard`, `trash`, `refreshCw`, `key`, `inbox`, `cornerDownLeft`, `search`, `xCircle`, `plug`, `save`, `x`, `logOut`, `calendar`, `cloud`, `user`, `link`, `unlock`, `server`, `checkCircle`, `fileText`, `building`, `folder`, `alertCircle`, `play`, `video`. Use only these keys in `problems.json` step `e` fields and problem `icon` fields.
