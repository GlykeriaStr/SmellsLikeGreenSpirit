import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import emissionsCalculator from '../logic/EmissionsCalculation';
import { resultsMessage } from '../logic/ResultsMessage';
import { save, deleteKey } from '../logic/SecureStorage';

const ResultsScreen = ({ navigation, route }) => {
  const { convertedDistance, emissions, isMiles } = route.params;
  const result = emissionsCalculator(emissions, convertedDistance);
  const resultInTonnes = result / 1000;
  const comparison = resultsMessage(result);

  function getDate() {
    let today = new Date();
    let stringifiedDate = JSON.stringify(today);
    // let date = stringifiedDate.substring(1, 11);
    return stringifiedDate;
  }

  function createValue() {
    let storageDate = getDate();
    let distanceUnits;
    if (isMiles) {
      distanceUnits = 'miles';
    } else {
      distanceUnits = 'km';
    }
    return {
      distanceKm: convertedDistance,
      emissionsValue: result,
      date: storageDate,
      units: distanceUnits,
    };
  }

  save(createValue());
  // deleteKey('journeys');

  return (
    <View style={styles.container}>
      <Text>Your journey will release {result} kilograms of CO2.</Text>
      <Text>{'\n'}</Text>
      <Text>{comparison}</Text>
      <Text>{'\n'}</Text>
      {result !== 0 ? (
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Offsets', { resultInTonnes })}>
          Offset this carbon!
        </Text>
      ) : null}
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
  link: {
    color: 'blue',
  },
});

export default ResultsScreen;
