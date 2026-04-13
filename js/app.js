// ── ICONS (Lucide SVG strings) ────────────────────────────────────────────────
const IC = {
  creditCard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  wifi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  wifiOff: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  hourglass: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  printer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  monitor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  activity: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.38 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  searchX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="8" x2="14" y2="14"/><line x1="14" y1="8" x2="8" y2="14"/></svg>`,
  bot: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  clipboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  refreshCw: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  key: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  inbox: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  cornerDownLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  xCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  plug: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 7V2"/><path d="M15 7V2"/><rect x="6" y="7" width="12" height="10" rx="5"/></svg>`,
  save: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  logOut: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  unlock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/><line x1="10" y1="22" x2="10" y2="12"/><line x1="14" y1="22" x2="14" y2="12"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  video: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
};

// ── GUIDE VIDEOS ──────────────────────────────────────────────────────────────
const GUIDE_VIDEOS = [
  { title: "Guide Carte Afriquia",   src: "guide/Guide carte afriquia.webm",       cat: "TPE / APOS",    problemIds: [] },
  { title: "Commande Station",       src: "guide/guide Commande station.webm",     cat: "Station VID",   problemIds: [30] },
  { title: "Transaction Carte SNTL", src: "guide/Transaction carte Sntl.webm",    cat: "TPE / APOS",    problemIds: [] },
  { title: "Guide Easy One",         src: "guide/guide easy one.webm",            cat: "TPE / APOS",    problemIds: [] },
];

// ── DATA ──────────────────────────────────────────────────────────────────────
let PROBLEMS = [];
let GROUPS = [];

