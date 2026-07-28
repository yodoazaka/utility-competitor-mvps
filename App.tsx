import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TabBar } from './src/components/TabBar';
import { GalleryScreen } from './src/screens/GalleryScreen';
import { HelpScreen } from './src/screens/HelpScreen';
import { ProfilesScreen } from './src/screens/ProfilesScreen';
import { ReaderScreen } from './src/screens/ReaderScreen';
import { WriterScreen } from './src/screens/WriterScreen';
import { colors } from './src/theme';

type Tab = 'gallery' | 'reader' | 'profiles' | 'help';

export default function App() {
  const [tab, setTab] = useState<Tab>('gallery');
  const [writingId, setWritingId] = useState<string | null>(null);
  const [profiles, setProfiles] = useState<string[]>([]);

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.flex}>
            {writingId ? (
              <WriterScreen
                templateId={writingId}
                onBack={() => setWritingId(null)}
                onSaved={(label) => {
                  setProfiles((prev) => [label, ...prev]);
                  setWritingId(null);
                  setTab('profiles');
                }}
              />
            ) : (
              <>
                {tab === 'gallery' && (
                  <GalleryScreen onPick={(id) => setWritingId(id)} />
                )}
                {tab === 'reader' && <ReaderScreen />}
                {tab === 'profiles' && (
                  <ProfilesScreen
                    profiles={profiles}
                    onWriteNew={() => setTab('gallery')}
                  />
                )}
                {tab === 'help' && <HelpScreen />}
              </>
            )}
          </View>
          {!writingId && (
            <TabBar
              active={tab}
              onChange={(key) => setTab(key as Tab)}
              tabs={[
                { key: 'gallery', label: 'Templates' },
                { key: 'reader', label: 'Read' },
                { key: 'profiles', label: 'Saved' },
                { key: 'help', label: 'Help' },
              ]}
            />
          )}
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1 },
});
