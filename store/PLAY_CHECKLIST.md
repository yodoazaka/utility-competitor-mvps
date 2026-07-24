# Play Store upload checklist — Apex OBD

## Package
- Application ID: `com.apexobd.app`
- Version name: `1.0.0` (auto-increment versionCode via EAS `production` profile)
- Price: **$3.99** one-time (Paid app; set in Play Console → Monetize)

## One-time setup
1. Create a Google Play Developer account ($25).
2. Install deps: `npm install`
3. Log in to Expo: `npx eas-cli login`
4. Link project: `npx eas-cli init` (writes `extra.eas.projectId` into app config)
5. Host `store/privacy-policy.md` on HTTPS → paste URL in Play Console.
6. Generate upload keystore (EAS manages this on first build when prompted).

## Build the AAB (required by Play)
```bash
npm run build:android
# or: npx eas-cli build -p android --profile production
```
Download the `.aab` from the EAS build page.

## Create the Play listing
- **Title:** Apex OBD
- **Short description:** (see STORE.md)
- **Full description:** (see STORE.md)
- **App icon:** 512×512 → `store/assets/icon-512.png`
- **Feature graphic:** 1024×500 → `store/assets/feature-graphic.png`
- **Phone screenshots:** at least 2 → `store/assets/screenshots/`
- **Category:** Auto & Vehicles (or Maps & Navigation / Tools if needed)
- **Contact email:** required
- **Privacy policy URL:** required

## Content rating
Complete IARC questionnaire: typically **Everyone** / low maturity (utility; no user-generated social content).

## Submit
```bash
npm run submit:android
# or upload the AAB manually in Play Console → Production/Internal testing
```
Start with **Internal testing** track (eas submit defaults to internal draft).

## Notes
- This MVP stubs live OBD hardware; disclose “Demo mode included” in the listing.
- Replace `privacy@apexobd.example` with a real inbox before launch.