const _PROBLEMS_INLINE = [
  {
    id: 1, title: "TPE Bloqué", icon: "creditCard", cat: "TPE / APOS", iconColor: "#1e6aff", iconBg: "#eff6ff", p: "P1", pl: "URGENT",
    keys: ["tpe", "bloque", "bloqué", "caisse", "apos", "appel centre", "transaction"], time: "2 min", escalateAfter: true, phone: "0522677766",
    note: "Si après avoir appuyé sur 'Appel Centre' le TPE reste bloqué, appelez le support au 0522677766.",
    symptoms: ["L'écran affiche 'TPE BLOQUÉ' ou 'Re-fait appel centre'", "Le TPE ne répond plus aux touches", "Impossible d'effectuer une transaction"],
    steps: [
      { e: "eye", t: "Regardez l'écran du TPE — il affiche **'TPE BLOQUÉ'** ou **'Re-fait appel centre'**" },
      { e: "phone", t: "Sur l'écran du TPE, appuyez sur le bouton **'Appel Centre'**" },
      { e: "hourglass", t: "Attendez que le TPE contacte le centre et se **débloque automatiquement** (30–60 sec)" },
      { e: "checkCircle", t: "Si le TPE revient à l'écran normal, vous pouvez **reprendre les transactions**" },
    ],
    imgs: ["problemes solution/TPE Apos/TPE Bloqué/WhatsApp Image 2026-03-28 at 14.43.25.jpeg"],
    video: "guide/guide connexion TPE.webm"
  },
  {
    id: 2, title: "Erreur de Connexion", icon: "wifi", cat: "TPE / APOS", iconColor: "#f59e0b", iconBg: "#fefce8", p: "P2", pl: "IMPORTANT",
    keys: ["erreur connexion", "pas de connexion", "internet off", "doms", "pas internet", "connexion perdue"], time: "2 min",
    note: "Si le réseau r2f01m6 n'apparaît pas dans la liste, consultez le problème 'Wi-Fi Introuvable'.",
    symptoms: ["Message 'Pas de connexion' ou 'Erreur DOMS'", "Applications ne se chargent pas", "Erreur téléchargement des fichiers"],
    steps: [
      { e: "smartphone", t: "Sur le TPE, cliquez sur l'icône **Connect Wi-Fi**" },
      { e: "settings", t: "Cochez le bouton **Hidden Wi-Fi**" },
      { e: "checkCircle", t: "Cliquez sur **OK** 3 fois ou plus" },
      { e: "wifi", t: "Choisissez **r2f01m6** dans la liste Wi-Fi" },
    ],
    imgs: [
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.30.58.jpeg",
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.34.42.jpeg",
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.42.33.jpeg",
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.43.24.jpeg",
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.43.24 (1).jpeg",
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.43.24 (3).jpeg",
      "problemes solution/TPE Apos/Erreur de Connexion TPE/WhatsApp Image 2026-03-28 at 14.43.25 (1).jpeg",
    ],
    video: "guide/guide connexion TPE.webm"
  },
  {
    id: 3, title: "Wi-Fi Introuvable", icon: "wifiOff", cat: "TPE / APOS", iconColor: "#ef4444", iconBg: "#fef2f2", p: "P2", pl: "IMPORTANT",
    keys: ["wifi disparait", "réseau absent", "wifi introuvable", "réseau akwa disparu", "wi-fi manquant", "r2f01m6"], time: "5 min",
    note: "Si impossible de supprimer les réseaux, redémarrez l'appareil d'abord puis recommencez.",
    symptoms: ["Le réseau Akwa n'apparaît pas dans la liste", "Seulement d'autres réseaux visibles", "Le réseau a disparu soudainement"],
    steps: [
      { e: "smartphone", t: "Glissez la **barre du haut vers le bas** → Restez appuyé sur l'**icône Wi-Fi**" },
      { e: "clipboard", t: "Cliquez sur **'Réseaux enregistrés'**" },
      { e: "trash", t: "Sélectionnez les Wi-Fi enregistrés et cliquez **'Supprimer'**" },
      { e: "wifi", t: "Cliquez sur l'icône **'Connect Wi-Fi'**" },
      { e: "settings", t: "Cochez le bouton **'Hidden Wi-Fi'**" },
      { e: "checkCircle", t: "Cliquer sur **'OK'** 3 fois ou plusieurs fois" },
      { e: "wifi", t: "Choisir **'r2f01m6'** dans les paramètres Wi-Fi" },
    ],
    imgs: [
      "problemes solution/TPE Apos/Wi-Fi Introuvable TPE/WhatsApp Image 2026-03-28 at 14.32.25.jpeg",
      "problemes solution/TPE Apos/Wi-Fi Introuvable TPE/WhatsApp Image 2026-03-28 at 14.33.00.jpeg",
      "problemes solution/TPE Apos/Wi-Fi Introuvable TPE/WhatsApp Image 2026-03-28 at 14.43.24 (2).jpeg",
    ],
    video: "guide/guide connexion TPE.webm"
  },
  {
    id: 4, title: "Odoo Inaccessible", icon: "globe", cat: "Applications", iconColor: "#8b5cf6", iconBg: "#f5f3ff", p: "P2", pl: "IMPORTANT",
    keys: ["odoo inaccessible", "site inaccessible", "odoo erreur", "odoo ne se charge pas", "err_connection", "err_invalid"], time: "3–5 min",
    note: "Si le problème persiste, redémarrez l'ordinateur. Si l'erreur revient régulièrement, créez un ticket L2.",
    symptoms: ["Message 'Ce site est inaccessible'", "Odoo ne se charge pas du tout", "Erreur ERR_CONNECTION_REFUSED ou ERR_INVALID_RESPONSE"],
    steps: [
      { e: "globe", t: "Ouvrez votre navigateur **(Chrome ou Firefox)**" },
      { e: "monitor", t: "Appuyez sur **Ctrl + Shift + Delete** (ou Cmd+Shift+Delete sur Mac)" },
      { e: "calendar", t: "Sélectionnez la plage **'Tout le temps'**" },
      { e: "checkCircle", t: "Cochez **Cookies et données de site** et **Images et fichiers en cache**" },
      { e: "trash", t: "Cliquez **'Effacer les données'**" },
      { e: "clock", t: "Fermez **complètement** le navigateur — attendez 10 secondes" },
      { e: "refreshCw", t: "Relancez le navigateur et accédez à **odoo.akwagroup.ma**" },
    ]
  },
  {
    id: 5, title: "Application Lente", icon: "hourglass", cat: "Applications", iconColor: "#06b6d4", iconBg: "#ecfeff", p: "P3", pl: "NORMAL",
    keys: ["application lente", "app lente", "lenteur", "apos lent", "chargement long", "app qui rame", "freeze", "écran de chargement"], time: "3 min",
    note: "Si la lenteur persiste après redémarrage, vérifiez la qualité du signal Wi-Fi (voir 'Internet Lent').",
    symptoms: ["L'application met longtemps à charger", "Écran de chargement indéfini", "L'app répond lentement aux actions"],
    steps: [
      { e: "wifi", t: "Vérifiez que le Wi-Fi est connecté au réseau **r2f01m6**" },
      { e: "refreshCw", t: "Fermez complètement l'application et **relancez-la**" },
      { e: "trash", t: "Dans l'app, allez dans **Paramètres → Vider le cache** si l'option existe" },
      { e: "smartphone", t: "Si toujours lente, **redémarrez l'appareil** (appui long → Redémarrer)" },
      { e: "checkCircle", t: "Relancez l'application après le redémarrage et vérifiez la réactivité" },
    ]
  },
  {
    id: 6, title: "Problème Email", icon: "mail", cat: "Applications", iconColor: "#10b981", iconBg: "#ecfdf5", p: "P3", pl: "NORMAL",
    keys: ["email", "mail", "outlook", "messagerie", "emails ne s'envoient pas", "boite mail", "inbox"], time: "5 min",
    note: "Si le problème touche plusieurs collègues simultanément, c'est probablement un incident serveur.",
    symptoms: ["Impossible d'envoyer ou recevoir des emails", "Outlook ne se connecte pas", "Boîte mail inaccessible"],
    steps: [
      { e: "globe", t: "Vérifiez votre **connexion internet** (Wi-Fi connecté et fonctionnel)" },
      { e: "globe", t: "Ouvrez le navigateur et accédez à **mail.akwagroup.com** — entrez votre login et mot de passe" },
      { e: "globe", t: "Si même problème, testez le lien de secours : **outlook.office.com** et authentifiez-vous avec votre session" },
      { e: "refreshCw", t: "Pour Outlook Desktop : fermez complètement et **relancez l'application**" },
      { e: "monitor", t: "Si Outlook affiche 'Déconnecté', cliquez et choisissez **'Travailler en ligne'**" },
      { e: "refreshCw", t: "Si rien n'a fonctionné, **redémarrez** l'ordinateur" },
    ],
    imgs: ["problemes solution/problème boite mail/Image (1).jfif"]
  },
  {
    id: 7, title: "Code PIN Impression", icon: "printer", cat: "Impression", iconColor: "#f97316", iconBg: "#fff7ed", p: "P3", pl: "NORMAL",
    keys: ["pin oublié", "code pin", "imprimer", "impression", "imprimante", "myq", "pin perdu"], guideFile: "guide/IMPRIMANTES - RECUPERATION DU CODE PIN.pdf", time: "2 min",
    symptoms: ["Impossible de se connecter pour imprimer", "Code PIN oublié ou expiré", "Accès MyQ refusé"],
    steps: [
      { e: "globe", t: "Ouvrez votre navigateur et allez sur **https://srv-myq-01:8090/**" },
      { e: "key", t: "Cliquez sur le bouton **PIN Perdu**" },
      { e: "mail", t: "Renseignez votre **adresse mail professionnelle** puis cliquez **Envoyer**" },
      { e: "inbox", t: "Ouvrez votre messagerie — copiez le **PIN de réinitialisation** reçu" },
      { e: "cornerDownLeft", t: "Retournez sur **srv-myq-01:8090** et recliquez **PIN Perdu**" },
      { e: "clipboard", t: "Collez le PIN dans **'J'ai le code PIN de réinitialisation'** → Envoyer" },
      { e: "checkCircle", t: "Votre **nouveau code PIN** arrive par mail — utilisez-le pour imprimer" },
    ]
  },
  {
    id: 8, title: "Mot de Passe Oublié", icon: "lock", cat: "Compte", iconColor: "#6366f1", iconBg: "#eef2ff", p: "P3", pl: "NORMAL",
    keys: ["mot de passe oublié", "password", "mdp", "réinitialiser", "compte bloqué", "accès refusé", "connexion impossible"], time: "5 min",
    note: "Après 5 tentatives échouées consécutives, le compte est verrouillé — contactez le support IT.",
    symptoms: ["Impossible de se connecter", "Erreur 'Identifiants incorrects'", "Compte verrouillé après plusieurs tentatives"],
    steps: [
      { e: "link", t: "Sur la page de connexion, cliquez sur **'Mot de passe oublié'**" },
      { e: "mail", t: "Entrez votre **adresse email professionnelle** (@akwagroup.ma)" },
      { e: "inbox", t: "Consultez votre boîte mail et cliquez sur le **lien de réinitialisation**" },
      { e: "key", t: "Choisissez un **nouveau mot de passe** (min. 8 caractères, 1 majuscule, 1 chiffre)" },
      { e: "folder", t: "Si aucun email après 5 minutes, vérifiez les **spams / courriers indésirables**" },
    ]
  },
  {
    id: 9, title: "Application Plantée", icon: "zap", cat: "Applications", iconColor: "#f59e0b", iconBg: "#fefce8", p: "P2", pl: "IMPORTANT",
    keys: ["application ferme", "crash app", "app plante", "crashe", "app se ferme", "force close"], time: "3 min",
    note: "Si l'app crashe systématiquement après redémarrage, créez un ticket avec le message d'erreur exact.",
    symptoms: ["L'application se ferme toute seule", "Message d'erreur puis fermeture forcée", "L'app ne s'ouvre plus du tout"],
    steps: [
      { e: "smartphone", t: "Appui long sur l'icône de l'app → **Forcer l'arrêt** (ou glisser pour fermer)" },
      { e: "trash", t: "Allez dans **Paramètres → Applications → [Nom de l'app] → Vider le cache**" },
      { e: "refreshCw", t: "**Redémarrez l'appareil** (appui long sur bouton power → Redémarrer)" },
      { e: "smartphone", t: "Relancez l'application — si elle demande une mise à jour, **acceptez-la**" },
      { e: "checkCircle", t: "Testez l'application pour vérifier qu'elle fonctionne normalement" },
    ]
  },
  {
    id: 10, title: "PC Lent / Planté", icon: "monitor", cat: "Matériel", iconColor: "#64748b", iconBg: "#f8fafc", p: "P3", pl: "NORMAL",
    keys: ["ordinateur lent", "pc lent", "freeze", "écran gelé", "pc qui plante", "pc bloqué", "windows lent"], time: "5 min",
    note: "Si les ralentissements sont quotidiens ou si l'ordinateur est très chaud, créez un ticket matériel.",
    symptoms: ["Ordinateur très lent ou complètement figé", "Souris / clavier qui ne répondent plus", "Windows très lent au démarrage"],
    steps: [
      { e: "save", t: "**Enregistrez** votre travail immédiatement si l'ordinateur répond encore" },
      { e: "x", t: "Fermez les **onglets et applications inutiles** (clic droit → Fermer)" },
      { e: "monitor", t: "Si gelé : appuyez sur **Ctrl + Alt + Suppr → Gestionnaire des tâches**" },
      { e: "logOut", t: "Fermez les processus consommant **>80% CPU ou mémoire**" },
      { e: "refreshCw", t: "**Redémarrez complètement** : Démarrer → Redémarrer (pas juste veille)" },
    ]
  },
  {
    id: 11, title: "Internet Lent / Coupure", icon: "activity", cat: "Réseau", iconColor: "#0ea5e9", iconBg: "#f0f9ff", p: "P2", pl: "IMPORTANT",
    keys: ["internet lent", "connexion lente", "coupure internet", "débit faible", "chargement lent", "réseau lent"], time: "3 min",
    note: "Si les LEDs sont rouges, c'est une coupure opérateur — signalez-le au support pour qu'il contacte l'opérateur.",
    symptoms: ["Pages qui chargent très lentement", "Coupures internet fréquentes", "Téléchargements qui s'arrêtent"],
    steps: [
      { e: "zap", t: "Regardez les **LEDs du routeur MIKROTIK** — elles doivent être allumées et clignoter" },
      { e: "plug", t: "Vérifiez que le **câble réseau** est bien branché entre les deux routeurs" },
      { e: "activity", t: "Routeur **Fibre** : LED 'Pont' = verte (OK), LED 'Internet' = verte ou clignotante (OK), rouge = coupure" },
      { e: "wifi", t: "Routeur **4G** : LED bleue = 4G (OK), verte = 3G (attention), rouge = problème carte SIM" },
      { e: "refreshCw", t: "**Redémarrez** votre ordinateur et attendez 2 minutes avant de retester" },
    ]
  },
  {
    id: 12, title: "Alerte Antivirus", icon: "shield", cat: "Sécurité", iconColor: "#dc2626", iconBg: "#fef2f2", p: "P2", pl: "IMPORTANT",
    keys: ["antivirus", "virus", "alerte sécurité", "menace détectée", "malware", "fichier infecté", "windows defender", "popup virus"], time: "5 min",
    note: "Ne jamais appeler un numéro affiché dans un popup antivirus — c'est une arnaque. Contactez directement le support.",
    symptoms: ["Notification Windows Defender qui s'affiche", "Message 'Menace détectée' ou 'Virus trouvé'", "Popup de sécurité dans le navigateur"],
    steps: [
      { e: "alertTriangle", t: "**Ne cliquez sur rien** dans la fenêtre suspecte pour l'instant" },
      { e: "search", t: "Vérifiez que l'alerte vient bien de **Windows Defender** (icône bouclier barre des tâches)" },
      { e: "checkCircle", t: "Si c'est Windows Defender : cliquez **'Supprimer la menace'** ou **'Mettre en quarantaine'**" },
      { e: "xCircle", t: "Si c'est un popup dans le navigateur : **fermez l'onglet** — ne cliquez jamais les boutons" },
      { e: "refreshCw", t: "Lancez un scan : Paramètres → **Sécurité Windows** → Protection antivirus → Analyse rapide" },
    ]
  },
  {
    id: 13, title: "Connexion DB Caisse AX", icon: "monitor", cat: "Caisse AX", iconColor: "#ef4444", iconBg: "#fef2f2", p: "P1", pl: "URGENT",
    keys: ["retail pos", "base de données", "bd", "db", "connexion caisse", "connexion db", "db ax", "db caisse", "caisse ax", "ax pos", "impossible se connecter", "hors connexion", "aks-hmag", "connexion ax"], time: "5 min",
    note: "Si le ping vers AKS-HMAG échoue, le problème est réseau — vérifiez le switch avant d'escalader.",
    symptoms: ["Message 'Retail POS ne peut pas se connecter à une base de données'", "Message 'Impossible de basculer dans la base de données hors connexion'", "La caisse ne démarre pas"],
    steps: [
      { e: "wifi", t: "Vérifiez la **connexion réseau** de la caisse (câble RJ45 branché, LEDs allumées)" },
      { e: "plug", t: "Vérifiez le **câble RJ45** et le port du switch auquel la caisse est connectée" },
      { e: "monitor", t: "Ouvrez l'invite de commandes et tapez : **ping AKS-HMAG** — attendez les réponses" },
      { e: "checkCircle", t: "Si le **ping répond** → redémarrez la caisse et le service AX, puis retestez" },
      { e: "x", t: "Si le **ping échoue** → vérifiez le switch et le réseau magasin, puis escaladez si nécessaire" },
    ]
  },
  {
    id: 14, title: "Tiroir Caisse Bloqué", icon: "zap", cat: "Caisse AX", iconColor: "#f59e0b", iconBg: "#fefce8", p: "P2", pl: "IMPORTANT",
    keys: ["tiroir caisse", "tiroir bloqué", "tiroir ne s'ouvre pas", "caisse ne s'ouvre pas", "drawer", "imprimante caisse"], time: "3 min",
    note: "Le tiroir caisse s'ouvre via l'imprimante — si l'imprimante est éteinte ou en erreur, le tiroir reste fermé.",
    symptoms: ["Impossible d'ouvrir le tiroir caisse", "Le tiroir ne réagit pas à la commande", "Lampe rouge sur l'imprimante caisse"],
    steps: [
      { e: "alertCircle", t: "Vérifiez l'état de l'imprimante caisse — une **lampe rouge clignotante** indique une erreur" },
      { e: "plug", t: "Vérifiez que le **câble du tiroir caisse** est bien branché à l'arrière de l'imprimante" },
      { e: "zap", t: "Vérifiez que l'**imprimante est allumée** et que son voyant indique 'Prête'" },
      { e: "refreshCw", t: "**Redémarrez l'imprimante** caisse (éteignez, attendez 10 sec, rallumez)" },
      { e: "checkCircle", t: "Une fois l'imprimante prête, **testez l'ouverture** du tiroir depuis la caisse" },
    ]
  },
  {
    id: 15, title: "Impression Ticket / Journal", icon: "printer", cat: "Caisse AX", iconColor: "#f97316", iconBg: "#fff7ed", p: "P2", pl: "IMPORTANT",
    keys: ["impression ticket", "imprimer ticket", "ticket de caisse", "rapport journal", "imprimante caisse", "imprimante ne répond pas", "com2"], time: "3 min",
    note: "Le câble de l'imprimante caisse se branche sur le port COM2 — vérifiez ce port spécifiquement.",
    symptoms: ["Impossible d'imprimer le ticket de caisse", "L'impression du rapport journal échoue", "Lampe d'erreur rouge sur l'imprimante"],
    steps: [
      { e: "alertCircle", t: "Vérifiez si une **lampe rouge d'erreur** clignote sur l'imprimante" },
      { e: "plug", t: "Vérifiez que le **câble imprimante** est bien branché à la caisse sur le **port COM2**" },
      { e: "fileText", t: "Vérifiez que le **rouleau de ticket** est correctement installé dans l'imprimante" },
      { e: "clipboard", t: "Vérifiez qu'il y a bien du **papier** dans l'imprimante (rouleau non vide)" },
      { e: "refreshCw", t: "**Redémarrez l'imprimante** puis effectuez un **test d'impression** depuis la caisse" },
    ]
  },
  {
    id: 16, title: "Enregistrement Client Impossible", icon: "clock", cat: "Caisse AX", iconColor: "#8b5cf6", iconBg: "#f5f3ff", p: "P2", pl: "IMPORTANT",
    keys: ["enregistrer client", "nouveau client", "client caisse", "synchronisation horloge", "date heure caisse", "ax client"], time: "3 min",
    note: "Un décalage d'horloge même minime peut bloquer la synchronisation des données client dans AX.",
    symptoms: ["Impossible d'enregistrer un nouveau client", "Erreur lors de la création de fiche client", "La caisse rejette les nouvelles entrées client"],
    steps: [
      { e: "clock", t: "Vérifiez la **synchronisation de l'horloge** de la caisse (heure système)" },
      { e: "calendar", t: "Confirmez que la **date et l'heure** affichées sur la caisse sont correctes" },
      { e: "settings", t: "Si nécessaire, **corrigez le réglage de l'horloge** : Panneau de config → Date et heure" },
      { e: "refreshCw", t: "**Relancez** la caisse ou l'application AX après la correction" },
      { e: "checkCircle", t: "**Refaites le test** d'enregistrement du client pour confirmer la résolution" },
    ]
  },
  {
    id: 17, title: "TPE Grappe – Appel Attente", icon: "creditCard", cat: "Caisse AX", iconColor: "#1e6aff", iconBg: "#eff6ff", p: "P2", pl: "IMPORTANT",
    keys: ["tpe grappe", "appel attente", "annuler tpe", "grappe", "connexion grappe", "test grappe", "tpe attente"], time: "5 min", escalateAfter: true,
    note: "Si le test de connexion Grappe échoue, escaladez au Niveau 2 — ne pas tenter de reconfigurer le TPE.",
    symptoms: ["TPE affiche 'Appel attente' ou 'Annuler'", "Impossible d'effectuer une transaction via le TPE Grappe", "Le TPE reste bloqué sur l'écran d'attente"],
    steps: [
      { e: "plug", t: "Vérifiez que le **câble réseau** est bien branché au TPE sur le **port ETH**" },
      { e: "server", t: "Vérifiez le **câble côté prise réseau / switch** — testez un autre port si disponible" },
      { e: "refreshCw", t: "**Redémarrez le TPE** (éteignez complètement, attendez 30 sec, rallumez)" },
      { e: "activity", t: "Sur le TPE, lancez un **test de connexion Grappe** depuis le menu de diagnostic" },
      { e: "checkCircle", t: "Si le test est **OK** → TPE opérationnel, reprenez les transactions" },
      { e: "phone", t: "Si le test **échoue** → escaladez au **Niveau 2** (ne pas reconfigurer le TPE)" },
    ]
  },
  {
    id: 20, title: "Microsoft Teams – Problème", icon: "smartphone", cat: "Applications", iconColor: "#5558af", iconBg: "#eef0ff", p: "P2", pl: "IMPORTANT",
    keys: ["teams", "microsoft teams", "teams ne s'ouvre pas", "teams déconnecté", "réunion teams", "micro teams", "caméra teams", "appel teams"], time: "5 min",
    note: "Si Teams ne se lance pas du tout après redémarrage, désinstallez et réinstallez l'application.",
    symptoms: ["Teams ne démarre pas ou se ferme au lancement", "Impossible de rejoindre ou créer une réunion", "Micro ou caméra ne fonctionnent pas dans Teams"],
    steps: [
      { e: "globe", t: "Vérifiez votre **connexion internet** — Teams nécessite une connexion active" },
      { e: "xCircle", t: "Fermez Teams complètement : clic droit sur l'icône en barre des tâches → **Quitter**" },
      { e: "refreshCw", t: "Relancez Teams et **reconnectez-vous** avec votre compte @akwagroup.ma" },
      { e: "trash", t: "Si toujours bloqué : **videz le cache Teams** — Paramètres Teams → Général → Effacer le cache" },
      { e: "settings", t: "Vérifiez les **permissions micro/caméra** : Paramètres Windows → Confidentialité → Micro / Caméra" },
      { e: "refreshCw", t: "**Redémarrez l'ordinateur** et relancez Teams pour finaliser la résolution" },
    ]
  },
  {
    id: 21, title: "Écran – Pas d'Affichage", icon: "monitor", cat: "Matériel", iconColor: "#64748b", iconBg: "#f8fafc", p: "P2", pl: "IMPORTANT",
    keys: ["écran noir", "ecran noir", "pas d'image", "moniteur éteint", "affichage", "écran clignote", "no signal", "pas de signal", "moniteur", "écran éteint"], time: "3 min",
    note: "Si l'écran affiche 'No Signal' après toutes ces vérifications, le câble vidéo peut être défectueux — créez un ticket matériel.",
    symptoms: ["Écran noir ou sans image au démarrage", "Message 'No Signal' ou 'Signal Non Détecté'", "L'écran clignote ou l'image est instable"],
    steps: [
      { e: "plug", t: "Vérifiez le **câble d'alimentation** de l'écran — branchez-le fermement des deux côtés" },
      { e: "monitor", t: "Vérifiez le **câble vidéo** (HDMI / VGA / DisplayPort) côté écran et côté ordinateur" },
      { e: "zap", t: "Appuyez sur le **bouton Power de l'écran** pour confirmer qu'il est bien allumé" },
      { e: "settings", t: "Utilisez les **boutons physiques de l'écran** pour vérifier que la luminosité n'est pas au minimum" },
      { e: "refreshCw", t: "Appuyez sur **Win + P** et sélectionnez **Dupliquer** ou **Étendre** pour forcer le signal" },
      { e: "refreshCw", t: "**Redémarrez l'ordinateur** — l'écran devrait détecter automatiquement le signal" },
    ]
  },
  {
    id: 22, title: "Clavier – Ne Répond Pas", icon: "clipboard", cat: "Matériel", iconColor: "#64748b", iconBg: "#f8fafc", p: "P3", pl: "NORMAL",
    keys: ["clavier bloqué", "clavier ne fonctionne pas", "touches bloquées", "clavier usb", "saisie impossible", "keyboard", "clavier muet", "verr maj", "clavier sans fil"], time: "3 min",
    note: "Pour les claviers sans fil, vérifiez en priorité le niveau des piles ou la charge de la batterie.",
    symptoms: ["Le clavier ne répond à aucune touche", "Certaines touches sont bloquées ou ne répondent plus", "Le clavier n'est pas reconnu par Windows"],
    steps: [
      { e: "plug", t: "Vérifiez que le **câble USB du clavier** est bien branché dans le port (essayez un autre port)" },
      { e: "refreshCw", t: "**Débranchez** puis **rebranchez** le câble USB — attendez 5 secondes entre les deux" },
      { e: "lock", t: "Vérifiez si la touche **Verr Maj** ou **Verr Num** bloque la saisie — désactivez-la" },
      { e: "settings", t: "Allez dans **Paramètres → Heure et langue → Langue** → vérifiez la disposition clavier (Français)" },
      { e: "monitor", t: "Vérifiez dans le **Gestionnaire de périphériques** que le clavier est reconnu (pas de triangle jaune)" },
      { e: "refreshCw", t: "**Redémarrez l'ordinateur** — Windows réinstallera automatiquement les pilotes du clavier" },
    ]
  },
  {
    id: 23, title: "Microsoft Office – Problème", icon: "fileText", cat: "Applications", iconColor: "#ea580c", iconBg: "#fff7ed", p: "P2", pl: "IMPORTANT",
    keys: ["word", "excel", "powerpoint", "office", "microsoft 365", "licence office", "activation office", "word ne s'ouvre pas", "excel crash", "office lent", "microsoft office"], time: "5 min",
    note: "Si l'activation échoue même avec une bonne connexion, votre licence 365 a peut-être expiré — contactez le support.",
    symptoms: ["Word / Excel / PowerPoint ne s'ouvre pas", "Message 'Activation requise' ou produit non activé", "Fichier Office ne s'ouvre pas ou est corrompu"],
    steps: [
      { e: "globe", t: "Vérifiez votre **connexion internet** — l'activation Microsoft 365 nécessite une connexion" },
      { e: "xCircle", t: "**Fermez complètement** l'application Office concernée et relancez-la" },
      { e: "user", t: "Si activation demandée : **connectez-vous** avec votre compte @akwagroup.ma" },
      { e: "settings", t: "Si Office est lent : désactivez les compléments — **Fichier → Options → Compléments → Désactiver tout**" },
      { e: "refreshCw", t: "**Redémarrez l'ordinateur** — cela résout la plupart des blocages d'activation temporaires" },
      { e: "checkCircle", t: "Si l'erreur persiste : **Panneau de configuration → Office → Modifier → Réparation rapide**" },
    ]
  },
  {
    id: 24, title: "Application Siege – Problème", icon: "building", cat: "Applications", iconColor: "#0ea5e9", iconBg: "#f0f9ff", p: "P2", pl: "IMPORTANT",
    keys: ["siege", "application siege", "siège", "siege inaccessible", "connexion siege", "siege qui plante"], time: "5 min",
    note: "Si d'autres collègues ont le même problème, il s'agit probablement d'un incident serveur — escaladez directement.",
    symptoms: ["L'application Siege ne démarre pas ou plante", "Impossible de se connecter à Siege", "Siege affiche une erreur de connexion"],
    steps: [
      { e: "globe", t: "Vérifiez votre **connexion internet et réseau local** (câble / Wi-Fi actif)" },
      { e: "xCircle", t: "**Fermez complètement** Siege et relancez l'application" },
      { e: "key", t: "Vérifiez vos **identifiants de connexion** (compte Akwa Group à jour)" },
      { e: "monitor", t: "Vérifiez si **d'autres collègues** ont le même problème — si oui, c'est un incident serveur" },
      { e: "refreshCw", t: "**Redémarrez votre ordinateur** et relancez l'application Siege" },
      { e: "phone", t: "Si le problème persiste, **créez un ticket de support N2** avec le message d'erreur exact" },
    ]
  },
  {
    id: 25, title: "Afriware – Problème", icon: "folder", cat: "Applications", iconColor: "#8b5cf6", iconBg: "#f5f3ff", p: "P2", pl: "IMPORTANT",
    keys: ["afriware", "afriwir", "application afriware", "afriware inaccessible", "afriware qui plante", "connexion afriware"], time: "5 min",
    note: "Si d'autres collègues ont le même problème, il s'agit probablement d'un incident serveur — escaladez directement.",
    symptoms: ["Afriware ne démarre pas ou se ferme", "Impossible de se connecter à Afriware", "Afriware affiche une erreur de connexion ou de données"],
    steps: [
      { e: "globe", t: "Vérifiez votre **connexion internet et réseau local** (câble / Wi-Fi actif)" },
      { e: "xCircle", t: "**Fermez complètement** Afriware et relancez l'application" },
      { e: "key", t: "Vérifiez vos **identifiants de connexion** (compte Akwa Group à jour)" },
      { e: "monitor", t: "Vérifiez si **d'autres collègues** ont le même problème — si oui, c'est un incident serveur" },
      { e: "refreshCw", t: "**Redémarrez votre ordinateur** et relancez Afriware" },
      { e: "phone", t: "Si le problème persiste, **créez un ticket de support N2** avec le message d'erreur exact" },
    ]
  },
  {
    id: 26, title: "AGL – Problème", icon: "server", cat: "Applications", iconColor: "#0ea5e9", iconBg: "#f0f9ff", p: "P2", pl: "IMPORTANT",
    keys: ["agl", "application agl", "agl inaccessible", "agl qui plante", "connexion agl"], time: "5 min",
    note: "Si d'autres collègues ont le même problème, il s'agit probablement d'un incident serveur — escaladez directement.",
    symptoms: ["L'application AGL ne démarre pas ou plante", "Impossible de se connecter à AGL", "AGL affiche une erreur de connexion"],
    steps: [
      { e: "globe", t: "Vérifiez votre **connexion internet et réseau local** (câble / Wi-Fi actif)" },
      { e: "xCircle", t: "**Fermez complètement** AGL et relancez l'application" },
      { e: "key", t: "Vérifiez vos **identifiants de connexion** (compte Akwa Group à jour)" },
      { e: "monitor", t: "Vérifiez si **d'autres collègues** ont le même problème — si oui, c'est un incident serveur" },
      { e: "refreshCw", t: "**Redémarrez votre ordinateur** et relancez l'application AGL" },
      { e: "phone", t: "Si le problème persiste, **créez un ticket de support N2** avec le message d'erreur exact" },
    ]
  },
  {
    id: 27, title: "Micros – Problème", icon: "monitor", cat: "Applications", iconColor: "#f59e0b", iconBg: "#fefce8", p: "P2", pl: "IMPORTANT",
    keys: ["micros", "pos micros", "application micros", "caisse micros", "micros ne s'ouvre pas", "micros erreur"], time: "5 min",
    note: "Micros est une application POS critique — si elle ne répond pas, escaladez sans attendre au support N2.",
    symptoms: ["L'application Micros ne démarre pas", "Micros affiche une erreur de base de données ou de connexion", "Micros se ferme inopinément"],
    steps: [
      { e: "globe", t: "Vérifiez la **connexion réseau** de la caisse (câble RJ45 branché, LEDs allumées)" },
      { e: "xCircle", t: "**Fermez complètement** Micros et relancez l'application" },
      { e: "monitor", t: "Vérifiez si le **serveur Micros** est accessible — testez depuis un autre poste" },
      { e: "monitor", t: "Vérifiez si **d'autres collègues** ont le même problème — si oui, c'est un incident serveur" },
      { e: "refreshCw", t: "**Redémarrez la caisse** et relancez l'application Micros" },
      { e: "phone", t: "Si le problème persiste, **escaladez au support N2** avec le message d'erreur exact" },
    ]
  },
  {
    id: 28, title: "Lecteur – Ne Répond Pas", icon: "search", cat: "Matériel", iconColor: "#64748b", iconBg: "#f8fafc", p: "P3", pl: "NORMAL",
    keys: ["lecteur", "lecteur carte", "lecteur code barre", "scanner", "lecteur non reconnu", "lecteur bloqué", "code barre", "badge lecteur"], time: "3 min",
    note: "Si le lecteur n'est toujours pas reconnu après redémarrage, il peut s'agir d'un problème matériel — créez un ticket.",
    symptoms: ["Le lecteur de code-barre ou de carte ne répond pas", "Le lecteur n'est pas reconnu par Windows", "La lecture est partielle ou les données sont incorrectes"],
    steps: [
      { e: "plug", t: "Vérifiez que le **câble USB du lecteur** est bien branché — essayez un autre port USB" },
      { e: "refreshCw", t: "**Débranchez** puis **rebranchez** le lecteur — attendez 5 secondes entre les deux" },
      { e: "monitor", t: "Vérifiez dans le **Gestionnaire de périphériques** que le lecteur est reconnu (pas de triangle jaune)" },
      { e: "refreshCw", t: "**Redémarrez l'ordinateur** pour forcer la réinstallation automatique des pilotes" },
      { e: "eye", t: "Testez le lecteur avec **un autre câble USB** si disponible" },
      { e: "phone", t: "Si toujours non reconnu, **créez un ticket matériel** avec le modèle du lecteur" },
    ]
  },
  {
    id: 29, title: "Mot de Passe Self-Service", icon: "unlock", cat: "Guide", iconColor: "#6366f1", iconBg: "#eef2ff", p: "P3", pl: "NORMAL",
    keys: ["self service", "self-service", "mot de passe self", "portail mot de passe", "changer mdp", "reset autonome", "portail self service"], guideFile: "guide/Guide - Changement mot de passe self-service.pdf", time: "3 min",
    note: "Téléchargez le guide PDF pour un accompagnement visuel complet de la procédure.",
    symptoms: ["Changer son mot de passe de façon autonome", "Accéder au portail self-service sans le support", "Réinitialiser son mot de passe depuis le portail"],
    steps: [
      { e: "globe", t: "Ouvrez votre navigateur et accédez au **portail self-service** Akwa Group" },
      { e: "user", t: "Connectez-vous avec votre **adresse email professionnelle** (@akwagroup.ma)" },
      { e: "key", t: "Suivez les étapes pour **modifier ou réinitialiser** votre mot de passe" },
      { e: "checkCircle", t: "Consultez le **guide PDF complet** ci-dessous pour un accompagnement visuel" },
    ]
  },
  {
    id: 30, title: "Station VID Pompiste", icon: "monitor", cat: "Guide", iconColor: "#0ea5e9", iconBg: "#f0f9ff", p: "P3", pl: "NORMAL",
    keys: ["station vid", "pompiste", "station pompiste", "vid pompiste", "poste pompiste", "configuration pompiste"], guideFile: "guide/Guide STATION VID POMPISTE.pdf", time: "5 min",
    note: "Téléchargez le guide PDF pour la procédure complète de configuration et d'utilisation.",
    symptoms: ["Configurer ou utiliser la station VID Pompiste", "Problème sur le poste pompiste", "Guide de formation station VID"],
    steps: [
      { e: "monitor", t: "Vérifiez que la **station VID Pompiste** est allumée et connectée au réseau" },
      { e: "settings", t: "Vérifiez l'**état des périphériques** connectés à la station (écran, lecteur, imprimante)" },
      { e: "refreshCw", t: "Si la station ne répond pas, **redémarrez-la** et attendez le démarrage complet" },
      { e: "checkCircle", t: "Consultez le **guide de formation complet** ci-dessous pour la configuration détaillée" },
    ],
    video: "guide/guide Commande station.webm"
  },
  {
    id: 18, title: "Configuration VPN WARP", icon: "shield", cat: "Guide", iconColor: "#f97316", iconBg: "#fff7ed", p: "P3", pl: "NORMAL",
    keys: ["vpn", "warp", "cloudflare", "apps-portal", "zero trust", "azure ad", "connexion vpn", "client vpn", "warp déconnecté"], guideFile: "guide/Guide Configuration VPN WARP.pptx", time: "5 min",
    note: "Le nom d'équipe à renseigner est exactement : apps-portal (tout en minuscules, sans espace).",
    symptoms: ["Le client WARP apparaît déconnecté dans la barre des tâches", "Impossible d'accéder aux ressources internes Akwa", "WARP n'est pas encore configuré avec Cloudflare Zero Trust"],
    steps: [
      { e: "cloud", t: "Cliquez sur l'**icône nuage WARP** dans la barre des tâches, puis sur l'**icône réglages** (engrenage en bas à droite)" },
      { e: "settings", t: "Dans le menu qui s'ouvre, cliquez sur **Préférences**" },
      { e: "user", t: "Dans la popup, cliquez sur l'onglet **Compte**" },
      { e: "link", t: "Cliquez sur **Se connecter avec Cloudflare Zero Trust**" },
      { e: "checkCircle", t: "Dans la popup suivante, cliquez sur **Suivant** puis sur **Accepter**" },
      { e: "building", t: "Renseignez **apps-portal** comme nom d'équipe, puis validez" },
      { e: "globe", t: "Vous serez redirigé vers votre navigateur — cliquez sur **Azure AD – AKWA Azure AD**" },
      { e: "unlock", t: "Sur la page qui s'affiche, cliquez sur **Ouvrir Cloudflare WARP**" },
      { e: "checkCircle", t: "Le client devient bleu — cliquez sur l'icône pour vous **connecter**. WARP est opérationnel !" },
    ]
  },
  {
    id: 19, title: "PDA ATID Stock – Serveur Inaccessible", icon: "wifi", cat: "Caisse AX", iconColor: "#ef4444", iconBg: "#fef2f2", p: "P2", pl: "IMPORTANT",
    keys: ["pda", "atid", "sdstock", "stock", "serveur inaccessible", "pda stock", "connexion sdstock", "pda wifi", "magasin stock"], time: "5 min",
    note: "Si après ces vérifications SDSTOCK reste inaccessible, escaladez au support N2.",
    symptoms: ["Message 'Serveur inaccessible' dans SDSTOCK", "Impossible de se connecter à SDSTOCK depuis le PDA", "L'application SDSTOCK ne répond pas"],
    steps: [
      { e: "wifi", t: "Vérifiez que le PDA est connecté au **Wi-Fi magasin stock** (réseau dédié stock)" },
      { e: "settings", t: "Ouvrez **Wireless Manager** sur le PDA → vérifiez que **WLAN = ON**" },
      { e: "zap", t: "Si le Wi-Fi est **désactivé** → activez-le et attendez la reconnexion au réseau" },
      { e: "monitor", t: "Allez dans **Settings → Connections → Network Cards**" },
      { e: "checkCircle", t: "Dans *'My network card connects to'*, vérifiez que **'The Internet'** est sélectionné (et non 'Work')" },
      { e: "refreshCw", t: "**Relancez l'application SDSTOCK** et refaites le test de connexion" },
    ]
  },
  {
    id: 31, title: "Connexion Azure – Problème", icon: "cloud", cat: "Applications", iconColor: "#0078d4", iconBg: "#e6f3ff", p: "P2", pl: "IMPORTANT",
    keys: ["azure", "portail azure", "cloud azure", "azure inaccessible", "azure connexion", "microsoft azure", "portail cloud", "azure login", "session azure"], time: "3 min",
    note: "Ne pas cocher 'Mots de passe enregistrés' pour ne pas perdre vos identifiants.",
    symptoms: ["La page Azure ne se charge pas", "Erreur de connexion sur le portail Azure", "Session Azure expirée ou bloquée"],
    steps: [
      { e: "globe", t: "Ouvrez **Google Chrome** et cliquez sur les **3 points** en haut à droite" },
      { e: "trash", t: "Cliquez sur **Supprimer les données de navigation**" },
      { e: "calendar", t: "Sélectionnez la plage **'Depuis le début'**" },
      { e: "clipboard", t: "Cochez tout l'historique **sauf les mots de passe enregistrés**" },
      { e: "checkCircle", t: "Cliquez sur **Supprimer les données** et attendez la fin de l'opération" },
      { e: "refreshCw", t: "Relancez Chrome et accédez au **portail Azure** — la connexion devrait fonctionner" },
    ],
    imgs: [
      "problemes solution/Problème Azure/Image (3).jfif",
      "problemes solution/Problème Azure/Image (4).jfif",
    ]
  },
  {
    id: 32, title: "Xcally – Problème Connexion", icon: "phone", cat: "Applications", iconColor: "#7c3aed", iconBg: "#f5f3ff", p: "P2", pl: "IMPORTANT",
    keys: ["xcally", "xcally ne fonctionne pas", "centre d'appel", "softphone", "xcally déconnecté", "xcally erreur", "casque xcally", "appel centre xcally"], time: "5 min",
    note: "L'adresse IPv4 doit impérativement commencer par 10.10.30.X pour que Xcally fonctionne correctement.",
    symptoms: ["Xcally ne se connecte pas au serveur", "Impossible de passer ou recevoir des appels", "Le softphone Xcally affiche une erreur réseau"],
    steps: [
      { e: "wifi", t: "Vérifiez votre **connexion réseau** — sur PC portable, assurez-vous que le **VPN est déconnecté**" },
      { e: "plug", t: "Vérifiez que votre **casque est bien branché** au port USB ou Jack de votre ordinateur" },
      { e: "monitor", t: "Ouvrez l'**invite de commandes (CMD)** : appuyez sur `Win + R`, tapez `cmd` et validez" },
      { e: "activity", t: "Tapez **ipconfig** et appuyez sur Entrée — repérez l'adresse **IPv4**" },
      { e: "checkCircle", t: "L'adresse IPv4 doit commencer par **10.10.30.X** — si c'est le cas, relancez Xcally" },
      { e: "phone", t: "Si l'adresse IPv4 est différente de 10.10.30.X, **contactez le support** — problème réseau à escalader" },
    ],
    imgs: ["problemes solution/Problème xcally/Image (2).jfif"]
  },
  {
    id: 33, title: "Imprimante Hors Ligne (MyQ)", icon: "printer", cat: "Matériel", iconColor: "#dc2626", iconBg: "#fef2f2", p: "P2", pl: "IMPORTANT",
    keys: ["imprimante hors ligne", "imprimante offline", "imprimante déconnectée", "imprimante myq", "embedded down", "snmp", "imprimante ne répond plus", "imprimante réseau"], time: "5 min",
    note: "Le statut 'Embedded Down' signifie que l'imprimante ne communique plus avec le serveur MyQ via SNMP. Si le redémarrage ne suffit pas, escaladez au support N2.",
    symptoms: ["L'imprimante affiche 'Embedded Down' dans MyQ", "L'imprimante n'est pas accessible depuis le réseau", "Impossible d'envoyer un document à l'imprimante"],
    steps: [
      { e: "plug", t: "Vérifiez que le **câble réseau** est bien branché à l'imprimante et au port réseau mural" },
      { e: "eye", t: "Vérifiez le **port réseau (switch)** — testez un autre port si le câble semble OK" },
      { e: "refreshCw", t: "**Éteignez l'imprimante** (bouton power), attendez **30 secondes**, puis rallumez" },
      { e: "hourglass", t: "Attendez **2–3 minutes** après le redémarrage que l'imprimante s'initialise complètement" },
      { e: "monitor", t: "Depuis **MyQ (srv-myq-01:8090)**, vérifiez que l'imprimante redevient **En ligne**" },
      { e: "phone", t: "Si l'imprimante reste **'Embedded Down'**, escaladez au **support N2** — problème SNMP/réseau" },
    ],
    imgs: ["problemes solution/Problème imprimante/Image.jfif"]
  },
];

