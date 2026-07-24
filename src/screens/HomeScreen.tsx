import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing } from '../theme';

type Props = {
  boosting: boolean;
  onToggle: () => void;
};

export function HomeScreen({ boosting, onToggle }: Props) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!boosting) {
      pulse.setValue(1);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.06, duration: 700, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [boosting, pulse]);

  return (
    <LinearGradient colors={['#0A0C0A', '#142014', '#0A0C0A']} style={styles.flex}>
      <View style={styles.content}>
        <Text style={styles.brand}>AmpBoost</Text>
        <Text style={styles.headline}>One tap. Honest boost.</Text>
        <Text style={styles.body}>
          Frees memory and prioritizes your game session. No fake “4× faster” claims — just a
          clear before/after status you can trust.
        </Text>

        <View style={styles.statusRow}>
          <StatusChip label="Memory" value={boosting ? 'Freed' : 'Normal'} active={boosting} />
          <StatusChip label="Focus" value={boosting ? 'On' : 'Off'} active={boosting} />
          <StatusChip label="Heat risk" value={boosting ? 'Watch' : 'Idle'} active={false} />
        </View>

        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <Pressable
            onPress={onToggle}
            style={({ pressed }) => [
              styles.boostBtn,
              boosting && styles.boostBtnOn,
              pressed && { opacity: 0.9 },
            ]}
          >
            <Text style={[styles.boostLabel, boosting && styles.boostLabelOn]}>
              {boosting ? 'Boosting… tap to stop' : 'Boost'}
            </Text>
          </Pressable>
        </Animated.View>

        <Text style={styles.footnote}>
          Free forever. Optional tip ($0.49) if AmpBoost helps your sessions — never required.
        </Text>
      </View>
    </LinearGradient>
  );
}

function StatusChip({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active: boolean;
}) {
  return (
    <View style={[styles.chip, active && styles.chipOn]}>
      <Text style={styles.chipLabel}>{label}</Text>
      <Text style={[styles.chipValue, active && styles.chipValueOn]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: 64,
    justifyContent: 'center',
  },
  brand: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  headline: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: -1,
    marginBottom: spacing.sm,
  },
  body: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  statusRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: spacing.xl,
  },
  chip: {
    flex: 1,
    backgroundColor: colors.bgElevated,
    borderRadius: 14,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipOn: {
    borderColor: colors.accentDim,
    backgroundColor: '#162016',
  },
  chipLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
  },
  chipValue: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  chipValueOn: { color: colors.accent },
  boostBtn: {
    alignSelf: 'center',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.accent,
    shadowOpacity: 0.35,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 0 },
  },
  boostBtnOn: {
    backgroundColor: colors.bgSoft,
    borderWidth: 3,
    borderColor: colors.accent,
  },
  boostLabel: {
    color: '#12180A',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  boostLabelOn: { color: colors.accent },
  footnote: {
    marginTop: spacing.xl,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
});
