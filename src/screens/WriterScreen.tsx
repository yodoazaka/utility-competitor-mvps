import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { TEMPLATES } from '../data/templates';
import { colors, spacing } from '../theme';

type Props = {
  templateId: string;
  onBack: () => void;
  onSaved: (label: string) => void;
};

export function WriterScreen({ templateId, onBack, onSaved }: Props) {
  const template = useMemo(
    () => TEMPLATES.find((t) => t.id === templateId) ?? TEMPLATES[0],
    [templateId]
  );
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});

  const fillStep = step === 0;
  const confirmStep = step === 1;
  const tapStep = step === 2;

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>Write · Step {step + 1} of 3</Text>
      <Text style={styles.title}>{template.title}</Text>

      {fillStep && (
        <>
          <Text style={styles.sub}>Fill in the details. Nothing is written until you confirm.</Text>
          {template.fields.map((field) => (
            <View key={field.key} style={styles.field}>
              <Text style={styles.fieldLabel}>{field.label}</Text>
              <TextInput
                value={values[field.key] ?? ''}
                onChangeText={(text) =>
                  setValues((prev) => ({ ...prev, [field.key]: text }))
                }
                placeholder={field.placeholder}
                placeholderTextColor={colors.textMuted}
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
          ))}
          <Button title="Continue" onPress={() => setStep(1)} />
          <Button title="Back to templates" variant="ghost" onPress={onBack} />
        </>
      )}

      {confirmStep && (
        <>
          <Text style={styles.sub}>Double-check before writing to a tag.</Text>
          <View style={styles.card}>
            {template.fields.map((field) => (
              <View key={field.key} style={styles.confirmRow}>
                <Text style={styles.confirmLabel}>{field.label}</Text>
                <Text style={styles.confirmValue}>
                  {values[field.key]?.trim() || '—'}
                </Text>
              </View>
            ))}
          </View>
          <Button title="Looks good — ready to tap" onPress={() => setStep(2)} />
          <Button title="Edit details" variant="secondary" onPress={() => setStep(0)} />
        </>
      )}

      {tapStep && (
        <>
          <View style={styles.tapRing}>
            <Text style={styles.tapEmoji}>NFC</Text>
            <Text style={styles.tapTitle}>Ready to tap</Text>
            <Text style={styles.tapBody}>
              Hold the tag to the back of your phone. In demo mode, tap Simulate write below.
            </Text>
          </View>
          <Button
            title="Simulate successful write"
            onPress={() =>
              onSaved(
                `${template.title}: ${
                  values[template.fields[0].key]?.trim() || 'untitled'
                }`
              )
            }
          />
          <Button title="Cancel" variant="ghost" onPress={onBack} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingTop: 56, paddingBottom: 40 },
  kicker: {
    color: colors.accent,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: spacing.sm,
  },
  sub: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  field: { marginBottom: spacing.md },
  fieldLabel: {
    color: colors.text,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.bgElevated,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  confirmRow: { marginBottom: spacing.sm },
  confirmLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  confirmValue: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
    marginTop: 2,
  },
  tapRing: {
    alignItems: 'center',
    backgroundColor: colors.bgElevated,
    borderRadius: 24,
    padding: spacing.xl,
    borderWidth: 2,
    borderColor: colors.accent,
    marginBottom: spacing.lg,
  },
  tapEmoji: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: spacing.sm,
  },
  tapTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: spacing.sm,
  },
  tapBody: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
