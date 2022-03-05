import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/Button';
import { sizes } from '../utils/sizes';

export const Timing = ({onChangeTime}) => {
  return (
     <>
    <RoundedButton  style={styles.buttons} size={75} title={'10'} onPress={() => {onChangeTime(10)}} />
    <RoundedButton  style={styles.buttons} size={75} title={'15'} onPress={() => {onChangeTime(15)}}/>
    <RoundedButton  style={styles.buttons} size={75} title={'20'} onPress={() => {onChangeTime(20)}}/>
  </>
  )
 
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: sizes.md,
    
  }
})
