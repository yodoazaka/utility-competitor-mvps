import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { colors, spacing } from '../theme';

type Props = {
  profiles: string[];
  onWriteNew: () => void;
};

export function ProfilesScreen({ profiles, onWriteNew }: Props) {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Saved profiles</Text>
      <Text style={styles.sub}>
        Reuse successful writes later. Empty state stays friendly until you save your first tag.
      </Text>

      {profiles.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No profiles yet</Text>
          <Text style={styles.emptyBody}>
            Write a Wi‑Fi, link, note, or contact tag — it’ll show up here for quick reuse.
          </Text>
          <Button title="Browse templates" onPress={onWriteNew} />
        </View>
      ) : (
        profiles.map((p) => (
          <View key={p} style={styles.row}>
            <Text style={styles.rowTitle}>{p}</Text>
            <Text style={styles.rowMeta}>Saved · demo</Text>
          </View>
        ))
      )}
    </ScrollView>
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
  empty: {
    backgroundColor: colors.bgElevated,
    borderRadius: 20,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  emptyBody: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  row: {
    backgroundColor: colors.bgElevated,
    borderRadius: 14,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  rowTitle: { color: colors.text, fontSize: 16, fontWeight: '700' },
  rowMeta: { color: colors.textMuted, fontSize: 13, marginTop: 4 },
});
