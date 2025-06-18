import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import { Product } from '@organic/models/Product';

import styles from './styles';

interface Props {
  item: Product;
  onPress: () => void;
  style?: TouchableOpacityProps['style'];
}

export function Item({ item, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} onPress={onPress}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
      />

      <View style={styles.content}>
        <LinearGradient colors={['#00000000', '#000000FF']} style={styles.contentGradient} />

        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
