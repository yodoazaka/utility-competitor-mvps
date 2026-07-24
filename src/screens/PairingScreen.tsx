import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { colors, spacing } from '../theme';

const STEPS = [
  {
    title: 'Plug in the adapter',
    body: 'Find the OBD-II port under the dash (usually near the steering column). Push the Bluetooth adapter in until it seats firmly, then turn the ignition to ON.',
  },
  {
    title: 'Pair with Apex OBD',
    body: 'Enable Bluetooth on your phone. Tap Connect below — Apex looks for a compatible adapter and confirms the link with a green status.',
  },
  {
    title: 'See live data',
    body: 'Once paired, the dashboard shows RPM, speed, coolant, and more. Open Codes anytime a check-engine light appears for plain-English help.',
  },
];

type Props = {
  onComplete: () => void;
  onSkipDemo: () => void;
};

export function PairingScreen({ onComplete, onSkipDemo }: Props) {
  const [step, setStep] = useState(0);
  const current = STEPS[step];
  const last = step === STEPS.length - 1;

  return (
    <View style={styles.wrap}>
      <Text style={styles.kicker}>Setup · Step {step + 1} of {STEPS.length}</Text>
      <View style={styles.progress}>
        {STEPS.map((_, i) => (
          <View key={i} style={[styles.seg, i <= step && styles.segOn]} />
        ))}
      </View>
      <Text style={styles.title}>{current.title}</Text>
      <Text style={styles.body}>{current.body}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tip</Text>
        <Text style={styles.cardBody}>
          Keep the phone within a few meters of the adapter. Cheap no-name adapters can be flaky —
          if pairing fails, try another ELM327-class unit.
        </Text>
      </View>

      <View style={styles.actions}>
        {last ? (
          <>
            <Button title="Connect adapter (demo)" onPress={onComplete} />
            <Button title="Explore with sample data" variant="secondary" onPress={onSkipDemo} />
          </>
        ) : (
          <Button title="Next" onPress={() => setStep((s) => s + 1)} />
        )}
        {step > 0 && (
          <Button title="Back" variant="ghost" onPress={() => setStep((s) => s - 1)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.lg,
    paddingTop: 64,
  },
  kicker: {
    color: colors.accent,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  progress: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: spacing.lg,
  },
  seg: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.bgSoft,
  },
  segOn: {
    backgroundColor: colors.accent,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: spacing.md,
  },
  body: {
    color: colors.textMuted,
    fontSize: 17,
    lineHeight: 26,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    color: colors.text,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardBody: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  actions: {
    marginTop: 'auto',
    gap: 10,
    paddingBottom: spacing.md,
  },
});
