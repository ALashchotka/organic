import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@realm/react';

import LogoImage from '@organic/assets/images/logo.png';
import { Item } from '@organic/components';
import { Product } from '@organic/models/Product';
import { RootStackList, RootStackNavigation } from '@organic/navigation/types';

import styles from './styles';
import useData from './useData';

export default function MainScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<RootStackNavigation>();

  useData();

  const products = useQuery(Product);

  const openItem = (item: Product) => {
    navigation.navigate(RootStackList.DETAILS, { item });
  };

  const renderItem = ({ item }: { item: Product }) => (
    <Item item={item} onPress={() => openItem(item)} />
  );

  const keyExtractor = (item: Product) => `item_${item._id}`;

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top || 16 }]}>
        <Image style={styles.logo} source={LogoImage} />

        <Text style={styles.title}>Fitness & healthy food</Text>
      </View>
      <FlatList
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom || 16 }]}
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={<ActivityIndicator color="#909090" />}
      />
    </View>
  );
}
