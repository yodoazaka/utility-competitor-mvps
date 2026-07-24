import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DEMO_FAULTS, FaultCode } from '../data/faults';
import { colors, spacing } from '../theme';

const severityColor = {
  low: colors.success,
  medium: colors.warn,
  high: colors.danger,
};

export function FaultsScreen() {
  const [open, setOpen] = useState<string | null>(DEMO_FAULTS[0]?.code ?? null);

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Fault codes</Text>
      <Text style={styles.sub}>
        Tap any code for a plain-English explanation and a sensible next step — no acronym soup.
      </Text>
      {DEMO_FAULTS.map((fault) => (
        <FaultCard
          key={fault.code}
          fault={fault}
          expanded={open === fault.code}
          onPress={() => setOpen(open === fault.code ? null : fault.code)}
        />
      ))}
    </ScrollView>
  );
}

function FaultCard({
  fault,
  expanded,
  onPress,
}: {
  fault: FaultCode;
  expanded: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.code}>{fault.code}</Text>
        <View style={[styles.pill, { backgroundColor: severityColor[fault.severity] + '22' }]}>
          <Text style={[styles.pillText, { color: severityColor[fault.severity] }]}>
            {fault.severity}
          </Text>
        </View>
      </View>
      <Text style={styles.cardTitle}>{fault.title}</Text>
      {expanded && (
        <View style={styles.details}>
          <Text style={styles.sectionLabel}>What this means</Text>
          <Text style={styles.detail}>{fault.plainEnglish}</Text>
          <Text style={styles.sectionLabel}>What to do</Text>
          <Text style={styles.detail}>{fault.whatToDo}</Text>
        </View>
      )}
      <Text style={styles.expandHint}>{expanded ? 'Tap to collapse' : 'Tap for explanation'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingTop: 56, paddingBottom: 40 },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  sub: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    marginVertical: spacing.md,
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  code: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  details: { marginTop: spacing.md },
  sectionLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
    marginTop: 8,
  },
  detail: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  expandHint: {
    marginTop: spacing.sm,
    color: colors.textMuted,
    fontSize: 12,
  },
});
