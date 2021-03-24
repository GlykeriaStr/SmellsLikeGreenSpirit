import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import emissionsCalculator from '../logic/EmissionsCalculation';
import { resultsMessage } from '../logic/ResultsMessage';
import { save, getValueFor, deleteKey } from '../logic/SecureStorage';
import * as SecureStore from 'expo-secure-store';

const ResultsScreen = ({ navigation, route }) => {
  const { convertedDistance, emissions } = route.params;
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
    return {
      distanceKm: convertedDistance,
      emissionsValue: emissions,
      date: storageDate,
    };
  }

  // save(createValue());
  // deleteKey('journeys');

  // async function historyWait() {
  //   console.log("we be in historyWait baby")
  //   var history = await getValueFor("journeys")
  //   console.log(history)
  //   return history
  // }

  // if (history) {
  //   var jsonHistory = JSON.parse(history)
  // }

  // return jsonHistory != null ? JSON.parse(history) : null

  // deleteKey("journeys")

  // async function createValue() {
  //   let storageDate = getDate();
  //   let key = nextId();
  //   let values = {
  //     distanceKm: convertedDistanceValue,
  //     emissionsValue: emissionsValue,
  //     date: storageDate,
  //   };

  // save(key, JSON.stringify(createValue()));
  // accessKeysArray();

  // deleteKey('journeys');
  // getValueFor('journeys');

  // // Retireve Value
  // var x = await getValueFor(key);
  // var y = JSON.parse(x);

  // Feedback
  // console.log(key)
  // console.log(y.convertedDistanceValue);
  // console.log(y.emissionsValue);
  // console.log(y.dateForStorage);
  // console.log(await getValueFor("5"));
  // }

  // async function callKey() {
  //   console.log(await getValueFor("journeys"))
  // }

  // callKey();
  // SecureStore.deleteItemAsync("3");
  // createValue();

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
