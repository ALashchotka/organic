import React, { useMemo } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import ChevronIcon from '@organic/assets/svg/chevron.svg';
import { Item } from '@organic/components';
import { Product } from '@organic/models/Product';
import { RootStackList, RootStackNavigation, RootStackRoute } from '@organic/navigation/types';

import CircularProgressItem from './CircularProgressItem';
import LinearProgressItem from './LinearProgressItem';

import styles, { BUTTON_HEIGHT } from './styles';
import useRecommendedData from './useRecommendedData';

export default function DetailsScreen() {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<RootStackNavigation>();
  const route = useRoute<RootStackRoute<RootStackList.DETAILS>>();

  const recommendedItems = useRecommendedData();

  const item = useMemo(() => route.params.item, [route]);

  const onBack = () => {
    navigation.goBack();
  };

  const openItem = (item: Product) => {
    navigation.push(RootStackList.DETAILS, { item });
  };

  const renderItem = ({ item }: { item: Product }) => (
    <Item style={styles.recommendedItem} item={item} onPress={() => openItem(item)} />
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: insets.top || 16 }]}>
        <TouchableOpacity onPress={onBack} hitSlop={16}>
          <ChevronIcon width={24} height={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{item.title}</Text>
      </View>

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

          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>
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
            data={recommendedItems}
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
    </View>
  );
}
