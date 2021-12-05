module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@services': './src/services',
          '@store': './src/store',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@configs': './src/configs',
          '@assets': './assets',
        },
      },
    ],
  ],
};
