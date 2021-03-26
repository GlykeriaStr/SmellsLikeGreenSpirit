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
      <Text style={styles.result}>
        {result} kilograms of CO<Text style={styles.two}>2</Text>
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
      <View>
        <Text
          style={styles.aboutButtonText}
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}>
          About
        </Text>
        <Text
          style={styles.aboutButtonText}
          onPress={() => {
            navigation.navigate('Journey History');
          }}>
          History
        </Text>
      </View>
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
    fontSize: 28,
    padding: 20,
    color: '#311844',
    fontFamily: 'Futura',
    // borderWidth: 1,
    // borderColor: '#311844',
    width: 400,
    textAlign: 'center',
    marginTop: 60,
  },
  link: {
    color: '#4F8B3A',
    fontSize: 25,
    fontFamily: 'Futura',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  result: {
    marginTop: -100,
    fontFamily: 'Futura',
    // borderWidth: 1,
    // borderColor: '#311844',
    padding: 0,
    margin: 10,
    width: 200,
    fontSize: 45,
    color: '#369',
    textAlign: 'center',
  },
  two: {
    fontSize: 25,
    color: '#369',
    fontFamily: 'Futura',
  },
  aboutButtonText: {
    borderColor: '#311844',
    color: '#369',
    textAlign: 'center',
    fontFamily: 'Futura',
    paddingTop: 30,
    fontSize: 20,
  },
});

export default ResultsScreen;
