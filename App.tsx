import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TabBar } from './src/components/TabBar';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { FaultsScreen } from './src/screens/FaultsScreen';
import { PairingScreen } from './src/screens/PairingScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { colors } from './src/theme';

type Phase = 'welcome' | 'pairing' | 'app';
type Tab = 'dashboard' | 'faults' | 'settings';

export default function App() {
  const [phase, setPhase] = useState<Phase>('welcome');
  const [tab, setTab] = useState<Tab>('dashboard');
  const [connected, setConnected] = useState(false);

  const enterApp = (linked: boolean) => {
    setConnected(linked);
    setTab('dashboard');
    setPhase('app');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style="light" />
        {phase === 'welcome' && (
          <WelcomeScreen onStart={() => setPhase('pairing')} />
        )}
        {phase === 'pairing' && (
          <SafeAreaView style={styles.flex} edges={['bottom']}>
            <PairingScreen
              onComplete={() => enterApp(true)}
              onSkipDemo={() => enterApp(false)}
            />
          </SafeAreaView>
        )}
        {phase === 'app' && (
          <SafeAreaView style={styles.flex} edges={['bottom']}>
            <View style={styles.flex}>
              {tab === 'dashboard' && <DashboardScreen connected={connected} />}
              {tab === 'faults' && <FaultsScreen />}
              {tab === 'settings' && (
                <SettingsScreen
                  onRestart={() => {
                    setPhase('welcome');
                    setConnected(false);
                  }}
                />
              )}
            </View>
            <TabBar
              active={tab}
              onChange={(key) => setTab(key as Tab)}
              tabs={[
                { key: 'dashboard', label: 'Live' },
                { key: 'faults', label: 'Codes' },
                { key: 'settings', label: 'Settings' },
              ]}
            />
          </SafeAreaView>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1 },
});
