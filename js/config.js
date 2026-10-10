/**
 * config.js — Konfigurasi frontend. ISI dua nilai di bawah setelah backend GAS di-deploy
 * dan OAuth Client ID dibuat (lihat PANDUAN-INSTALASI.md langkah Frontend).
 */
window.APP_CONFIG = {
  // URL Web App Apps Script hasil deploy (diakhiri /exec)
  GAS_URL: 'https://script.google.com/macros/s/AKfycbz6QqGNzq5SrqQnbHPC5Y5e8iYWLZ7yF-x1_QIpnFFRp5-bLPbLnqMDTiTCxN6OtNYAHA/exec',

  // OAuth 2.0 Web Client ID dari Google Cloud Console (dipakai Google Identity Services di login)
  GOOGLE_CLIENT_ID: 'GANTI_DENGAN_CLIENT_ID.apps.googleusercontent.com',

  APP_NAME: 'Inventaris Barang SMAN 1 Kamal Bangkalan',
  LS_PREFIX: 'invbrg:v1:'
};
