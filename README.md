# Utility competitor MVPs

Three Expo apps on separate branches, each configured for Google Play AAB upload via EAS.

| Branch | App | Package ID | Price |
|--------|-----|------------|-------|
| `app/apex-obd` | Apex OBD | `com.apexobd.app` | $3.99 |
| `app/ampboost` | AmpBoost | `com.ampboost.app` | Free (+ optional tip) |
| `app/arctag-nfc` | ArcTag NFC | `com.arctagnfc.app` | $2.99 |

## Upload any app
```bash
git checkout app/apex-obd   # or app/ampboost / app/arctag-nfc
npm install
npx eas-cli login
npx eas-cli init
npm run build:android       # production .aab
npm run submit:android      # draft → internal track
```

Each branch includes `store/PLAY_CHECKLIST.md`, privacy policy draft, Data safety notes, feature graphic, icon, and screenshots.
