import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { colors, spacing } from '../theme';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: ViewStyle;
};

export function Button({ title, onPress, variant = 'primary', style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'ghost' && styles.ghost,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          variant === 'ghost' && styles.ghostLabel,
          variant === 'secondary' && styles.secondaryLabel,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  primary: { backgroundColor: colors.accent },
  secondary: {
    backgroundColor: colors.bgSoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: { backgroundColor: 'transparent' },
  pressed: { opacity: 0.88, transform: [{ scale: 0.98 }] },
  label: {
    color: '#12180A',
    fontSize: 17,
    fontWeight: '800',
  },
  secondaryLabel: { color: colors.text },
  ghostLabel: { color: colors.accent },
});
