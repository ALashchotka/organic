import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Tag({
  item,
  onPress,
  isSelected,
}: {
  item: string;
  onPress: () => void;
  isSelected: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={onPress}>
      <Text style={[styles.title, isSelected && styles.titleSelected]}>{item}</Text>
    </TouchableOpacity>
  );
}
