# Play Store upload checklist — AmpBoost

## Package
- Application ID: `com.ampboost.app`
- Version name: `1.0.0`
- Pricing: **Free** (+ optional $0.49 tip via Play Billing when wired)

## Build & submit
```bash
npm install
npx eas-cli login
npx eas-cli init
npm run build:android
npm run submit:android
```

## Listing
- Title: AmpBoost
- Short/full description: see `STORE.md`
- Icon 512: `store/assets/icon-512.png`
- Feature graphic: `store/assets/feature-graphic.png`
- Screenshots: `store/assets/screenshots/`
- Category: Tools (or Productivity)
- Privacy policy URL: host `store/privacy-policy.md`

## Content rating
IARC: typically Everyone / low maturity. Avoid exaggerated performance claims in the listing (Play policy).

## Policy tip
Do **not** claim guaranteed FPS multipliers. Use the honest copy in STORE.md.
