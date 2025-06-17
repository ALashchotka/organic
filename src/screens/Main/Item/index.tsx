import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { IItem } from '@organic/api/types';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  item: IItem;
  onPress: () => void;
}

export default function Item({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <Image style={styles.image} source={{ uri: item.image }} />

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