const _GROUPS_INLINE = [
  {
    id: 'tpe', label: 'TPE / APOS',
    icon: 'creditCard', color: '#1e6aff', bg: '#eff6ff',
    items: [
      { label: 'TPE Bloqué', problemId: 1 },
      { label: 'Erreur de Connexion', problemId: 2 },
      { label: 'Wi-Fi Introuvable', problemId: 3 },
    ]
  },
  {
    id: 'application', label: 'Application',
    icon: 'globe', color: '#1e6aff', bg: '#eff6ff',
    items: [
      { label: 'Messagerie', problemId: 6 },
      { label: 'Connexion Azure', problemId: 31 },
      { label: 'Xcally', problemId: 32 },
      { label: 'Teams', problemId: 20 },
      { label: 'Office', problemId: 23 },
      { label: 'Siege', problemId: 24 },
      { label: 'Afriware', problemId: 25 },
      { label: 'AGL', problemId: 26 },
      { label: 'Micros', problemId: 27 },
    ]
  },
  {
    id: 'materiel', label: 'Matériel',
    icon: 'monitor', color: '#64748b', bg: '#f8fafc',
    items: [
      { label: 'Imprimante PIN', problemId: 7 },
      { label: 'Imprimante Hors Ligne', problemId: 33 },
      { label: 'Écran', problemId: 21 },
      { label: 'Lecteur', problemId: 28 },
      { label: 'Clavier', problemId: 22 },
    ]
  },
  {
    id: 'guide', label: 'Guide',
    icon: 'shield', color: '#f97316', bg: '#fff7ed',
    items: [
      { label: 'Configuration VPN WARP', problemId: 18 },
      { label: 'Code PIN Impression', problemId: 7 },
      { label: 'Mot de Passe Self-Service', problemId: 29 },
      { label: 'Station VID Pompiste', problemId: 30 },
    ]
  },
  {
    id: 'caisse-ax', label: 'Caisse AX',
    icon: 'creditCard', color: '#ef4444', bg: '#fef2f2',
    items: [
      { label: 'Connexion caisse AX', problemId: 13 },
      { label: 'Tiroir caisse bloqué', problemId: 14 },
      { label: 'Impression ticket / journal', problemId: 15 },
      { label: 'Enregistrement client', problemId: 16 },
      { label: 'TPE Grappe – Appel attente', problemId: 17 },
      { label: 'PDA ATID Stock – Serveur inaccessible', problemId: 19 },
    ]
  },
];

