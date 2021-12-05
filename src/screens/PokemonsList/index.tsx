import React, { useEffect, useState } from 'react';
import { Alert, ListRenderItem } from 'react-native';

import * as Styled from './styles';
import getPokemons, { IRefPokemon } from '@services/getPokemons';
import CardPokemon from './components/CardPokemon';
import { useNavigation } from '@react-navigation/core';

const List: React.FC = () => {
  const { navigate } = useNavigation();

  const [pokemons, setPokemons] = useState<IRefPokemon[]>([]);

  useEffect(() => {
    const bootstrap = () => {
      getPokemons()
        .then(result => {
          setPokemons(result.results);
        })
        .catch(() => {
          Alert.alert('Ops!', 'Não foi possivel listar seu Pokedex');
        });
    };
    bootstrap();
  }, []);

  const renderItem: ListRenderItem<IRefPokemon> = ({ item }) => {
    return (
      <CardPokemon
        onPressCard={pokemon => {
          navigate('PokemonDetails', { pokemon });
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
        data={pokemons}
        renderItem={renderItem}
      />
    </Styled.Container>
  );
};

export default List;
