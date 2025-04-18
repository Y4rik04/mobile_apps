import React, { useState } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';

export default function ScrollExampleScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <View key={i} style={styles.box}>
          <Text style={styles.text}>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  box: {
    backgroundColor: '#2196F3',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8
  },
  text: { color: 'white', fontSize: 16 }
});
