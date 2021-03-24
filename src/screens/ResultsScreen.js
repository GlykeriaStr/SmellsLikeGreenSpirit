import { DrawerLayoutAndroidBase, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import emissionsCalculator from '../logic/EmissionsCalculation';
import { resultsMessage, context } from '../logic/ResultsMessage';
import * as SecureStore from 'expo-secure-store'
import { save, getValueFor } from '../storage/SecureStorage'
import nextId from 'react-id-generator'

const ResultsScreen = ({ route }) => {
  const { convertedDistance, emissions } = route.params;
  const result = emissionsCalculator(emissions, convertedDistance);
  const comparison = resultsMessage(result);
  const convertedDistanceValue = convertedDistance;
  const emissionsValue = result;

  class ResultsData {
    constructor(convertedDistanceValue, emissionsValue, dateForStorage) {
      this.convertedDistanceValue = convertedDistanceValue
      this.emissionsValue = emissionsValue
      this.dateForStorage = dateForStorage
    }
  }

  async function createValue() {
    let storageDate = getDate()
    let key = nextId()
    let values = new ResultsData(convertedDistanceValue, emissionsValue, storageDate)


    function getDate() {
      let today = new Date();
      let stringifiedDate = JSON.stringify(today);
      let date = stringifiedDate.substring(1, 11);
      return date
    }

    save(key, JSON.stringify(values));
      
      // Retireve Value 
      var x = await getValueFor(key);
      var y = JSON.parse(x);

      // Feedback 
      console.log(key)
      console.log(y.convertedDistanceValue);
      console.log(y.emissionsValue);
      console.log(y.dateForStorage);
  }

  createValue();

  return (
    <View style={styles.container}>
      <Text>Your journey will release {result} kilograms of CO2.</Text>
      <Text>{'\n'}</Text>
      <Text>{comparison}</Text>
      <Text>{}</Text>
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
