import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#909090',
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },

  content: {
    padding: 16,
    marginTop: 'auto',
  },
  contentGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
