import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { IItem } from '@organic/api/types';
import { Item } from '@organic/components';
import { RootStackList, RootStackNavigation } from '@organic/navigation/types';

import styles from './styles';

const ITEMS: IItem[] = [
  {
    id: 1,
    title: 'First item',
    description: 'First item description',
    image:
      'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    title: 'Second item',
    description: 'Second item description',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYSMQJToE4z85CJF5Zuey5tWS6FfapjEKMA&s',
  },
  {
    id: 3,
    title: 'Third item',
    description: 'Third item description',
    image:
      'https://fujiframe.com/assets/images/_3000x2000_fit_center-center_85_none/10085/xhs2-fuji-70-300-Amazilia-Hummingbird.webp',
  },
  {
    id: 4,
    title: 'Forth item',
    description: 'Forth item description',
    image:
      'https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg',
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
