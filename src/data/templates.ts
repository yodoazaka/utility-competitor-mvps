export type NfcTemplate = {
  id: string;
  title: string;
  blurb: string;
  fields: { key: string; label: string; placeholder: string }[];
};

export const TEMPLATES: NfcTemplate[] = [
  {
    id: 'wifi',
    title: 'Share Wi‑Fi',
    blurb: 'Guests tap once to join your network — no password typing.',
    fields: [
      { key: 'ssid', label: 'Network name', placeholder: 'Home Wi‑Fi' },
      { key: 'password', label: 'Password', placeholder: '••••••••' },
    ],
  },
  {
    id: 'url',
    title: 'Open a link',
    blurb: 'Launch a website, menu, or portfolio when someone taps the tag.',
    fields: [{ key: 'url', label: 'URL', placeholder: 'https://example.com' }],
  },
  {
    id: 'text',
    title: 'Save a note',
    blurb: 'Store a short message — lockbox codes, desk labels, reminders.',
    fields: [{ key: 'text', label: 'Message', placeholder: 'Spare key in drawer' }],
  },
  {
    id: 'contact',
    title: 'Share contact',
    blurb: 'Hand someone your name and phone without exchanging cards.',
    fields: [
      { key: 'name', label: 'Name', placeholder: 'Alex Rivera' },
      { key: 'phone', label: 'Phone', placeholder: '+1 555 0100' },
    ],
  },
];
