import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';

interface Props {
  item: string;
  onSwipe: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableItem: React.FC<Props> = ({ item, onSwipe }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (e: any) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    if (offsetX > SCREEN_WIDTH / 2) {
      onSwipe();
    }
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </View>
      <View style={styles.empty} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#87ceeb',
    borderRadius: 8,
  },
  empty: {
    width: SCREEN_WIDTH,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SwipeableItem;
