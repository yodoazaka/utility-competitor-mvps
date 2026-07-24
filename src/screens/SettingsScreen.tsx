import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { colors, spacing } from '../theme';

type Props = {
  onRestart: () => void;
};

export function SettingsScreen({ onRestart }: Props) {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.value}>$3.99 one-time</Text>
        <Text style={styles.hint}>No subscription. Unlock once, use on your devices.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>About Apex OBD</Text>
        <Text style={styles.hint}>
          Apex OBD turns raw diagnostic codes into clear guidance. Who it’s for: drivers who want
          to understand a check-engine light before visiting a shop. How to start: follow the
          3-step setup, or explore demo data immediately.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Demo mode</Text>
        <Text style={styles.hint}>
          Hardware pairing is stubbed in this MVP. Live gauges and codes use sample streams so you
          can evaluate the experience.
        </Text>
      </View>
      <Button title="Replay welcome & setup" variant="secondary" onPress={onRestart} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingTop: 56, paddingBottom: 40, gap: spacing.md },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  value: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  hint: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
});
