import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import emissionsCalculator from '../logic/EmissionsCalculation';
import { resultsMessage } from '../logic/ResultsMessage';
import { LinearGradient } from 'expo-linear-gradient';
import { save, deleteKey } from '../logic/SecureStorage';

const ResultsScreen = ({ navigation, route }) => {
  const { distance, kmDistance, emissions, isMiles } = route.params;
  const result = emissionsCalculator(emissions, kmDistance);
  const resultInTonnes = result / 1000;
  const comparison = resultsMessage(result);

  function createValue() {
    let storageDate = new Date().toJSON();
    let distanceUnits, distanceToSave;

    if (isMiles) {
      distanceToSave = distance;
      distanceToSave === '1'
        ? (distanceUnits = 'mile')
        : (distanceUnits = 'miles');
    } else {
      distanceUnits = 'km';
      distanceToSave = kmDistance;
    }

    return {
      distance: distanceToSave,
      emissionsValue: result,
      date: storageDate,
      units: distanceUnits,
    };
  }

  save(createValue());
  // deleteKey('journeys');

  return (
    <View style={styles.container}>
    <LinearGradient colors={['white', '#dbdbdf']} style={styles.background} />
      <Text style={styles.standardText}>
        Your journey will release {result} kilograms of CO2.
      </Text>
      <Text style={styles.standardText}>{comparison}</Text>
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
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
    fontSize: 20,
  },
  standardText: {
    fontSize: 20,
    padding: 20,
    color: '#311844',
    fontFamily: 'Futura',
  },
  link: {
    color: '#4F8B3A',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

export default ResultsScreen;
