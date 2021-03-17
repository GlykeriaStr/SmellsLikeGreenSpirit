import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

const ResultsScreen = () => {
  return (
    <Text>Welcome to the Results screen</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
  }
})

export default ResultsScreen;
