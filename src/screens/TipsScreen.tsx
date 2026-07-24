import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

const TIPS = [
  {
    title: 'Boost right before you play',
    body: 'Start AmpBoost, then launch your game. Stopping mid-match is fine — it just returns the phone to normal.',
  },
  {
    title: 'Charge while you grind',
    body: 'Long sessions heat phones up. Boosting helps with memory contention; a cooler device still plays better.',
  },
  {
    title: 'Skip miracle claims',
    body: 'If an app promises “4× FPS,” treat it as marketing. AmpBoost tells you what changed — Memory, Focus, Heat risk.',
  },
  {
    title: 'Optional tip, never a wall',
    body: 'AmpBoost is free. A $0.49 tip supports development if you want — features stay unlocked either way.',
  },
];

export function TipsScreen() {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>How to use AmpBoost</Text>
      <Text style={styles.sub}>
        Short explainers so you get value in under a minute — no buried settings maze.
      </Text>
      {TIPS.map((tip) => (
        <View key={tip.title} style={styles.card}>
          <Text style={styles.cardTitle}>{tip.title}</Text>
          <Text style={styles.body}>{tip.body}</Text>
        </View>
      ))}
    </ScrollView>
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
    color: colors.accent,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 8,
  },
  body: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
});
