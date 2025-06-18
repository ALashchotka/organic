import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '@organic/constants';

export const CIRCULAR_PROGRESS_WIDTH = SCREEN_WIDTH / 6;

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 10,
    marginVertical: 8,
  },
});
