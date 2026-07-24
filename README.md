# Apex OBD

Clear car diagnostics for everyone. One-time **$3.99**.

## Run locally
```bash
npm install
npm start
```

## Play Store (production AAB)
See **[store/PLAY_CHECKLIST.md](store/PLAY_CHECKLIST.md)** for the full checklist.

```bash
npx eas-cli login
npx eas-cli init
npm run build:android      # produces .aab
npm run submit:android     # optional: draft to internal track
```

Store assets live in `store/assets/`. Privacy policy draft: `store/privacy-policy.md` (host on HTTPS before submit).
