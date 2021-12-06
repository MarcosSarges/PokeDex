/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';
import 'jest-styled-components';

jest.mock('react-native-gesture-handler', () =>
  jest.requireActual('../node_modules/react-native-gesture-handler/jestSetup'),
);

export const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
    goBack: jest.fn(),
  }),
  useRoute: () => ({}),
}));

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  class MockSafeAreaProvider extends React.Component {
    render() {
      const { children } = this.props;
      return React.createElement('SafeAreaProvider', this.props, children);
    }
  }
  return {
    useSafeAreaInsets: () => ({ top: 1, right: 2, bottom: 3, left: 4 }),
    SafeAreaProvider: MockSafeAreaProvider,
  };
});

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform',
  );
  Platform.OS = 'android';
  return Platform;
});

jest.mock('styled-components/native', () => {
  const React = require('react');
  class MockStyledComponentsProvider extends React.Component {
    render() {
      const { children } = this.props;
      return React.createElement('ThemeProvider', this.props, children);
    }
  }
  return {
    ThemeProvider: MockStyledComponentsProvider,
  };
});
