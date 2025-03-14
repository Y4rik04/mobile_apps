import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import RowLayoutScreen from '@/components/RowLayoutScreen';
import ColumnLayoutScreen from '@/components/ColumnLayoutScreen';
import GridLayoutScreen from '@/components/GridLayoutScreen';

export default function LayoutsScreen() {
  const [layout, setLayout] = useState<'row' | 'column' | 'grid'>('row');

  return (
    <View style={styles.container}>
      {layout === 'row' && <RowLayoutScreen />}
      {layout === 'column' && <ColumnLayoutScreen />}
      {layout === 'grid' && <GridLayoutScreen />}

      <View style={styles.buttonContainer}>
        <Button title="Row Layout" onPress={() => setLayout('row')} />
        <Button title="Column Layout" onPress={() => setLayout('column')} />
        <Button title="Grid Layout" onPress={() => setLayout('grid')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
});
