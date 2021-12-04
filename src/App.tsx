import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import theme from '@styles/theme';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={[theme.fonts.headline1]}>start</Text>
      <Text style={[theme.fonts.bodyText1]}>start</Text>
    </SafeAreaView>
  );
};

export default App;
