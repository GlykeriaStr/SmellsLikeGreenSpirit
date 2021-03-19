import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import LicensePlateKey from '../../secrets/LicensePlateKey'

const HomeScreen = ({ navigation }) => {
  const [miles, setMiles] = useState('0');
  const [plate, setPlate] = useState('');
  const [ApiResults, setApiResults] = useState([]);

  const searchApi = async () => {
    console.log("at start of API function");
    console.log(`plate is ${plate}`);
    const headers = { 'x-api-key': `${LicensePlateKey}`, };
    const body = { "registrationNumber": plate };
    try {
      const response = await axios.post('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', body, { headers }
      );
      setApiResults(response.data);
      console.log("the API was called on home screen");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Enter mileage:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 50"
        onChangeText={(val) => setMiles(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="e.g. NT08 GBF"
        onChangeText={(license) => setPlate(license)}
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() => {
          searchApi();
          console.log("inside button press");
          navigation.navigate('Results', { miles })}}
      />
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
