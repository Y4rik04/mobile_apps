import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';

export default function TouchFeedbackScreen() {
  const [pressText, setPressText] = useState('Default Text');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Opacity pressed!')}>
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={[styles.button, { backgroundColor: '#ccc' }]}
        underlayColor="#aaa"
        onPress={() => Alert.alert('Highlight pressed!')}
      >
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>

      <Pressable
        style={styles.button}
        onPressIn={() => setPressText('Pressed')}
        onPressOut={() => setPressText('Default Text')}
        onLongPress={() => setPressText('Long Pressed')}
      >
        <Text style={styles.text}>{pressText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  button: { padding: 16, backgroundColor: '#4CAF50', borderRadius: 8 },
  text: { color: '#fff', fontWeight: 'bold' }
});
