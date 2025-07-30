import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AddProjectScreen from '../screens/AddProjectScreen';
import ProjectDetailScreen from '../screens/ProjectDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Projetos" component={HomeScreen} />
        <Stack.Screen name="Novo Projeto" component={AddProjectScreen} />
        <Stack.Screen name="Detalhes" component={ProjectDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
