/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

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
