import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import LicencePlateKey from '../../secrets/LicencePlateKey';
import KMToMilesSwitch from '../switches/ToggleSwitch';
import milesToKilometres from '../logic/MilesToKilometres';

const HomeScreen = ({ navigation }) => {
  const [distance, setDistance] = useState('0');
  const [plate, setPlate] = useState('');
  const [isMiles, setIsMiles] = useState(false);
  const kmDistance = milesToKilometres(isMiles, distance);

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
      await navigation.navigate('Results', {
        distance,
        kmDistance,
        emissions,
        isMiles,
      });
    } catch (error) {
      Alert.alert('Warning', 'This is not a valid licence plate number');
    }
  };

  return (
    <View style={styles.body}>
      <LinearGradient colors={['white', '#dbdbdf']} style={styles.background} />
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
      <View style={styles.container}>
        <Text style={styles.bigText}>How much CO2</Text>
        <Text style={styles.bigText}>will your journey</Text>
        <Text style={styles.bigText}>release?</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputParent}>
          <Text style={styles.licencePlateText}>Licence Plate</Text>
        </View>
        <View style={styles.inputParent}>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. NT08 GBF"
            onChangeText={(licence) => setPlate(licence)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.kmToMilesText}>
          {KMToMilesSwitch(isMiles, setIsMiles)}
        </View>
        <View style={styles.inputParent}>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. 50"
            keyboardType="numeric"
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
  },
  container: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 60,
  },
  bigText: {
    color: '#311844',
    padding: 3,
    paddingBottom: 10,
    fontFamily: 'Futura',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#369',
    textAlign: 'right',
    fontFamily: 'Futura',
    paddingRight: 10,
    paddingTop: 10,
    fontSize: 20,
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
    // borderWidth: 1,
    // borderColor: '#311844',
    padding: 8,
    margin: 10,
    width: 100,
  },
  standardText: {
    color: '#311844',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  inputContainer: {
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
  },
  inputParent: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'purple',
    justifyContent: 'flex-end',
  },
  licencePlateText: {
    alignSelf: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'green',
    color: '#311844',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  textInput: {
    fontFamily: 'Futura',
    borderWidth: 1,
    borderColor: '#311844',
    padding: 8,
    margin: 10,
    width: 120,
  },
  kmToMilesText: {
    flexDirection: 'row',
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
    justifyContent: 'flex-end',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

export default HomeScreen;
