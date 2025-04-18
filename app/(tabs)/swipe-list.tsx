import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SwipeableItem from '../../components/SwipeableItem';




export default function SwipeListScreen() {
  const [items, setItems] = useState(Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`));

  const handleSwipe = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.text}>No items left</Text>
      ) : (
        items.map((item, i) => (
          <SwipeableItem key={i} item={item} onSwipe={() => handleSwipe(i)} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  text: { fontSize: 18, textAlign: 'center', marginTop: 20 }
});
