import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
  const renderItem = () => null;

  return (
    <SafeAreaView>
      <FlatList data={[]} renderItem={renderItem} />
    </SafeAreaView>
  );
}
