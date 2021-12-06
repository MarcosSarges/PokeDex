import React from 'react';
import 'react-native';
import App from '../src/App';
// import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  render(<App />);
});
