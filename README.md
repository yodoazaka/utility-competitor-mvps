# ArcTag NFC

Template-first NFC writer. **$2.99** one-time.

Three Expo apps on separate branches, each configured for Google Play AAB upload via EAS.

| Branch | App | Package ID | Price |
|--------|-----|------------|-------|
| `app/apex-obd` | Apex OBD | `com.apexobd.app` | $3.99 |
| `app/ampboost` | AmpBoost | `com.ampboost.app` | Free (+ optional tip) |
| `app/arctag-nfc` | ArcTag NFC | `com.arctagnfc.app` | $2.99 |

## Run
```bash
npm install
npm start
```

## Play Store
See **[store/PLAY_CHECKLIST.md](store/PLAY_CHECKLIST.md)**.

```bash
npx eas-cli login && npx eas-cli init
npm run build:android
npm run submit:android
```

## Production AAB downloads

| App | AAB |
|-----|-----|
| Apex OBD | https://expo.dev/artifacts/eas/LRHoljLyMHTtGxjMMS26tTWD5HB9Wlhu9jQlHtfk69E.aab |
| AmpBoost | https://expo.dev/artifacts/eas/5eLTkqogG7BDWvf0r_m3K2rVH9BwMTh__rIels5nNm0.aab |
| ArcTag NFC | https://expo.dev/artifacts/eas/fOS6myXVcmq3OwsXfOysEZfrdfy-0jU1RuQl7wIa190.aab |

## Privacy policy URLs (Play Console)

| App | URL |
|-----|-----|
| Apex OBD | https://yodoazaka.github.io/utility-competitor-mvps/privacy-apex-obd.html |
| AmpBoost | https://yodoazaka.github.io/utility-competitor-mvps/privacy-ampboost.html |
| ArcTag NFC | https://yodoazaka.github.io/utility-competitor-mvps/privacy-arctag-nfc.html |

## Rebuild
```bash
git checkout app/apex-obd   # or app/ampboost / app/arctag-nfc
npm install
npm run build:android
```
