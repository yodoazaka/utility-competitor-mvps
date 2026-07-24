import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { colors, spacing } from '../theme';

export function SettingsScreen() {
  const [tipped, setTipped] = useState(false);

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Pricing</Text>
        <Text style={styles.value}>Free</Text>
        <Text style={styles.hint}>
          Optional tip $0.49 — never required. Cheaper (and fairer) than paid-only boosters.
        </Text>
        <Button
          title={tipped ? 'Thanks — tip recorded (demo)' : 'Send $0.49 tip (demo)'}
          variant={tipped ? 'secondary' : 'primary'}
          onPress={() => {
            setTipped(true);
            Alert.alert('Tip', 'Demo only — no real charge in this MVP.');
          }}
          style={{ marginTop: spacing.md }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>About AmpBoost</Text>
        <Text style={styles.hint}>
          What it does: one-tap session helper that frees memory and focus noise.{'\n'}
          Who it’s for: mobile gamers who want honest tools.{'\n'}
          How to start: open Home → tap Boost → launch your game.
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
    fontWeight: '900',
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
  value: { color: colors.accent, fontSize: 28, fontWeight: '900', marginBottom: 6 },
  hint: { color: colors.textMuted, fontSize: 14, lineHeight: 21 },
});
