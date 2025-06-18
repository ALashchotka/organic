import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '@organic/constants';

export const CIRCULAR_PROGRESS_WIDTH = SCREEN_WIDTH / 6;

export default StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});
