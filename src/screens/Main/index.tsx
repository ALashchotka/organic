import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@realm/react';
import { FlashList } from '@shopify/flash-list';

import LogoImage from '@organic/assets/images/logo.png';
import { Item } from '@organic/components';
import { Product } from '@organic/models/Product';
import { RootStackList, RootStackNavigation } from '@organic/navigation/types';

import TagsList from './TagsList';

import styles from './styles';
import useData from './useData';
import useTags from './useTags';

export default function MainScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<RootStackNavigation>();

  const { tags, selectedTags, toggleTag } = useTags();
  const { products, isNextPageExists, fetchData } = useData(selectedTags);

  const openItem = (item: Product) => {
    navigation.navigate(RootStackList.DETAILS, { item });
  };

  const renderItem = ({ item, index }: { item: Product; index: number }) => (
    <Item index={index} item={item} onPress={() => openItem(item)} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const keyExtractor = (item: Product) => `item_${item.id}`;

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top || 16 }]}>
        <Image style={styles.logo} source={LogoImage} />

        <Text style={styles.title}>Fitness & healthy food</Text>
      </View>

      <TagsList onTagPress={toggleTag} tags={tags} selectedTags={selectedTags} />

      <FlashList
        contentContainerStyle={{
          ...styles.contentContainer,
          paddingBottom: insets.bottom || styles.contentContainer.padding,
        }}
        data={products}
        estimatedItemSize={200}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        onEndReached={fetchData}
        onEndReachedThreshold={1}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={isNextPageExists ? <ActivityIndicator color="#909090" /> : null}
      />
    </View>
  );
}
