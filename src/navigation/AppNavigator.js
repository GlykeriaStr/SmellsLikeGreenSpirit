import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import EmissionsFactsScreen from '../screens/EmissionsFactsScreen';
import ResourceWebScreen from '../screens/ResourceWebScreen';
import GithubScreen from '../screens/GithubScreen';
import WebScreen from '../screens/WebScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Emissions Facts" component={EmissionsFactsScreen} />
        <Stack.Screen name="Carbon Data" component={ResourceWebScreen} />
        <Stack.Screen name="GitHub" component={GithubScreen} />
        <Stack.Screen name="Offsets" component={WebScreen} />
        <Stack.Screen name="Journey History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
