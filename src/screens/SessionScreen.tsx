import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

type Props = {
  boosting: boolean;
};

export function SessionScreen({ boosting }: Props) {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Active session</Text>
      <Text style={styles.sub}>
        A simple HUD so you know what AmpBoost is doing — and what it is not.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status</Text>
        <Text style={styles.big}>{boosting ? 'Boost session running' : 'Idle'}</Text>
        <Text style={styles.hint}>
          {boosting
            ? 'Background apps trimmed · notification noise reduced · game kept in focus.'
            : 'Tap Boost on Home when you start a match or campaign.'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Before → after</Text>
        <Row left="Background apps" right={boosting ? 'Cleared' : 'Unchanged'} />
        <Row left="Focus mode" right={boosting ? 'Enabled' : 'Off'} />
        <Row left="Claimed speed gain" right="Not faked — device dependent" />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Honesty note</Text>
        <Text style={styles.hint}>
          No booster can magically multiply FPS on every phone. AmpBoost reduces contention so
          your device can do its best — results vary by hardware and game.
        </Text>
      </View>
    </ScrollView>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLeft}>{left}</Text>
      <Text style={styles.rowRight}>{right}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingTop: 56, paddingBottom: 40 },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
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
  cardTitle: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  big: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 8,
  },
  hint: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  rowLeft: { color: colors.text, fontSize: 14, flex: 1 },
  rowRight: { color: colors.accent, fontSize: 14, fontWeight: '700' },
});
