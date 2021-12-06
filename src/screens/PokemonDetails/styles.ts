import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import BackIos from '@assets/images/outline_arrow_back_ios_white.png';
import BackAndroid from '@assets/images/outline_arrow_back_white.png';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<{ backgroundColor: string }>`
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  height: 250px;
  margin-bottom: 20px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px 20px;
  padding-top: ${Platform.OS === 'ios' ? '40px' : '20px'};

  ${Platform.OS === 'ios'
    ? css`
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      `
    : css`
        elevation: 2;
      `};
`;

export const Sprit = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
  ${Platform.OS === 'ios' &&
  css`
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  `};
`;

export const NamePokemon = styled.Text`
  ${({ theme }) => theme.fonts.headline1}
  color:${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const BackIcon = styled.Image.attrs({
  source: Platform.OS === 'ios' ? BackIos : BackAndroid,
})`
  height: 25px;
  width: 25px;
`;

export const Content = styled.ScrollView`
  padding: 20px;
`;

export const Section = styled.Text`
  ${({ theme }) => theme.fonts.subtitle2}
  color:${({ theme }) => theme.colors.black};
  text-transform: capitalize;
`;
export const SectionBox = styled.View`
  margin-bottom: 10px;
`;

export const Info = styled.Text.attrs({
  selectable: true,
})`
  ${({ theme }) => theme.fonts.bodyText1}
  color:${({ theme }) => theme.colors.black};
  text-transform: capitalize;
`;
