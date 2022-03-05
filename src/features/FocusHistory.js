import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { sizes } from '../utils/sizes';
import { colors } from '../utils/colors';

export const FocusHistory = ({ history }) => {

  <View><Text>iusdhfjkosidlkfjl</Text></View>

  if (!history || history.length === 0){
  
    return (
      <View>
        <Text style={styles.title}>We haven't focused on anything... YET!</Text>
      </View>
    )}
    
  const renderItem = ({ item }) => <Text style={styles.items}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList style={styles.item} data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    padding: sizes.sm,
  },
  items: {
    color: colors.text,
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: sizes.md
  },
});
