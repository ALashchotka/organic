import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IItem } from '@organic/api/types';
import { RootStackList, RootStackNavigation } from '@organic/navigation/types';

import Item from './Item';

import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ITEMS: IItem[] = [
  {
    id: 1,
    title: 'Item',
    description: 'Item description',
    image:
      'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    title: 'Item',
    description: 'Item description',
    image:
      'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    title: 'Item',
    description: 'Item description',
    image:
      'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 4,
    title: 'Item',
    description: 'Item description',
    image:
      'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww',
  },
];

export default function MainScreen() {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<RootStackNavigation>();

  const openItem = (item: IItem) => {
    navigation.navigate(RootStackList.DETAILS, { item });
  };

  const renderItem = ({ item }: { item: IItem }) => (
    <Item item={item} onPress={() => openItem(item)} />
  );

  const keyExtractor = (item: IItem) => `item_${item.id}`;

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom || 16 }]}
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={<ActivityIndicator color="#909090" />}
      />
    </View>
  );
}
