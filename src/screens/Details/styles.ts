import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '@organic/constants';

export const BUTTON_HEIGHT = 50;
export const BUTTON_CONTAINER_HEIGHT = BUTTON_HEIGHT + 32; // 32 - padding vertical

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    padding: 16,
  },

  image: {
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 16,
  },
  description: {
    fontSize: 14,
    color: '#000000',
  },

  sectionContainer: {
    marginVertical: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginHorizontal: 16,
    marginBottom: 8,
  },

  statisticsContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  recommendedContentContainer: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  recommendedItem: {
    width: SCREEN_WIDTH * 0.9,
  },

  button: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#68CE67',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    height: BUTTON_HEIGHT,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
