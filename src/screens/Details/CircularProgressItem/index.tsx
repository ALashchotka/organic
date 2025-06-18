import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { PROGRESS_COLORS } from '@organic/constants';

import styles, { CIRCULAR_PROGRESS_WIDTH } from './styles';

export default function CircularProgressItem({ index }: { index: number }) {
  const value = Math.round(Math.random() * 100);

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={CIRCULAR_PROGRESS_WIDTH}
        width={CIRCULAR_PROGRESS_WIDTH / 12}
        fill={value}
        rotation={0}
        tintColor={PROGRESS_COLORS[index % 4]}
        duration={2000}
        backgroundColor={`${PROGRESS_COLORS[index % 4]}25`}
        lineCap="round">
        {() => <Text style={styles.title}>{value}%</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}
