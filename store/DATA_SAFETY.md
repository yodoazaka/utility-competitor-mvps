# Play Console — Data safety (Apex OBD)

Fill Play Console → App content → Data safety roughly as follows:

| Question | Answer |
|----------|--------|
| Does your app collect or share user data? | **No** (for this MVP with no analytics/accounts). If you later add Crashlytics/Firebase, update this. |
| Is all user data encrypted in transit? | N/A if no collection; otherwise Yes (HTTPS). |
| Can users request deletion? | N/A / Yes — uninstall removes on-device data. |

**Data types:** none collected by default.

**Permissions justification (when asked):**
- Bluetooth / Nearby devices: connect to OBD-II adapters.
- Location: Android Bluetooth scan requirement only — not used for ads or tracking.
