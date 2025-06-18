import { Dimensions } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const PROGRESS_COLORS = ['#EB5545', '#68CE67', '#5E5CDE', '#F2A33C'];

export const APP_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F2F2F2',
  },
};
