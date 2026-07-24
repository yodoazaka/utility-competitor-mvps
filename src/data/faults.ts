export type FaultCode = {
  code: string;
  title: string;
  plainEnglish: string;
  severity: 'low' | 'medium' | 'high';
  whatToDo: string;
};

export const DEMO_FAULTS: FaultCode[] = [
  {
    code: 'P0420',
    title: 'Catalyst efficiency below threshold',
    plainEnglish:
      'Your catalytic converter is not cleaning exhaust as well as it should. Often a worn converter, exhaust leak, or aging oxygen sensor.',
    severity: 'medium',
    whatToDo: 'Check for exhaust leaks first. If the light returns, have a shop test the converter and O2 sensors.',
  },
  {
    code: 'P0301',
    title: 'Cylinder 1 misfire detected',
    plainEnglish:
      'Cylinder 1 is not firing smoothly. Common causes: spark plug, coil pack, or injector issues.',
    severity: 'high',
    whatToDo: 'Avoid hard driving. Inspect spark plug and ignition coil for cylinder 1 before longer trips.',
  },
  {
    code: 'P0171',
    title: 'System too lean (Bank 1)',
    plainEnglish:
      'The engine is getting too much air or not enough fuel on bank 1. Vacuum leaks and dirty MAF sensors are frequent culprits.',
    severity: 'medium',
    whatToDo: 'Listen for hissing under the hood and check the air intake hose for cracks.',
  },
];

export const DEMO_GAUGES = [
  { id: 'rpm', label: 'RPM', value: 2140, unit: '', max: 7000 },
  { id: 'speed', label: 'Speed', value: 42, unit: 'mph', max: 120 },
  { id: 'coolant', label: 'Coolant', value: 192, unit: '°F', max: 250 },
  { id: 'load', label: 'Engine load', value: 34, unit: '%', max: 100 },
  { id: 'batt', label: 'Battery', value: 14.2, unit: 'V', max: 16 },
  { id: 'intake', label: 'Intake air', value: 86, unit: '°F', max: 200 },
];
