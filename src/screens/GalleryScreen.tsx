import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TEMPLATES } from '../data/templates';
import { colors, spacing } from '../theme';

type Props = {
  onPick: (templateId: string) => void;
};

export function GalleryScreen({ onPick }: Props) {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.brand}>ArcTag NFC</Text>
      <Text style={styles.title}>Start with a template</Text>
      <Text style={styles.sub}>
        Pick what you want the tag to do. ArcTag walks you through writing it — step by step,
        with a clear confirm before anything is saved.
      </Text>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Demo mode · NFC writes are simulated in this MVP</Text>
      </View>
      {TEMPLATES.map((t) => (
        <Pressable key={t.id} onPress={() => onPick(t.id)} style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>{t.title}</Text>
            <Text style={styles.rowBlurb}>{t.blurb}</Text>
          </View>
          <Text style={styles.chevron}>→</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingTop: 56, paddingBottom: 40 },
  brand: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.6,
  },
  sub: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  banner: {
    backgroundColor: colors.bgSoft,
    borderRadius: 12,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  bannerText: {
    color: colors.accentDim,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rowText: { flex: 1, paddingRight: spacing.sm },
  rowTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  rowBlurb: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  chevron: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: '700',
  },
});
