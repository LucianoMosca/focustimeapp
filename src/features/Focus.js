import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/Button';
import { sizes } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('null');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          selectionColor= {colors.gum}
          activeUnderlineColor= {colors.text} 
          theme={{
              colors: {
                    text: colors.text,
                 }
           }}
          style={styles.textInput}
          onChangeText={setSubject}
          label="Let's focus on..."
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: sizes.lg,
    backgroundColor: colors.gum,
    
  },
  inputContainer: {
    padding: sizes.sm,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
});