let activeGroup = 'all';
let currentProblem = null;
let currentStep = 0;
let chatHistory = [];
let selectedImageBase64 = null;
let selectedImageMime = null;
let cameraStream = null;
let recognition = null;
let isRecording = false;
let voiceOutputEnabled = true;
let speechVoicesReady = false;
let currentAudio = null;
let currentObjectUrl = null;
const ttsAudioCache = new Map();


function initVoiceControls() {
  const voiceInputBtn = document.getElementById('voiceInputBtn');
  const voiceOutputBtn = document.getElementById('voiceOutputBtn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (voiceInputBtn) {
    if (!SpeechRecognition) {
      voiceInputBtn.style.display = 'none';
    } else {
      recognition = new SpeechRecognition();
      recognition.lang = 'fr-FR';
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        isRecording = true;
        voiceInputBtn.classList.add('recording');
        voiceInputBtn.title = 'Écoute en cours…';
      };

      recognition.onend = () => {
        isRecording = false;
        voiceInputBtn.classList.remove('recording');
        voiceInputBtn.title = 'Dicter un message';
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0]?.transcript || '')
          .join(' ')
          .trim();
        const input = document.getElementById('chat-input');
        if (input) input.value = transcript;
        const lastResult = event.results[event.results.length - 1];
        if (lastResult?.isFinal && input?.value.trim()) {
          sendChat();
        }
      };

      recognition.onerror = () => {
        isRecording = false;
        voiceInputBtn.classList.remove('recording');
      };

      voiceInputBtn.addEventListener('click', () => {
        try {
          if (isRecording) recognition.stop();
          else recognition.start();
        } catch (_err) {}
      });
    }
  }

  // voiceOutputBtn removed — lecture vocale active via Browser Speech

  if (window.speechSynthesis) {
    const markReady = () => { speechVoicesReady = true; };
    window.speechSynthesis.onvoiceschanged = markReady;
    window.speechSynthesis.getVoices();
    markReady();
  }
}

