import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonsList from '@screens/PokemonsList';
import ScreenOptionsConfig from '@configs/ScreenOptionsConfig';
import { createStackNavigator } from '@react-navigation/stack';
// import PokemonDetails from '../screens/PokemonDetails';

const { Screen, Navigator } = createStackNavigator();

const MainRouters: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator {...ScreenOptionsConfig('PokemonList')}>
        <Screen component={PokemonsList} name="PokemonList" />
        {/* <Screen component={PokemonDetails} name="PokemonDetails" /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default MainRouters;
