import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import LicencePlateKey from '../../secrets/LicencePlateKey';
import KMToMilesSwitch from '../switches/ToggleSwitch';
import milesToKilometres from '../logic/MilesToKilometres';

const HomeScreen = ({ navigation }) => {
  const [distance, setDistance] = useState('0');
  const [plate, setPlate] = useState('');
  const [value, setValue] = useState(false);
  const KMDistance = milesToKilometres(value, distance);

  const handleSubmit = async () => {
    const headers = { 'x-api-key': `${LicencePlateKey}` };
    const body = { registrationNumber: plate };
    try {
      const response = await axios.post(
        'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
        body,
        { headers },
      );
      const emissions = await response.data.co2Emissions;
      const convertedDistance = KMDistance;
      await navigation.navigate('Results', { convertedDistance, emissions });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="e.g. 50"
        onChangeText={(val) => setDistance(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="e.g. NT08 GBF"
        onChangeText={(licence) => setPlate(licence)}
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() => {
          if (distance > 0) {
            handleSubmit();
          }else{
            Alert.alert('Alert', 'Must be a positive number');
          }
        }}
      />
      <Text>{'\n'}</Text>
      <View>{KMToMilesSwitch(value, setValue)}</View>
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

export default HomeScreen;
