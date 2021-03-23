import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import emissionsCalculator from '../logic/EmissionsCalculation';
import { resultsMessage, context } from '../logic/ResultsMessage';
import * as SecureStore from 'expo-secure-store'
import { save, getValueFor } from '../storage/SecureStorage'

const ResultsScreen = ({ route }) => {
  const { convertedDistance, emissions } = route.params;
  const result = emissionsCalculator(emissions, convertedDistance);
  const comparison = resultsMessage(result);
  const storageKey = 1
  const convertedDistanceValue = convertedDistance;
  const emissionsValue = result;
  const combined = [convertedDistanceValue, emissionsValue]

  save("storageKey", JSON.stringify(combined));
  var date = getValueFor("storageKey");
  date.then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));
  // console.log(date);

  return (
    <View style={styles.container}>
      <Text>Your journey will release {result} kilograms of CO2.</Text>
      <Text>{'\n'}</Text>
      <Text>{comparison}</Text>
    </View>
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
