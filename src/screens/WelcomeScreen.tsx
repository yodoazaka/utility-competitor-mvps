import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components/Button';
import { colors, spacing } from '../theme';

type Props = {
  onStart: () => void;
};

export function WelcomeScreen({ onStart }: Props) {
  return (
    <LinearGradient colors={['#0B1218', '#0F2A2A', '#0B1218']} style={styles.flex}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>Apex OBD</Text>
        <Text style={styles.headline}>Car diagnostics, explained in plain English.</Text>
        <Text style={styles.body}>
          Plug in a Bluetooth OBD-II adapter, see live gauges, and understand check-engine
          lights without decoding jargon. Built for drivers who want clarity — not a wall of
          raw PIDs.
        </Text>

        <View style={styles.points}>
          {[
            '3-step guided setup: plug → pair → drive',
            'Fault codes with “what this means” and next steps',
            'Calm live dashboard with large readable gauges',
            'One-time purchase — no subscription',
          ].map((item) => (
            <View key={item} style={styles.pointRow}>
              <View style={styles.dot} />
              <Text style={styles.pointText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Unlock Apex OBD</Text>
          <Text style={styles.price}>$3.99</Text>
          <Text style={styles.priceNote}>One-time · Family Sharing friendly · Demo mode included</Text>
        </View>

        <Button title="Start guided setup" onPress={onStart} />
        <Text style={styles.footnote}>
          Works with standard ELM327-class Bluetooth OBD-II adapters. Demo mode uses sample
          data so you can explore the app before pairing.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: {
    padding: spacing.lg,
    paddingTop: 72,
    paddingBottom: 48,
  },
  brand: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: spacing.md,
  },
  headline: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
    letterSpacing: -0.8,
    marginBottom: spacing.md,
  },
  body: {
    color: colors.textMuted,
    fontSize: 17,
    lineHeight: 26,
    marginBottom: spacing.lg,
  },
  points: { marginBottom: spacing.lg },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
    marginTop: 7,
  },
  pointText: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
  priceBox: {
    backgroundColor: colors.bgElevated,
    borderRadius: 18,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  priceLabel: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    color: colors.text,
    fontSize: 40,
    fontWeight: '800',
    marginVertical: 4,
  },
  priceNote: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  footnote: {
    marginTop: spacing.md,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});