function stopSpeechOutput() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (_err) {}
    currentAudio = null;
  }
  if (currentObjectUrl) {
    try { URL.revokeObjectURL(currentObjectUrl); } catch (_err) {}
    currentObjectUrl = null;
  }
}

function detectSpeechLang(text) {
  const clean = String(text || '').trim();
  if (!clean) return 'fr-FR';
  if (/[؀-ۿ]/.test(clean)) return 'ar-MA';
  if (/\b(wach|bghit|machi|mzyan|khdam|safi|mzyana|darija|mgharba|allah|inchallah|wakha)\b/i.test(clean)) return 'ar-MA';
  return 'fr-FR';
}

function prepareTextForSpeech(text) {
  return String(text || '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\bTPE\b/g, 'té pé é')
    .replace(/\bAPOS\b/gi, 'a posse')
    .replace(/\bDOMS\b/gi, 'doms')
    .replace(/\bWi-?Fi\b/gi, 'waï faï')
    .replace(/\bVPN\b/gi, 'vé pé enne')
    .replace(/\bIT\b/g, 'informatique')
    .replace(/0522\s*677\s*766/g, 'zéro cinq vingt-deux, six soixante-dix-sept, sept cent soixante-six')
    .replace(/([:;])/g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitSpeechText(text, maxLength = 180) {
  const parts = [];
  const clean = String(text || '').trim();
  if (!clean) return parts;
  const sentences = clean.split(/(?<=[.!?\n])\s+/).filter(Boolean);
  let buffer = '';

  sentences.forEach((sentence) => {
    const s = sentence.trim();
    if (!s) return;
    if ((buffer + ' ' + s).trim().length <= maxLength) {
      buffer = (buffer + ' ' + s).trim();
    } else {
      if (buffer) parts.push(buffer);
      if (s.length <= maxLength) {
        buffer = s;
      } else {
        const words = s.split(/\s+/);
        let wordBuffer = '';
        words.forEach((word) => {
          if ((wordBuffer + ' ' + word).trim().length <= maxLength) {
            wordBuffer = (wordBuffer + ' ' + word).trim();
          } else {
            if (wordBuffer) parts.push(wordBuffer);
            wordBuffer = word;
          }
        });
        buffer = wordBuffer;
      }
    }
  });

  if (buffer) parts.push(buffer);
  return parts;
}

function pickBestVoice(lang) {
  if (!window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  if (!voices.length) return null;

  const wanted = lang === 'ar-MA'
    ? ['ar-MA', 'ar_MA', 'ar-SA', 'ar-EG', 'ar', 'fr-FR', 'fr']
    : ['fr-FR', 'fr_MA', 'fr-CA', 'fr', 'ar-MA', 'ar'];

  for (const prefix of wanted) {
    const exact = voices.find((voice) => voice.lang === prefix);
    if (exact) return exact;
    const starts = voices.find((voice) => (voice.lang || '').toLowerCase().startsWith(prefix.toLowerCase()));
    if (starts) return starts;
  }

  return voices[0] || null;
}


async function fetchServerTtsAudio(text, lang) {
  const cacheKey = `${lang}::${text}`;
  if (ttsAudioCache.has(cacheKey)) return ttsAudioCache.get(cacheKey);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch('/.netlify/functions/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang }),
      signal: controller.signal
    });

    if (!res.ok) return null;

    const data = await res.json().catch(() => null);
    if (!data?.audioBase64 || !data?.mimeType) return null;
    ttsAudioCache.set(cacheKey, data);
    return data;
  } catch (_err) {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function playBrowserSpeech(text, lang) {
  if (!window.speechSynthesis) return;
  const chunks = splitSpeechText(text);
  if (!chunks.length) return;

  stopSpeechOutput();
  const voice = pickBestVoice(lang);

  for (const chunk of chunks) {
    await new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = voice?.lang || lang;
      if (voice) utterance.voice = voice;
      utterance.rate = lang === 'ar-MA' ? 0.92 : 0.98;
      utterance.pitch = 1;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  }
}

async function speakText(text) {
  if (!voiceOutputEnabled) return;
  const clean = prepareTextForSpeech(text);
  if (!clean) return;

  const lang = detectSpeechLang(clean);
  stopSpeechOutput();

  // Browser Speech only — no remote TTS dependency
  await playBrowserSpeech(clean, lang);
}

const FLOW_DEFINITIONS = {
  tpe_connexion: {
    title: "Erreur de Connexion",
    badge: "P2 · IMPORTANT",
    subtitle: "TPE / APOS",
    steps: [
      "Sur le TPE, cliquez sur l'icône Connect Wi-Fi",
      "Cochez le bouton Hidden Wi-Fi",
      "Cliquez sur OK 3 fois ou plus",
      "Choisissez r2f01m6 dans la liste Wi-Fi"
    ],
    warning: "Si le réseau r2f01m6 n'apparaît pas dans la liste, consultez le problème 'Wi-Fi Introuvable'.",
    doneTitle: "Toutes les étapes suivies !",
    doneText: "Si le problème est résolu, excellent ! Sinon, contactez le support.",
    supportTitle: "Contacter le Support IT",
    supportText: "Notre équipe est disponible 24h/24, 7j/7 pour résoudre tout problème technique.",
    supportPhone: "0522 677 766",
    supportEmail: "support@akwagroup.ma"
  }
};

// ── VIDEO GUIDES ──────────────────────────────────────────────────────────────
function renderVideoStrip() {
  const strip = document.getElementById('video-strip');
  if (!strip) return;
  strip.innerHTML = `
    <div class="video-section">
      <div class="video-section-head">
        <span class="video-section-title">${IC.video} Vidéos tutoriels</span>
        <div class="video-nav">
          <button class="video-nav-btn" id="vscroll-prev" onclick="scrollVideos(-1)" aria-label="Précédent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="video-nav-btn" id="vscroll-next" onclick="scrollVideos(1)" aria-label="Suivant">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
      <div class="video-scroll-wrap">
        <div class="video-scroll" id="video-scroll">
          ${GUIDE_VIDEOS.map((v, i) => `
            <button class="video-card" onclick="openVideoModal(${i})" aria-label="Regarder : ${v.title}">
              <div class="video-thumb">
                <video src="${encodeURI(v.src)}" preload="metadata" muted playsinline tabindex="-1"></video>
                <div class="video-play-btn">${IC.play}</div>
                <div class="video-cat-badge">${v.cat}</div>
              </div>
              <div class="video-card-title">${v.title}</div>
            </button>`).join('')}
        </div>
        <div class="video-fade-right"></div>
      </div>
    </div>`;
  updateVideoNavBtns();
  document.getElementById('video-scroll')?.addEventListener('scroll', updateVideoNavBtns, { passive: true });
}

function scrollVideos(dir) {
  const el = document.getElementById('video-scroll');
  if (!el) return;
  const cardW = el.querySelector('.video-card')?.offsetWidth || 160;
  el.scrollBy({ left: dir * (cardW + 10) * 2, behavior: 'smooth' });
}

function updateVideoNavBtns() {
  const el = document.getElementById('video-scroll');
  const prev = document.getElementById('vscroll-prev');
  const next = document.getElementById('vscroll-next');
  if (!el || !prev || !next) return;
  const atStart = el.scrollLeft <= 4;
  const atEnd   = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
  prev.disabled = atStart;
  next.disabled = atEnd;
  prev.classList.toggle('video-nav-btn--dim', atStart);
  next.classList.toggle('video-nav-btn--dim', atEnd);
}

function openVideoModal(index) {
  const v = GUIDE_VIDEOS[index];
  if (!v) return;
  _playVideoModal(encodeURI(v.src), v.title);
}

function openVideoByProblem(src, title) {
  _playVideoModal(encodeURI(src), title);
}

function _playVideoModal(src, title) {
  closeLightbox(); // fermer lightbox si ouvert (z-index conflict)
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('vm-player');
  const titleEl = document.getElementById('vm-title');
  if (!modal || !player) return;
  player.src = src;
  player.load();
  if (titleEl) titleEl.textContent = title;
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.classList.add('vm-visible');
      player.play().catch(() => {});
    });
  });
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('vm-player');
  if (!modal) return;
  if (player) { player.pause(); player.removeAttribute('src'); player.load(); }
  modal.classList.remove('vm-visible');
  setTimeout(() => { modal.style.display = 'none'; }, 260);
}

