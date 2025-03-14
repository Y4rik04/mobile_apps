
// components/GridLayoutScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const GridLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
      <View style={[styles.square, { backgroundColor: 'yellow' }]} />
      <View style={[styles.square, { backgroundColor: 'purple' }]} />
      <View style={[styles.square, { backgroundColor: 'orange' }]} />
      <View style={[styles.square, { backgroundColor: 'pink' }]} />
      <View style={[styles.square, { backgroundColor: 'brown' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
  },
  square: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default GridLayoutScreen;
