import 'styled-components/native';
import theme from './theme';

type MyTheme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends MyTheme {}
}
