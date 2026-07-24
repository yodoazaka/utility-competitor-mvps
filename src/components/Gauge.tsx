import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

type Props = {
  label: string;
  value: number;
  unit: string;
  max: number;
};

export function Gauge({ label, value, unit, max }: Props) {
  const pct = Math.min(1, Math.max(0, value / max));
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {Number.isInteger(value) ? value : value.toFixed(1)}
        {unit ? <Text style={styles.unit}> {unit}</Text> : null}
      </Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    flexBasis: '47%',
    marginBottom: spacing.md,
  },
  label: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  value: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  unit: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  track: {
    marginTop: spacing.sm,
    height: 6,
    borderRadius: 99,
    backgroundColor: colors.bgSoft,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 99,
  },
});
