import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/Button";
import { sizes } from "../utils/sizes";

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        size={50}
        title={"10"}
        onPress={() => {
          onChangeTime(10);
        }}
      />
      <RoundedButton
        size={50}
        title={"15"}
        onPress={() => {
          onChangeTime(15);
        }}
      />
      <RoundedButton
        size={50}
        title={"20"}
        onPress={() => {
          onChangeTime(20);
        }}
      />
      <RoundedButton
        size={50}
        title={"25"}
        onPress={() => {
          onChangeTime(25);
        }}
      />
      <RoundedButton
        size={50}
        title={"30"}
        onPress={() => {
          onChangeTime(30);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});
