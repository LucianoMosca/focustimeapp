import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/Button';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  0 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = () => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    onTimerEnd(focusSubject)
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={styles.countdown}>
          {!isStarted ? (
            <Text style={styles.title}> Let's focus on:</Text>
          ) : (
            <Text style={styles.title}> We are focusing on:</Text>
          )}
          <Text style={styles.text}>{focusSubject}</Text>
        </View>
      </View>

      <View>
        <ProgressBar
          progress={progress}
          color={colors.pink}
          style={styles.progressBar}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <View style={{ marginRight: sizes.xxxl }}>
          <Timing onChangeTime={setMinutes} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          {!isStarted ? (
            <View>
              <RoundedButton onPress={() => setIsStarted(true)} title="start" />
            </View>
          ) : (
            <View>
              <RoundedButton
                onPress={() => setIsStarted(false)}
                title="pause"
              />
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: sizes.xxl,
            }}>
            <RoundedButton size={70} title="back" onPress={clearSubject} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: sizes.md,
    textAlign: 'center',
  },
  title: {
    color: colors.text,
    fontSize: sizes.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },

  countdown: {
    flex: 0.5,
    backgroundColor: colors.gum,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.5,
    flexDirection: 'row',
    padding: sizes.md,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  progressBar: {
    height: sizes.md,
    borderRadius: sizes.sm,
  },
});
