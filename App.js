import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { sizes } from './src/utils/sizes';
import { Countdown } from './src/components/Countdown';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
          <View style={{ flex: 0.3 }}>
            <Focus addSubject={setCurrentSubject} />
             <FocusHistory history={history}/>
          </View>
          
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => setHistory([...history, subject])}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
      <View>
     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGum,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: sizes.lg,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text,
  },
});
