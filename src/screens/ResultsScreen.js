import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import emissionsCalculator from '../logic/EmissionsCalculation';

const ResultsScreen = ({ route }) => {
  const { convertedDistance, emissions } = route.params;
  const result = emissionsCalculator(emissions, convertedDistance);

  return (
    <View style={styles.container}>
      <Text>Your journey will release {result} kilograms of CO2.</Text>
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
