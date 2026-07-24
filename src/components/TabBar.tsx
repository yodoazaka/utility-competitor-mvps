import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

type Tab = { key: string; label: string };

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
};

export function TabBar({ tabs, active, onChange }: Props) {
  return (
    <View style={styles.bar}>
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={styles.tab}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
            {isActive ? <View style={styles.underline} /> : <View style={styles.spacer} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: colors.bgElevated,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: spacing.sm },
  label: { color: colors.textMuted, fontSize: 13, fontWeight: '700' },
  labelActive: { color: colors.accent },
  underline: {
    marginTop: 6,
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.accent,
  },
  spacer: { marginTop: 6, height: 3 },
});
