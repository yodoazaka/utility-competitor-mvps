import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TabBar } from './src/components/TabBar';
import { HomeScreen } from './src/screens/HomeScreen';
import { SessionScreen } from './src/screens/SessionScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { TipsScreen } from './src/screens/TipsScreen';
import { colors } from './src/theme';

type Tab = 'home' | 'session' | 'tips' | 'settings';

export default function App() {
  const [tab, setTab] = useState<Tab>('home');
  const [boosting, setBoosting] = useState(false);

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.flex}>
            {tab === 'home' && (
              <HomeScreen
                boosting={boosting}
                onToggle={() => setBoosting((v) => !v)}
              />
            )}
            {tab === 'session' && <SessionScreen boosting={boosting} />}
            {tab === 'tips' && <TipsScreen />}
            {tab === 'settings' && <SettingsScreen />}
          </View>
          <TabBar
            active={tab}
            onChange={(key) => setTab(key as Tab)}
            tabs={[
              { key: 'home', label: 'Boost' },
              { key: 'session', label: 'Session' },
              { key: 'tips', label: 'Tips' },
              { key: 'settings', label: 'More' },
            ]}
          />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1 },
});
