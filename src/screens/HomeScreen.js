import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import LicensePlateKey from '../../secrets/LicensePlateKey'

const HomeScreen = ({ navigation }) => {
  const [distance, setDistance] = useState('0');
  const [plate, setPlate] = useState('');

  const handleSubmit = async () => {
    console.log("at start of API function handleSubmit");
    console.log(`plate is ${plate}`);
    const headers = { 'x-api-key': `${LicensePlateKey}`, };
    const body = { "registrationNumber": plate };
    try {
      const response = await axios.post('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', body, { headers }
      );
      console.log("the API was called on home screen");
      const emissions = await response.data.co2Emissions
      console.log(`How about this? ${emissions}`);
      await navigation.navigate('Results', { distance, emissions });
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
        onChangeText={(license) => setPlate(license)}
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() => { handleSubmit() }} />
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
