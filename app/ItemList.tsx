import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Alert } from 'react-native';

const initialItems = [
  { id: '1', name: 'Apple', price: 10 },
  { id: '2', name: 'Banana', price: 5 },
  { id: '3', name: 'Orange', price: 8 },
  { id: '4', name: 'Grapes', price: 12 },
  { id: '5', name: 'Watermelon', price: 15 },
  { id: '6', name: 'Strawberry', price: 20 },
  { id: '7', name: 'Pineapple', price: 25 },
  { id: '8', name: 'Peach', price: 18 },
  { id: '9', name: 'Plum', price: 7 },
  { id: '10', name: 'Cherry', price: 22 }
];

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const handleDelete = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search items..."
        value={search}
        onChangeText={setSearch}
      />
      <Button
        title={`Sort by Price (${sortAsc ? 'Ascending' : 'Descending'})`}
        onPress={() => setSortAsc(!sortAsc)}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="X" onPress={() => handleDelete(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noItems}>No items found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  noItems: { textAlign: 'center', marginTop: 20, fontStyle: 'italic' }
});
