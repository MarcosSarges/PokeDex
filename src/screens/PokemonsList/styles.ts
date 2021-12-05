import { IRefPokemon } from '@services/getPokemons';
import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 20,
  },
})<FlatListProps<IRefPokemon>>`
  height: 100%;
`;

export const ItemSeparator = styled.View`
  height: 20px;
`;

export const Header = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.primary};
`;
