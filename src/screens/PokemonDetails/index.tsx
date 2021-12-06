import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/core';

import { MainStackParamList } from '@routers/MainRouters';
import parserDecimetersToMeters from '@helpers/parserDecimetresToMeters';
import parserHectogramToKg from '@helpers/parserHectogramToKg';
import getSpecie from '@services/getSpecie';

import * as Styled from './styles';

type Props = StackScreenProps<MainStackParamList, 'PokemonDetails'>;

const PokemonDetails: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<Props['route']>();
  const [space, setSpace] = useState('');
  const { pokemon, pokeColor } = params;

  const uri =
    pokemon?.sprites?.other['official-artwork'].front_default ||
    pokemon?.sprites?.front_default;

  const types = pokemon?.types?.map(type => type.type.name)?.join(', ') || '';
  const height = parserDecimetersToMeters(pokemon.height);
  const weight = parserHectogramToKg(pokemon.weight);

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
          Alert.alert(
            'Ops!',
            'Não foi possivel capturar alguns informações do seu Pokédex',
          );
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
          <Styled.Info>{types}</Styled.Info>
        </Styled.SectionBox>
        <Styled.SectionBox>
          <Styled.Section>Medidas</Styled.Section>
          <Styled.Info>Peso: {weight} kg</Styled.Info>
          <Styled.Info>Altura: {height} m</Styled.Info>
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

export default PokemonDetails;
