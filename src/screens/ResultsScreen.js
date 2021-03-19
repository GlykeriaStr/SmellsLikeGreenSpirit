import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsScreen = ({ route }) => {
  console.log('inside result screen');
  const { distance } = route.params


  return (
    <Text>
      Welcome to the Results screen these are the miles you put in: { distance }miles
    </Text>
  );
};

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
  },
});

export default ResultsScreen;
