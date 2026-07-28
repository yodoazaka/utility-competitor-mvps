import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

export function HelpScreen() {
  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Help & pricing</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.price}>$2.99</Text>
        <Text style={styles.hint}>One-time unlock — less than typical Pro NFC writers.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>What ArcTag does</Text>
        <Text style={styles.hint}>
          Template-first NFC writing and reading. Share Wi‑Fi, open links, leave notes, or pass a
          contact — with confirmations before every write.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Who it’s for</Text>
        <Text style={styles.hint}>
          Anyone who wants NFC to feel simple: hosts, makers, small shops, and curious phone users.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>How to start</Text>
        <Text style={styles.hint}>
          1. Open Templates{'\n'}
          2. Pick Wi‑Fi, Link, Note, or Contact{'\n'}
          3. Confirm details → tap tag (or simulate in demo)
        </Text>
      </View>
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
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: { color: colors.text, fontSize: 16, fontWeight: '800', marginBottom: 6 },
  price: { color: colors.accent, fontSize: 32, fontWeight: '900', marginBottom: 6 },
  hint: { color: colors.textMuted, fontSize: 14, lineHeight: 21 },
});
