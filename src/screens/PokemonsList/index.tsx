/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

import { IRefPokemon } from '@services/getPokemons';
import { MainStackParamList } from '@routers/MainRouters';
import { useAppDispatch, useAppSelector } from '@store/store';
import { fetchListPokemons, nextPage } from '@store/features/listPokemons';

import CardPokemon from './components/CardPokemon';
import * as Styled from './styles';

interface ScrollEvt {
  distanceFromEnd: number;
}

const PokemonsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons, offset } = useAppSelector(store => store.listPokemons);

  const { navigate } =
    useNavigation<StackNavigationProp<MainStackParamList, 'PokemonDetails'>>();

  const loadingMorePokemons = ({ distanceFromEnd }: ScrollEvt) => {
    if (distanceFromEnd <= 100) {
      dispatch(nextPage());
    }
  };

  useEffect(() => {
    const loadPokemons = () => dispatch(fetchListPokemons());
    loadPokemons();
  }, [offset]);

  const renderItem: ListRenderItem<IRefPokemon> = ({ item }) => {
    return (
      <CardPokemon
        onPressCard={(pokemon, pokeColor) => {
          navigate('PokemonDetails', { pokemon, pokeColor });
        }}
        name={item.name}
        url={item.url}
      />
    );
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Pokédex</Styled.Title>
      </Styled.Header>
      <Styled.List
        ItemSeparatorComponent={() => <Styled.ItemSeparator />}
        keyExtractor={item => item.name}
        data={pokemons}
        // @ts-ignore
        renderItem={renderItem}
        onEndReached={loadingMorePokemons}
        scrollEventThrottle={16}
      />
    </Styled.Container>
  );
};

export default PokemonsList;
