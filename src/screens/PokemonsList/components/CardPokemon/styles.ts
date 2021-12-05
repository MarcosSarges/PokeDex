import { Dimensions, Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import PokeBolPNG from '@assets/images/pokebola.png';

const HALF_WIDTH_SCREEN = Dimensions.get('screen').width;
const MARGIN_GRID = 40;

export const Container = styled.TouchableOpacity<{
  backgroundColor?: string;
}>`
  flex-direction: row;
  align-items: center;

  border-radius: 10px;

  overflow: hidden;
  padding: 10px;
  width: ${`${HALF_WIDTH_SCREEN - MARGIN_GRID}px`};

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.white};

  ${Platform.OS === 'ios'
    ? css`
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      `
    : css`
        elevation: 2;
      `};
`;

export const NamePokemon = styled.Text`
  ${({ theme }) => theme.fonts.headline2}
  color:${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const Number = styled.Text`
  ${({ theme }) => theme.fonts.subtitle2}
  color:${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const Types = styled.Text`
  ${({ theme }) => theme.fonts.subtitle1}
  color:${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const Sprit = styled.Image`
  height: 100px;
  width: 100px;
`;
export const PokebolImg = styled.Image.attrs({ source: PokeBolPNG })`
  height: 100px;
  width: 100px;
  position: absolute;
  right: -20px;
  bottom: -20px;
  transform: rotate(30deg);
  opacity: 0.5;
`;

export const Infos = styled.View``;
