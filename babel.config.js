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
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        alias: {
          '@helpers': './src/helpers',
          '@routers': './src/routers',
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
