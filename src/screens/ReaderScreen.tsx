import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { colors, spacing } from '../theme';

export function ReaderScreen() {
  const [result, setResult] = useState<string | null>(null);

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Read a tag</Text>
      <Text style={styles.sub}>
        Hold any NFC tag to see what’s on it. Friendly empty state until something is found.
      </Text>

      <View style={styles.stage}>
        {result ? (
          <>
            <Text style={styles.resultLabel}>Tag contents</Text>
            <Text style={styles.result}>{result}</Text>
          </>
        ) : (
          <>
            <View style={styles.ring} />
            <Text style={styles.emptyTitle}>Nothing scanned yet</Text>
            <Text style={styles.emptyBody}>
              Bring a tag close to your phone. We’ll show a clear summary — not a raw dump.
            </Text>
          </>
        )}
      </View>

      <Button
        title={result ? 'Scan again (demo)' : 'Simulate scan (demo)'}
        onPress={() =>
          setResult('Wi‑Fi network “Studio 5G” · security WPA2 · ready to join')
        }
      />
      {result && (
        <Button title="Clear" variant="ghost" onPress={() => setResult(null)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.lg,
    paddingTop: 56,
  },
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
  stage: {
    flex: 1,
    backgroundColor: colors.bgElevated,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  ring: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: colors.accent,
    marginBottom: spacing.md,
    opacity: 0.5,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  emptyBody: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  resultLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  result: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 26,
  },
});
