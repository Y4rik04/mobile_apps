import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RowLayoutScreen from './RowLayoutScreen';
import ColumnLayoutScreen from './ColumnLayoutScreen';
import GridLayoutScreen from './GridLayoutScreen';



export default function LayoutSwitcher() {
  const [layout, setLayout] = useState<'row' | 'column' | 'grid'>('row');

  return (
    <View style={{ flex: 1 }}>
      {layout === 'row' && <RowLayoutScreen />}
      {layout === 'column' && <ColumnLayoutScreen />}
      {layout === 'grid' && <GridLayoutScreen />}

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
        <Button title="Row" onPress={() => setLayout('row')} />
        <Button title="Column" onPress={() => setLayout('column')} />
        <Button title="Grid" onPress={() => setLayout('grid')} />
      </View>
    </View>
  );
}
