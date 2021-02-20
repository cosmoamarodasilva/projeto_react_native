import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Home, Produto} from './pages';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer initiaRouteName = 'Pagina Inicial' headerMode = 'screen'>
          <Stack.Navigator>
              <Stack.Screen name = 'Home' component = {Home} options = {{title: 'Pagina Inicial'}} />
              <Stack.Screen name = 'Login' component = {Login} options = {{title: 'Login'}} />
              <Stack.Screen name = 'produtos' component = {Produto} options = {{title: 'produtos'}} />
          </Stack.Navigator>
      </NavigationContainer>
    );

  }


