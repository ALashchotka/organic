import React, { useMemo } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { IItem } from '@organic/api/types';
import { Item } from '@organic/components';
import { RootStackList, RootStackNavigation, RootStackRoute } from '@organic/navigation/types';

import CircularProgressItem from './CircularProgressItem';
import LinearProgressItem from './LinearProgressItem';

import styles, { BUTTON_HEIGHT } from './styles';

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

export default function DetailsScreen() {
  const navigation = useNavigation<RootStackNavigation>();
  const route = useRoute<RootStackRoute<RootStackList.DETAILS>>();

  const insets = useSafeAreaInsets();

  const item = useMemo(() => route.params.item, [route]);

  const openItem = (item: IItem) => {
    navigation.push(RootStackList.DETAILS, { item });
  };

  const renderItem = ({ item }: { item: IItem }) => (
    <Item style={styles.recommendedItem} item={item} onPress={() => openItem(item)} />
  );

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: BUTTON_HEIGHT + (insets.bottom || 16) }}>
        <View style={styles.content}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
          />

          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Statistics:</Text>

          <View style={styles.statisticsContainer}>
            <CircularProgressItem index={0} />
            <CircularProgressItem index={1} />
            <CircularProgressItem index={2} />
            <CircularProgressItem index={3} />

            <LinearProgressItem index={0} />
            <LinearProgressItem index={1} />
            <LinearProgressItem index={2} />
            <LinearProgressItem index={3} />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recommended items:</Text>

          <FlatList
            contentContainerStyle={styles.recommendedContentContainer}
            data={ITEMS}
            renderItem={renderItem}
            horizontal
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, { bottom: insets.bottom || 16 }]}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </>
  );
}
