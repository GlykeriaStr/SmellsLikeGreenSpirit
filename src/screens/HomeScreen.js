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
      Alert.alert('Warning', 'This is not a valid licence plate number');
    }
  };

  return (
    <View style={styles.body}>
      <View>
        <Text
          style={styles.aboutButtonText}
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}>
          About
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            color: '#311844',
            padding: 20,
            fontFamily: 'Futura',
            fontSize: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          How much CO2{'\n'}will your journey{'\n'}release?
          <Text>{'\n'}</Text>
        </Text>
      </View>

      <View
        style={{
          // flex: 1,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'red',
          // justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'purple',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              borderWidth: 1,
              borderColor: 'green',
              color: '#311844',
              fontSize: 20,
              fontFamily: 'Futura',
            }}>
            Licence Plate
          </Text>
        </View>
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>
          <TextInput
            style={{
              fontFamily: 'Futura',
              borderWidth: 1,
              borderColor: '#311844',
              padding: 8,
              margin: 10,
              width: 120,
            }}
            placeholder="e.g. NT08 GBF"
            onChangeText={(licence) => setPlate(licence)}
          />
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'flex-end',
            // alignSelf: 'flex-end',
          }}>
          {KMToMilesSwitch(value, setValue)}
        </View>
        <View style={{ flex: 1, borderWidth: 1, borderColor: '#666' }}>
          <TextInput
            style={{
              fontFamily: 'Futura',
              borderWidth: 1,
              borderColor: '#311844',
              padding: 8,
              margin: 10,
              width: 120,
            }}
            placeholder="e.g. 50"
            onChangeText={(val) => setDistance(val)}
          />
        </View>
      </View>
      <Text
        style={styles.buttonText}
        color="orange"
        title="Click Me"
        onPress={() => {
          if (distance > 0) {
            return handleSubmit();
          }
          Alert.alert('Warning', 'Distance must be a positive number');
        }}>
        CALCULATE
      </Text>
      <Text>{'\n'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 10,
    backgroundColor: '#f4f4f8',
    fontFamily: 'Bodoni Ornaments',
  },
  container: {
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#311844',
    textAlign: 'right',
    fontFamily: 'Futura',
    paddingRight: 10,
    paddingTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#4F8B3A',
    fontSize: 30,
    padding: 50,
    textAlign: 'center',
    fontFamily: 'Futura',
  },
  input: {
    fontFamily: 'Futura',
    borderWidth: 1,
    borderColor: '#311844',
    padding: 8,
    margin: 10,
    width: 100,
  },
  standardText: {
    color: '#311844',
    fontSize: 20,
    fontFamily: 'Futura',
  },
});

export default HomeScreen;
