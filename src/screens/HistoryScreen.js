import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { save, getValueFor, deleteKey } from '../logic/SecureStorage';

const HistoryScreen = ({ navigation }) => {
  let [history, setHistory] = useState([]);

  console.log('Here on HistoryScreen');

  // const journeyHistory = getValueFor();
  (async function () {
    console.log('here in IIFE');
    let journeyHistory = await getValueFor();
    setHistory(journeyHistory);
    // console.log(journeyHistory);
  })();
  // console.log('This is the journey history:');
  console.log(`history screen history: ${history}`);

  const journeys = [
    { key: 'key', distance: 1, emissions: 5, date: '2021/03/24' },
    { key: 'id2', distance: 2, emissions: 6, date: '2021/03/24' },
  ];

  function totalEmissions(journeys) {
    let result = 0;
    for (let i = 0; i < journeys.length; i++) {
      result += journeys[i].emissions;
    }
    return result;
  }
  let totalEmissionsResult = totalEmissions(journeys);

  return (
    <View>
      <Text
        style={styles.aboutButtonText}
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}>
        About
      </Text>
      <Text style={styles.bigText}>Your Journeys</Text>
      <Text>
        You have released {totalEmissionsResult} kilograms of CO2 over{' '}
        {journeys.length} journeys.
      </Text>
      <Text>{'\n'}</Text>
      <Text>{history[0].key}</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text>
            On {item.date}: travelled {item.distance} km, {item.emissions} kg
          </Text>
        )}
      />
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
  inputContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
  },
  inputParent: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'purple',
    justifyContent: 'flex-end',
  },
  licencePlateText: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'green',
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
    borderWidth: 1,
    borderColor: 'black',
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

export default HistoryScreen;
