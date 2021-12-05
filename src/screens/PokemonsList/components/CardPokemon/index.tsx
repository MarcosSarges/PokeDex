import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { IRefPokemon } from '@services/getPokemons';
import getDetailsPokemon, { IPokemon } from '@services/getDetailsPokemon';
import ImageColors from 'react-native-image-colors';

import * as Styled from './styles';
import Color from 'color';

interface ICardPokemon extends IRefPokemon {
  onPressCard(IPokemon): void;
}

const CardPokemon: React.FC<ICardPokemon> = ({ name, onPressCard }) => {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  const getIdPokemon = (id: number) => {
    if (!id) {
      return '';
    }
    const idString = id.toString();
    const missToFive = 5 - idString.length;
    const zerosCompleteId = Array(missToFive).fill('0').join('');
    return `${zerosCompleteId}${idString}`;
  };

  useEffect(() => {
    const bootstrap = () => {
      getDetailsPokemon(name)
        .then(result => {
          setPokemon(result);
        })
        .catch(() => {
          Alert.alert('Ops!', 'Não foi possivel listar seu Pokedex');
        });
    };
    bootstrap();
  }, [name]);

  useEffect(() => {
    if (pokemon?.sprites?.front_default) {
      ImageColors.getColors(pokemon.sprites.front_default).then(resultColor => {
        if (Platform.OS === 'ios' && resultColor.platform === 'ios') {
          setBackgroundColor(Color(resultColor.background, 'hex').hex());
        }

        if (Platform.OS === 'android' && resultColor.platform === 'android') {
          setBackgroundColor(Color(resultColor.dominant, 'hex').hex());
        }
      });
    }
  }, [pokemon]);

  return (
    <Styled.Container onPress={onPressCard} backgroundColor={backgroundColor}>
      {pokemon && (
        <Styled.Sprit
          source={{
            cache: 'force-cache',
            uri:
              pokemon?.sprites?.other['official-artwork'].front_default ||
              pokemon?.sprites?.front_default,
          }}
        />
      )}
      <Styled.Infos>
        <Styled.NamePokemon>{name}</Styled.NamePokemon>
        <Styled.Types>
          {pokemon?.types?.map(type => type.type.name)?.join(', ') || ''}
        </Styled.Types>
        <Styled.Number>#{getIdPokemon(pokemon.id)}</Styled.Number>
      </Styled.Infos>
      <Styled.PokebolImg />
    </Styled.Container>
  );
};

export default CardPokemon;