// ── INIT ──────────────────────────────────────────────────────────────────────
async function initApp() {
  try {
    [PROBLEMS, GROUPS] = await Promise.all([
      fetch('./data/problems.json').then(r => r.json()),
      fetch('./data/groups.json').then(r => r.json()),
    ]);
  } catch {
    PROBLEMS = _PROBLEMS_INLINE;
    GROUPS = _GROUPS_INLINE;
  }
  buildCats();
  renderGroups();
  renderVideoStrip();
  initChat();
  registerSW();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

window.addEventListener('online', () => document.getElementById('offlineBar').classList.remove('show'));
window.addEventListener('offline', () => document.getElementById('offlineBar').classList.add('show'));

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  // Sync sidebar active state
  const sbMap = { home: 'sb-home', guide: 'sb-guide', chat: 'sb-chat', escalate: 'sb-escalate' };
  document.querySelectorAll('#sidebar .sb-btn').forEach(b => b.classList.remove('active'));
  const sbBtn = document.getElementById(sbMap[name]);
  if (sbBtn) sbBtn.classList.add('active');
  // Retour à l'accueil → grille des catégories
  if (name === 'home') { activeGroup = 'all'; renderGroups(); }
  window.scrollTo(0, 0);
}

function openGuide(problem) {
  currentProblem = problem;
  currentStep = 0;
  renderGuide();
  showView('guide');
}

// ── CATEGORIES ────────────────────────────────────────────────────────────────
function buildCats() {
  // Tab bar replaced by category grid — hide the old cats strip
  const cats = document.getElementById('cats');
  if (cats) cats.style.display = 'none';
}

function selectCat(id) {
  activeGroup = id;
  renderGroups();
  window.scrollTo(0, 0);
}

function catCardHtml(g) {
  const total = g.items.length;
  const preview = g.items.slice(0, 3).map(i => `<span class="cat-card-item">· ${i.label}</span>`).join('');
  return `
<button class="cat-card" onclick="selectCat('${g.id}')">
  <div class="cat-card-head">
    <div class="cat-card-icon" style="background:${g.bg};color:${g.color}">${IC[g.icon]}</div>
    <div class="cat-card-meta">
      <div class="cat-card-title">${g.label}</div>
      <div class="cat-card-count">${total} problème${total > 1 ? 's' : ''}</div>
    </div>
    <svg class="cat-card-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
  <div class="cat-card-items">${preview}</div>
</button>`;
}

// ── PROBLEM LIST ─────────────────────────────────────────────────────────────
function filterProblems() { renderGroups(); }

function pcardHtml(p) {
  return `
<button class="pcard" onclick="openGuide(PROBLEMS.find(x=>x.id===${p.id}))">
  <div class="pcard-icon" style="background:${p.iconBg};color:${p.iconColor}">${IC[p.icon]}</div>
  <div class="pcard-body">
    <div class="pcard-row1">
      <span class="pcard-title">${p.title}</span>
      <span class="badge badge-${p.p}">${p.p} · ${p.pl}</span>
    </div>
    <div class="pcard-meta">
      ${IC.clock}<span>${p.time}</span>
    </div>
    <div class="pcard-symptom">${p.symptoms[0]}</div>
  </div>
  <div class="pcard-chevron"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div>
</button>`;
}

function ticketItemHtml(label, g) {
  return `
<button class="pcard" onclick="window.open('https://sdesk.akwagroup.com/','_blank')">
  <div class="pcard-icon" style="background:${g.bg};color:${g.color}">${IC[g.icon]}</div>
  <div class="pcard-body">
    <div class="pcard-row1">
      <span class="pcard-title">${label}</span>
    </div>
    <div class="pcard-symptom">Ouvrir un ticket de support</div>
  </div>
  <div class="pcard-chevron"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div>
</button>`;
}

function renderGroups() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const wrap = document.getElementById('problem-list');

  // ── Mode recherche : liste plate tous problèmes ──────────────────────────────
  if (q) {
    const list = PROBLEMS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.keys.some(k => k.includes(q)) ||
      p.symptoms.some(s => s.toLowerCase().includes(q))
    );
    if (!list.length) {
      wrap.innerHTML = `
    <div class="empty">
      <div class="empty-icon">${IC.searchX}</div>
      <div class="empty-title">Problème non trouvé</div>
      <div class="empty-sub">Essayez l'assistant IA ou créez un ticket de support.</div>
      <button class="btn btn-primary" style="max-width:200px;margin:0 auto" onclick="showView('chat')">
        ${IC.bot} Assistant IA
      </button>
    </div>`;
      return;
    }
    wrap.innerHTML = list.map(p => pcardHtml(p)).join('');
    return;
  }

  // ── Grille des catégories ────────────────────────────────────────────────────
  if (activeGroup === 'all') {
    wrap.innerHTML = `<div class="cat-grid">${GROUPS.map(g => catCardHtml(g)).join('')}</div>`;
    return;
  }

  // ── Liste des problèmes d'une catégorie ──────────────────────────────────────
  const g = GROUPS.find(gr => gr.id === activeGroup);
  if (!g) { activeGroup = 'all'; renderGroups(); return; }

  const items = g.items.map(item => {
    if (item.problemId) {
      const p = PROBLEMS.find(pr => pr.id === item.problemId);
      return p ? pcardHtml(p) : ticketItemHtml(item.label, g);
    }
    return ticketItemHtml(item.label, g);
  }).join('');

  wrap.innerHTML = `
<div class="cat-list-header">
  <button class="cat-back-btn" onclick="selectCat('all')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    Toutes les catégories
  </button>
  <div class="cat-list-title-row">
    <div class="cat-list-icon" style="background:${g.bg};color:${g.color}">${IC[g.icon]}</div>
    <span class="cat-list-title-text">${g.label}</span>
    <span class="group-count">${g.items.length}</span>
  </div>
</div>
<div class="group-items">${items}</div>`;
}

