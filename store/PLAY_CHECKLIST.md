# Play Store upload checklist — ArcTag NFC

## Package
- Application ID: `com.arctagnfc.app`
- Version name: `1.0.0`
- Price: **$2.99** one-time (Paid app in Play Console)

## Build & submit
```bash
npm install
npx eas-cli login
npx eas-cli init
npm run build:android
npm run submit:android
```

## Listing
- Title: ArcTag NFC
- Descriptions: `STORE.md`
- Assets: `store/assets/`
- Category: Tools / Productivity
- Privacy policy: host `store/privacy-policy.md`
- Declare **NFC** hardware feature (optional required for phones without NFC — usually `android.hardware.nfc` as not required so non-NFC devices can install demo; for production you may set `android.hardware.nfc` required=true)

## Content rating
Typically Everyone. Disclose that users may store Wi‑Fi passwords on tags.
