import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gauge } from '../components/Gauge';
import { DEMO_GAUGES } from '../data/faults';
import { colors, spacing } from '../theme';

type Props = {
  connected: boolean;
};

export function DashboardScreen({ connected }: Props) {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Live dashboard</Text>
      <View style={[styles.badge, connected ? styles.badgeOn : styles.badgeDemo]}>
        <View style={[styles.badgeDot, connected ? styles.dotOn : styles.dotDemo]} />
        <Text style={styles.badgeText}>
          {connected ? 'Adapter linked · demo stream' : 'Demo mode · sample data'}
        </Text>
      </View>
      <Text style={styles.sub}>
        Large gauges, less clutter. Values update from your adapter when hardware is connected.
      </Text>
      <View style={styles.grid}>
        {DEMO_GAUGES.map((g) => (
          <Gauge key={g.id} {...g} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingTop: 56, paddingBottom: 32 },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    marginTop: spacing.sm,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 99,
  },
  badgeOn: { backgroundColor: '#12352F' },
  badgeDemo: { backgroundColor: colors.bgSoft },
  badgeDot: { width: 8, height: 8, borderRadius: 4 },
  dotOn: { backgroundColor: colors.success },
  dotDemo: { backgroundColor: colors.warn },
  badgeText: { color: colors.text, fontSize: 13, fontWeight: '600' },
  sub: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    marginVertical: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
