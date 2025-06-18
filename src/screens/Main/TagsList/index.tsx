import React from 'react';
import { FlatList, View } from 'react-native';

import Tag from './Tag';

import styles from './styles';

export default function TagsList({
  onTagPress,
  tags,
  selectedTags,
}: {
  onTagPress: (tag: string) => void;
  tags: string[];
  selectedTags: string[];
}) {
  const renderItem = ({ item }: { item: string }) => (
    <Tag
      item={item}
      onPress={() => onTagPress(item)}
      isSelected={!!selectedTags.find((tag) => tag === item)}
    />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const keyExtractor = (item: string) => `tag_${item}`;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={tags}
      renderItem={renderItem}
      horizontal
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      showsHorizontalScrollIndicator={false}
    />
  );
}
