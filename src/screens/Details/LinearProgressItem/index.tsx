import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import { PROGRESS_COLORS } from '@organic/constants';

import styles from './styles';

export default function LinearProgressItem({ index }: { index: number }) {
  const progress = useRef(new Animated.Value(0)).current;

  const value = Math.round(Math.random() * 100);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', `${value}%`],
  });

  return (
    <View style={[styles.container, { backgroundColor: `${PROGRESS_COLORS[index % 4]}25` }]}>
      <Animated.View
        style={{
          width: progressWidth,
          backgroundColor: PROGRESS_COLORS[index % 4],
          height: '100%',
        }}
      />
    </View>
  );
}