// ── GUIDE ─────────────────────────────────────────────────────────────────────
function renderGuide() {
  const p = currentProblem;
  const total = p.steps.length;
  const s = currentStep;
  const isDone = s >= total;

  const dots = p.steps.map((_, i) => {
    if (i < s) return `<div class="step-dot done">${IC.check}</div>`;
    if (i === s) return `<div class="step-dot current">${i + 1}</div>`;
    return `<div class="step-dot future">${i + 1}</div>`;
  }).join('');

  const stepText = isDone ? '' : p.steps[s].t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  document.getElementById('guide-content').innerHTML = `
<button class="back-btn" onclick="showView('home')">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
  Retour
</button>

${isDone ? `
  <div class="success-box">
    <div class="success-icon">${IC.check}</div>
    <div class="success-title">Toutes les étapes suivies !</div>
    <div class="success-sub">Si le problème est résolu, excellent ! Sinon, contactez le support.</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:9px">
    <button class="btn btn-primary" onclick="showView('home')">
      ${IC.check} Oui, c'est résolu
    </button>
    ${p.escalateAfter ? `
    <a href="tel:${p.phone}" class="btn btn-danger">
      ${IC.phone} TPE encore bloqué → Appeler ${p.phone}
    </a>` : `
    <button class="btn btn-ghost" onclick="showView('escalate')">
      ${IC.alertTriangle} Non, toujours bloqué → Support
    </button>`}
  </div>
` : `
  <div class="guide-header">
    <div class="guide-icon" style="background:${p.iconBg};color:${p.iconColor}">${IC[p.icon]}</div>
    <div>
      <div style="font-size:17px;font-weight:800;margin-bottom:6px">${p.title}</div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span class="badge badge-${p.p}">${p.p} · ${p.pl}</span>
        <span style="font-size:11px;color:var(--text3)">${p.cat}</span>
      </div>
    </div>
  </div>

  <div class="symptoms-box">
    <div class="symptoms-label">Symptômes reconnus</div>
    ${p.symptoms.map(s => `
      <div class="symptom-row">
        <div class="symptom-check">${IC.check}</div>
        <span>${s}</span>
      </div>`).join('')}
  </div>

  ${p.video ? `
  <div class="guide-video-wrap">
    <div class="guide-video-label">${IC.video} Vidéo tutoriel</div>
    <div class="guide-video-player">
      <video class="guide-video" src="${encodeURI(p.video)}" controls playsinline preload="metadata">
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  </div>` : ''}

  ${p.guideFile ? `
  <a href="${p.guideFile}" target="_blank" class="btn-download">
    ${IC.fileText}
    <span>Télécharger le guide complet</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;margin-left:auto;opacity:.6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  </a>` : ''}

  ${p.imgs && p.imgs.length ? `
  <div class="img-gallery">
    <div class="img-gallery-label">${IC.eye} Photos de référence (${p.imgs.length})</div>
    <div class="img-gallery-strip">
      ${p.imgs.map((src, i) => `
        <button class="img-thumb" onclick="openLightbox(${i})" aria-label="Voir photo ${i+1}">
          <img src="${encodeURI(src)}" alt="Photo ${i+1}" loading="lazy" />
        </button>`).join('')}
    </div>
  </div>` : ''}

  <div class="progress-wrap">
    <div class="progress-top">
      <span class="progress-label">Étape ${s + 1} sur ${total}</span>
      <span class="progress-time">${IC.clock} ${p.time}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width:${((s + 1) / total) * 100}%"></div>
    </div>
  </div>

  <div class="step-dots">${dots}</div>

  <div class="step-card">
    <div class="step-icon">${IC[p.steps[s].e] || ''}</div>
    <div class="step-text">${stepText}</div>
  </div>

  ${p.note && s === total - 1 ? `
    <div class="note-box">
      ${IC.alertTriangle}
      <span>${p.note}</span>
    </div>` : ''}

  <div class="btn-row">
    <button class="btn btn-ghost" onclick="${s > 0 ? 'prevStep()' : "showView('home')"}" style="flex:0 0 auto;width:auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polyline points="15 18 9 12 15 6"/></svg>
      ${s > 0 ? 'Préc.' : 'Retour'}
    </button>
    <button class="btn btn-primary" onclick="${s < total - 1 ? 'nextStep()' : 'finishGuide()'}">
      ${s < total - 1 ? `Suivant <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polyline points="9 18 15 12 9 6"/></svg>` : `${IC.check} Terminé`}
    </button>
  </div>
`}
`;
}

function nextStep() { currentStep++; renderGuide(); }
function prevStep() { if (currentStep > 0) { currentStep--; renderGuide(); } }
function finishGuide() { currentStep = currentProblem.steps.length; renderGuide(); }

// ── IMAGE LIGHTBOX ──────────────────────────────────────────────────────────
let _lbIndex = 0;

function openLightbox(index) {
  const imgs = currentProblem.imgs || [];
  if (!imgs.length) return;
  _lbIndex = index;

  const existing = document.getElementById('lightbox-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="lb-backdrop" onclick="closeLightbox()"></div>
    <div class="lb-content">
      <button class="lb-close" onclick="closeLightbox()" aria-label="Fermer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      ${imgs.length > 1 ? `
      <button class="lb-nav lb-prev" onclick="lbNav(-1)" aria-label="Photo précédente">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="lb-nav lb-next" onclick="lbNav(1)" aria-label="Photo suivante">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>` : ''}
      <img id="lb-img" class="lb-img" src="${encodeURI(imgs[_lbIndex])}" alt="Photo ${_lbIndex + 1}" />
      ${imgs.length > 1 ? `<div class="lb-counter">${_lbIndex + 1} / ${imgs.length}</div>` : ''}
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('lb-visible'));
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;
  overlay.classList.remove('lb-visible');
  setTimeout(() => overlay.remove(), 250);
}

function lbNav(dir) {
  const imgs = currentProblem.imgs || [];
  _lbIndex = (_lbIndex + dir + imgs.length) % imgs.length;
  const img = document.getElementById('lb-img');
  const counter = document.querySelector('.lb-counter');
  if (img) { img.style.opacity = '0'; setTimeout(() => { img.src = encodeURI(imgs[_lbIndex]); img.style.opacity = '1'; }, 150); }
  if (counter) counter.textContent = `${_lbIndex + 1} / ${imgs.length}`;
}

// ── CHAT (local assistant) ─────────────────────────────────────────────────────
function initChat() {
  chatHistory = [];
  addMessage('bot', "Bonjour ! Je suis l'assistant IT d'Akwa Group.\n\nDécrivez votre problème en quelques mots et je vous oriente vers le bon guide.");
}

function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }

// Après une réponse IA textuelle, détecter le problème discuté et proposer la carte guide+vidéo
function suggestGuideCard(userMessage, botReply) {
  const combined = norm((userMessage || '') + ' ' + (botReply || ''));
  let bestScore = 0;
  let bestProblem = null;

  for (const p of PROBLEMS) {
    let score = 0;
    p.keys.forEach(k => { if (combined.includes(norm(k))) score += 2; });
    norm(p.title).split(/\s+/).forEach(w => { if (w.length >= 4 && combined.includes(w)) score += 1; });
    (p.symptoms || []).forEach(s => {
      const excerpt = norm(s).slice(0, 20);
      if (excerpt.length > 6 && combined.includes(excerpt)) score += 1;
    });
    if (score > bestScore) { bestScore = score; bestProblem = p; }
  }

  if (bestScore >= 2 && bestProblem) {
    setTimeout(() => showLocalProblemCard(bestProblem), 350);
  }
}

function localReply(text) {
  const q = norm(text);
  const scored = PROBLEMS.map(p => {
    let score = 0;
    p.keys.forEach(k => { if (q.includes(norm(k))) score += 2; });
    // Also match individual words of the title (min 4 chars)
    norm(p.title).split(/\s+/).forEach(w => { if (w.length >= 4 && q.includes(w)) score += 1; });
    return { p, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  if (!scored.length) {
    return { text: "Je n'ai pas trouvé de guide pour ce problème.\n\nVous pouvez :\n• Créer un ticket sur **sdesk.akwagroup.com**\n• Appeler le support : **0522 677 766**", problem: null };
  }
  const best = scored[0].p;
  const others = scored.slice(1, 3).map(x => `**${x.p.title}**`).join(', ');
  let msg = `J'ai trouvé un guide correspondant à votre problème.`;
  if (others) msg += `\n\nAutres guides possibles : ${others}`;
  return { text: msg, problem: best };
}

function addMessage(role, text) {
  chatHistory.push({ role, text });
  const wrap = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg-wrap ${role}`;
  if (role === 'bot') {
    div.innerHTML = `
  <div class="msg-avatar"><img src="images/Super AKWA.png" alt="bot"></div>
  <div class="msg-bubble bot">${text}</div>`;
    speakText(text);
  } else {
    div.innerHTML = `<div class="msg-bubble user">${text}</div>`;
  }
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}

function showTyping() {
  const wrap = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg-wrap bot';
  div.id = 'typing-indicator';
  div.innerHTML = `
<div class="msg-avatar"><img src="images/Super AKWA.png" alt="bot"></div>
<div class="msg-bubble bot typing">
  <span></span><span></span><span></span>
</div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

function addUnidentifiedImageMessage() {
  const wrap = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg-wrap bot';
  div.innerHTML = `
    <div class="msg-avatar"><img src="images/Super AKWA.png" alt="bot"></div>
    <div class="msg-bubble bot" style="padding:0;overflow:hidden;background:none;border:none;box-shadow:none">
      <div class="unid-card">
        <div class="unid-icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="unid-icon">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8.5" y1="8.5" x2="13.5" y2="13.5"/><line x1="13.5" y1="8.5" x2="8.5" y2="13.5"/>
          </svg>
        </div>
        <div class="unid-title">Image non identifiée</div>
        <div class="unid-sub">Je ne reconnais pas de problème IT dans cette image.</div>
        <div class="unid-tips">
          <div class="unid-tip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;flex-shrink:0"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Prenez une photo plus nette de <strong>l'écran ou du message d'erreur</strong>
          </div>
          <div class="unid-tip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;flex-shrink:0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Ou <strong>décrivez votre problème</strong> en quelques mots
          </div>
          <div class="unid-tip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;flex-shrink:0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.38 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Si urgent → <strong>0522 677 766</strong>
          </div>
        </div>
      </div>
    </div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}

function addImageMessage(role, text, imageSrc) {
  const wrap = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg-wrap ${role}`;
  let inner = '';
  if (role === 'bot') inner += `<div class="msg-avatar"><img src="images/Super AKWA.png" alt="bot"></div>`;
  inner += `<div class="msg-bubble ${role}">`;
  if (text) inner += `<div>${text}</div>`;
  inner += `<img src="${imageSrc}" class="chat-inline-image" alt="image" /></div>`;
  div.innerHTML = inner;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}

function resetSelectedImage() {
  stopCamera();
  selectedImageBase64 = null;
  selectedImageMime = null;
  const imageInput = document.getElementById('imageInput');
  if (imageInput) imageInput.value = '';
  const imageName = document.getElementById('imageName');
  if (imageName) imageName.textContent = '';
  const imagePreview = document.getElementById('imagePreview');
  if (imagePreview) imagePreview.style.display = 'none';
  const previewImg = document.getElementById('previewImg');
  if (previewImg) previewImg.src = '';
}

function renderFlow(flowKey) {
  const flow = FLOW_DEFINITIONS[flowKey];
  if (!flow) return;
  const wrap = document.getElementById('chat-messages');
  const outer = document.createElement('div');
  outer.className = 'msg-wrap bot';
  outer.innerHTML = `
    <div class="msg-avatar"><img src="images/Super AKWA.png" alt="bot"></div>
    <div class="msg-bubble bot flow-bubble">
      <div class="flow-card compact-flow" data-flow="${flowKey}" data-step="0" data-mode="steps">
        <div class="flow-step-circles compact">
          ${flow.steps.map((_, i) => `<span class="flow-circle ${i === 0 ? 'active' : ''}" data-index="${i}">${i + 1}</span>`).join('')}
        </div>
        <div class="flow-step-card compact">
          <div class="flow-step-text">${flow.steps[0]}</div>
        </div>
        <div class="flow-warning compact" style="display:none;"></div>
        <div class="flow-actions compact">
          <button type="button" class="flow-btn secondary" data-action="prev" disabled>Préc.</button>
          <button type="button" class="flow-btn primary" data-action="next">Suivant</button>
        </div>
      </div>
    </div>`;
  wrap.appendChild(outer);
  wrap.scrollTop = wrap.scrollHeight;
}

function updateFlowUI(flowCard) {
  const flow = FLOW_DEFINITIONS[flowCard.dataset.flow];
  const step = Number(flowCard.dataset.step || '0');
  const mode = flowCard.dataset.mode || 'steps';

  if (mode === 'support') {
    flowCard.innerHTML = `
      <div class="support-card">
        <h3>${flow.supportTitle}</h3>
        <p>${flow.supportText}</p>
        <div class="support-item">
          <div class="support-label">Support Téléphonique — Prioritaire</div>
          <div class="support-value">${flow.supportPhone}</div>
        </div>
        <div class="support-item">
          <div class="support-label">Email Support</div>
          <div class="support-value">${flow.supportEmail}</div>
        </div>
        <button type="button" class="flow-btn secondary full" data-action="home">Retour à l'accueil</button>
      </div>`;
    return;
  }

  if (mode === 'done') {
    flowCard.innerHTML = `
      <div class="done-card">
        <div class="done-icon">✓</div>
        <h3>${flow.doneTitle}</h3>
        <p>${flow.doneText}</p>
        <div class="done-actions">
          <button type="button" class="flow-btn primary full" data-action="resolved">Oui, c'est résolu</button>
          <button type="button" class="flow-btn secondary full" data-action="blocked">Non, toujours bloqué → Support</button>
        </div>
      </div>`;
    return;
  }

  const stepText = flowCard.querySelector('.flow-step-text');
  const warning = flowCard.querySelector('.flow-warning');
  const prevBtn = flowCard.querySelector('[data-action="prev"]');
  const nextBtn = flowCard.querySelector('[data-action="next"]');
  const circles = flowCard.querySelectorAll('.flow-circle');

  stepText.textContent = flow.steps[step];
  warning.style.display = step === flow.steps.length - 1 ? 'block' : 'none';
  warning.textContent = step === flow.steps.length - 1 ? flow.warning : '';

  circles.forEach((circle, index) => {
    circle.classList.remove('active', 'done');
    if (index < step) circle.classList.add('done');
    else if (index === step) circle.classList.add('active');
  });

  prevBtn.disabled = step === 0;
  nextBtn.textContent = step === flow.steps.length - 1 ? 'Terminé' : 'Suivant';
}

function showLocalProblemCard(problem) {
  const msgs = document.getElementById('chat-messages');
  const card = document.createElement('div');
  card.className = 'msg-wrap';
  card.innerHTML = `
    <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:14px 15px;max-width:88%;box-shadow:var(--shadow-sm)">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div style="width:36px;height:36px;border-radius:9px;background:${problem.iconBg};color:${problem.iconColor};display:flex;align-items:center;justify-content:center;flex-shrink:0">${IC[problem.icon]}</div>
        <div>
          <div style="font-size:13px;font-weight:800;color:var(--text1)">${problem.title}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:1px;display:flex;align-items:center;gap:4px"><span style="display:flex;width:11px;height:11px;flex-shrink:0">${IC.clock}</span> ${problem.time} ·<span style="font-weight:700;color:${problem.p==='P1'?'var(--red)':problem.p==='P2'?'var(--amber)':'var(--green)'}">${problem.pl}</span></div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--text2);margin-bottom:12px;line-height:1.5">${problem.symptoms[0]}</div>
      <div style="display:flex;gap:8px">
        <button onclick="openGuide(PROBLEMS.find(x=>x.id===${problem.id}))" style="flex:1;padding:9px;border-radius:var(--radius-sm);background:var(--navy);color:#fff;border:none;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer">
          Voir le guide →
        </button>
        ${problem.video ? `<button onclick="openVideoByProblem(decodeURIComponent('${encodeURIComponent(problem.video)}'),decodeURIComponent('${encodeURIComponent(problem.title)}'))" style="padding:9px 12px;border-radius:var(--radius-sm);background:rgba(30,106,255,.12);color:var(--primary);border:1.5px solid rgba(30,106,255,.25);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:5px;white-space:nowrap"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='none' style='width:13px;height:13px'><polygon points='5 3 19 12 5 21 5 3'/></svg> Vidéo</button>` : ''}
      </div>
    </div>`;
  msgs.appendChild(card);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text && !selectedImageBase64) return;
  input.value = '';

  const hadImage = !!selectedImageBase64;

  if (selectedImageBase64) {
    addImageMessage('user', text || 'Image envoyée', `data:${selectedImageMime};base64,${selectedImageBase64}`);
  } else {
    addMessage('user', text);
  }

  document.getElementById('chat-send').disabled = true;
  showTyping();

  try {
    const payload = { message: text };
    if (selectedImageBase64) {
      payload.imageBase64 = selectedImageBase64;
      payload.imageMimeType = selectedImageMime;
    }

    const res = await fetch('/.netlify/functions/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    hideTyping();

    if (data.type === 'flow' && data.flowKey) {
      renderFlow(data.flowKey);
    } else if (data.type === 'unidentified') {
      addUnidentifiedImageMessage();
    } else {
      const botReply = data.reply || 'Aucune réponse.';
      addMessage('bot', botReply);
      // Propose automatiquement la carte guide+vidéo si un problème est détecté
      suggestGuideCard(text, botReply);
    }
  } catch (_err) {
    // Fallback to local assistant when network/function unavailable
    hideTyping();
    if (hadImage && !text) {
      // Image-only message, no network — cannot analyze offline
      addUnidentifiedImageMessage();
    } else {
      const { text: reply, problem } = localReply(text);
      addMessage('bot', reply);
      if (problem) setTimeout(() => showLocalProblemCard(problem), 200);
    }
  } finally {
    resetSelectedImage();
    document.getElementById('chat-send').disabled = false;
    input.focus();
  }
}

// ── CHAT EVENT LISTENERS (flow buttons, image upload, camera) ─────────────────
document.addEventListener('DOMContentLoaded', () => {
  initVoiceControls();

  // Flow button clicks
  const chatMsgs = document.getElementById('chat-messages');
  if (chatMsgs) {
    chatMsgs.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const flowCard = e.target.closest('.flow-card');
      const action = btn.dataset.action;
      if (action === 'home' || action === 'resolved') { clearConversation(); return; }
      if (!flowCard) return;
      const flow = FLOW_DEFINITIONS[flowCard.dataset.flow];
      let step = Number(flowCard.dataset.step || '0');
      if (action === 'prev' && step > 0) { flowCard.dataset.step = String(step - 1); updateFlowUI(flowCard); return; }
      if (action === 'next') {
        if (step < flow.steps.length - 1) { flowCard.dataset.step = String(step + 1); updateFlowUI(flowCard); }
        else { flowCard.dataset.mode = 'done'; updateFlowUI(flowCard); }
        return;
      }
      if (action === 'blocked') { flowCard.dataset.mode = 'support'; updateFlowUI(flowCard); }
    });
  }

  // Image upload
  const imageInput = document.getElementById('imageInput');
  if (imageInput) {
    imageInput.addEventListener('change', () => {
      const file = imageInput.files && imageInput.files[0];
      if (!file) { resetSelectedImage(); return; }
      selectedImageMime = file.type || 'image/png';
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || '');
        selectedImageBase64 = result.includes(',') ? result.split(',')[1] : result;
        const previewImg = document.getElementById('previewImg');
        if (previewImg) previewImg.src = result;
        const imagePreview = document.getElementById('imagePreview');
        if (imagePreview) imagePreview.style.display = 'flex';
      };
      reader.readAsDataURL(file);
    });
  }

  // Remove image
  const removeImageBtn = document.getElementById('removeImageBtn');
  if (removeImageBtn) removeImageBtn.addEventListener('click', resetSelectedImage);

  // Camera open
  const openCameraBtn = document.getElementById('openCameraBtn');
  const cameraModal = document.getElementById('cameraModal');
  const cameraVideo = document.getElementById('cameraVideo');
  if (openCameraBtn) {
    openCameraBtn.addEventListener('click', async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("La caméra n'est pas disponible sur cet appareil."); return;
      }
      cameraModal.style.display = 'flex';
      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        cameraVideo.srcObject = cameraStream;
      } catch (err) {
        console.error(err);
        alert("Impossible d'ouvrir la caméra. Vérifie les permissions.");
        cameraModal.style.display = 'none';
      }
    });
  }

  // Camera capture
  const captureBtn = document.getElementById('captureBtn');
  if (captureBtn) {
    captureBtn.addEventListener('click', () => {
      if (!cameraVideo || !cameraVideo.videoWidth) return;
      const canvas = document.createElement('canvas');
      canvas.width = cameraVideo.videoWidth;
      canvas.height = cameraVideo.videoHeight;
      canvas.getContext('2d').drawImage(cameraVideo, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      selectedImageBase64 = dataUrl.split(',')[1];
      selectedImageMime = 'image/png';
      const previewImg = document.getElementById('previewImg');
      if (previewImg) previewImg.src = dataUrl;
      const imagePreview = document.getElementById('imagePreview');
      if (imagePreview) imagePreview.style.display = 'flex';
      cameraModal.style.display = 'none';
      stopCamera();
    });
  }

  // Camera close
  const closeCameraBtn = document.getElementById('closeCameraBtn');
  if (closeCameraBtn) {
    closeCameraBtn.addEventListener('click', () => {
      cameraModal.style.display = 'none';
      stopCamera();
    });
  }
});

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  const cameraVideo = document.getElementById('cameraVideo');
  if (cameraVideo) cameraVideo.srcObject = null;
}

