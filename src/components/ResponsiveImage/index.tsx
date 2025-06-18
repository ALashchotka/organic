import { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import styles from './styles';

export function ResponsiveImage(props: FastImageProps) {
  const [aspectRatio, setAspectRatio] = useState(1);

  return (
    <FastImage
      {...props}
      style={[styles.container, { aspectRatio }, props.style]}
      onLoad={({ nativeEvent }) => {
        const { width, height } = nativeEvent;
        setAspectRatio(width / height);
      }}
    />
  );
}
