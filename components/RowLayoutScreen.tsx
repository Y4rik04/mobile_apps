// components/RowLayoutScreen.tsx
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';

const { width } = Dimensions.get('window');
const boxSize = width * 0.2; // 20% ширини екрану

const RowLayoutScreen = () => {
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
    flexDirection: 'row',
    justifyContent: 'center', // or 'space-around'
    alignItems: 'center',
    flex: 1,
  },
  square: {
    width: 80,
    height: 80,
    margin: 10,
  },
  box: {
    width: boxSize,
    height: boxSize,
    margin: Platform.OS === 'ios' ? 10 : 5, // більше відступів на iOS
  },
});

export default RowLayoutScreen;
