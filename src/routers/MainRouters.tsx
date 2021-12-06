import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import PokemonsList from '@screens/PokemonsList';
import ScreenOptionsConfig from '@configs/ScreenOptionsConfig';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetails from '@screens/PokemonDetails';
import { IPokemon } from '@services/getDetailsPokemon';

export interface MainStackParamList extends ParamListBase {
  PokemonList: undefined;
  PokemonDetails: { pokemon: IPokemon; pokeColor: string };
}

const { Screen, Navigator } = createStackNavigator<MainStackParamList>();
const MainRouters: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator {...ScreenOptionsConfig('PokemonList')}>
        <Screen component={PokemonsList} name="PokemonList" />
        <Screen component={PokemonDetails} name="PokemonDetails" />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainRouters;
