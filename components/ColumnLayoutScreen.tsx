// components/ColumnLayoutScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColumnLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center', // Try other values like 'space-around', 'space-between'
    alignItems: 'center',
    flex: 1,
  },
  square: {
    width: 80,
    height: 80,
    margin: 10,
  },
});

export default ColumnLayoutScreen;
