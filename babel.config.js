module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@organic': './src',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
