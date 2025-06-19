import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { SlideInDown } from 'react-native-reanimated';

import { Product } from '@organic/models/Product';

import styles from './styles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
  item: Product;
  index?: number;
  onPress: () => void;
  style?: TouchableOpacityProps['style'];
}

export function Item({ item, index, onPress, style }: Props) {
  return (
    <AnimatedTouchableOpacity
      entering={typeof index === 'number' ? SlideInDown.delay(index * 150) : undefined}
      style={[styles.container, style]}
      activeOpacity={0.8}
      onPress={onPress}>
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
    </AnimatedTouchableOpacity>
  );
}