// ── TICKET ────────────────────────────────────────────────────────────────────
function submitTicket() {
  const get = id => document.getElementById(id);
  const nom = get('f-nom').value.trim();
  const email = get('f-email').value.trim();
  const site = get('f-site').value.trim();
  const cat = get('f-cat').value;
  const desc = get('f-desc').value.trim();

  let valid = true;
  [['f-nom', nom], ['f-email', email && email.includes('@')], ['f-site', site], ['f-cat', cat], ['f-desc', desc]].forEach(([id, ok]) => {
    get(id).classList.toggle('error', !ok);
    if (!ok) valid = false;
  });
  if (!valid) { showToast('Remplissez tous les champs obligatoires'); return; }

  const id = 'AK-' + Date.now().toString().slice(-6);
  const priority = get('f-priority').value;
  const now = new Date().toLocaleString('fr-MA');
  const subject = `[${priority}] Ticket IT ${id} — ${cat} — ${site}`;
  const body = `TICKET SUPPORT IT — AKWA GROUP\n${'═'.repeat(40)}\nID Ticket    : ${id}\nDate         : ${now}\nPriorité     : ${priority}\n\nDEMANDEUR\nNom          : ${nom}\nMatricule    : ${get('f-mat').value || '—'}\nEmail        : ${email}\nSite/Station : ${site}\n\nPROBLÈME\nCatégorie    : ${cat}\nDescription  :\n${desc}\n\nÉtapes déjà essayées :\n${get('f-etapes').value || 'Aucune'}\n\n${'═'.repeat(40)}\nEnvoyé depuis Akwa IT Support App`;
  window.location.href = `mailto:support@akwagroup.ma?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  get('ticket-id-display').textContent = `Ticket ${id} créé ✅`;
  get('ticket-eta').innerHTML = `Temps de réponse estimé : <strong>${priority === 'P1' ? '< 30 min' : priority === 'P2' ? '< 1 heure' : 'dans la journée'}</strong>`;
  get('ticket-form').style.display = 'none';
  get('ticket-success').style.display = 'block';
}

function resetTicket() {
  ['f-nom', 'f-mat', 'f-email', 'f-site', 'f-desc', 'f-etapes'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-priority').value = 'P3';
  document.getElementById('f-cat').value = '';
  document.getElementById('ticket-form').style.display = 'block';
  document.getElementById('ticket-success').style.display = 'none';
}

// ── TOAST ──────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── SERVICE WORKER ────────────────────────────────────────────────────────────
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

function openChatWithZoom() {
  const avatar = document.getElementById('floating-avatar');
  avatar.style.animation = 'none';
  avatar.style.transition = 'none';
  avatar.style.transformOrigin = 'bottom right';
  avatar.style.animation = 'avatar-expand 0.6s cubic-bezier(0.4,0,0.2,1) forwards';
  setTimeout(() => {
    showView('chat');
    avatar.style.transformOrigin = '';
    avatar.style.animation = 'float-blink 2.5s ease-in-out infinite';
  }, 580);
}
