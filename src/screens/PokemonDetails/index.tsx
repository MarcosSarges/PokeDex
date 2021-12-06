import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { MainStackParamList } from '@routers/MainRouters';
import { StackScreenProps } from '@react-navigation/stack';
import parserHectogramToKg from '@helpers/parserHectogramToKg';

import * as Styled from './styles';
import parserDecimetersToMeters from '@helpers/parserDecimetresToMeters';
import { Alert } from 'react-native';
import getSpecie from '@services/getSpecie';

type Props = StackScreenProps<MainStackParamList, 'PokemonDetails'>;

const Details: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<Props['route']>();
  const [space, setSpace] = useState('');
  const { pokemon, pokeColor } = params;

  const uri =
    pokemon?.sprites?.other['official-artwork'].front_default ||
    pokemon?.sprites?.front_default;

  useEffect(() => {
    const bootstrap = () => {
      getSpecie(pokemon.name)
        .then(result => {
          setSpace(
            result.egg_groups
              .map(egg => egg.name.replace(/[^\D]/g, ''))
              .join(', '),
          );
        })
        .catch(() => {
          Alert.alert('Ops!', 'Não foi possivel listar seu Pokedex');
        });
    };
    bootstrap();
  }, [pokemon.name]);

  return (
    <Styled.Container>
      <Styled.Header backgroundColor={pokeColor}>
        <Styled.ButtonBack onPress={goBack}>
          <Styled.BackIcon />
        </Styled.ButtonBack>
        <Styled.NamePokemon>{pokemon.species.name}</Styled.NamePokemon>
        <Styled.Sprit
          source={{
            cache: 'force-cache',
            uri,
          }}
        />
      </Styled.Header>

      <Styled.Content>
        <Styled.SectionBox>
          <Styled.Section>Especie</Styled.Section>
          <Styled.Info>{space}</Styled.Info>
        </Styled.SectionBox>
        <Styled.SectionBox>
          <Styled.Section>Tipos</Styled.Section>
          <Styled.Info>
            {pokemon?.types?.map(type => type.type.name)?.join(', ') || ''}
          </Styled.Info>
        </Styled.SectionBox>
        <Styled.SectionBox>
          <Styled.Section>Medidas</Styled.Section>
          <Styled.Info>
            Peso: {parserHectogramToKg(pokemon.weight)} kg
          </Styled.Info>
          <Styled.Info>
            Altura: {parserDecimetersToMeters(pokemon.height)} m
          </Styled.Info>
        </Styled.SectionBox>
        <Styled.SectionBox>
          <Styled.Section>Estatísticas iniciais</Styled.Section>
          {pokemon.stats.map(stat => (
            <Styled.Info key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </Styled.Info>
          ))}
        </Styled.SectionBox>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Details;
