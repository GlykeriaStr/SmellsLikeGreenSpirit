import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import LicensePlateKey from '../../secrets/LicencePlateKey';
import KMToMilesSwitch from '../switches/ToggleSwitch';

const HomeScreen = ({ navigation }) => {
  const [distance, setDistance] = useState('0');
  const [plate, setPlate] = useState('');
<<<<<<< HEAD
=======
  const [ApiResults, setApiResults] = useState([]);
  const [value, setValue] = useState(false);
>>>>>>> 3a76319... Obtained value from toggle (should be renamed)

  const handleSubmit = async () => {
    const headers = { 'x-api-key': `${LicensePlateKey}`, };
    const body = { "registrationNumber": plate };
    try {
      const response = await axios.post('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', body, { headers }
      );
      const emissions = await response.data.co2Emissions
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
<<<<<<< HEAD
        onPress={() => { handleSubmit() }} />
=======
        onPress={() => {
          searchApi();
          console.log("inside button press");
          navigation.navigate('Results', { distance })}}
      />
      <Text>{'\n'}</Text>
<<<<<<< HEAD
      <View>{KMToMilesSwitch()}</View>
>>>>>>> 46bd6f3... Toggle feature implemented in HomeScreen
=======
      <View>{KMToMilesSwitch(value, setValue)}</View>
      <Text>{console.log(value)}</Text>
>>>>>>> 3a76319... Obtained value from toggle (should be renamed)
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
