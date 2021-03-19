import React, { useState } from 'react';
import LicensePlate from '../api/LicensePlate';
import LicensePlateKey from '../../secrets/LicensePlateKey'
import axios from 'axios';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const ResultsScreen = ({ route, navigation }) => {
  const { miles } = route.params;

  return (
    <Text>
      Welcome to the Results screen these are the miles you put in: {miles}miles
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
