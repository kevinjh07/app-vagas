import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './screens/TelaInicialScreen';
import CadastroCurriculoScreen from './screens/CadastroCurriculoScreen';
import ListagemVagaScreen from './screens/ListagemVagaScreen';
import DetalheVagaScreen from './screens/DetalheVagaScreen';

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" headerMode="none">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen
          name="CadastroCurriculo"
          component={CadastroCurriculoScreen}
        />
        <Stack.Screen name="ListagemVaga" component={ListagemVagaScreen} />
        <Stack.Screen name="DetalheVaga" component={DetalheVagaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
