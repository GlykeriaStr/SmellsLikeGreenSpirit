import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getValueFor } from '../logic/SecureStorage';
import strftime from 'strftime';
import { LinearGradient } from 'expo-linear-gradient';

const HistoryScreen = ({ navigation }) => {
  let [history, setHistory] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const getHistory = async () => {
      const journeyHistoryString = await getValueFor();
      if (!cancelled) {
        if (journeyHistoryString) {
          let journeyHistoryArray = JSON.parse(journeyHistoryString);
          setHistory(journeyHistoryArray);
        } else {
          setHistory(false);
        }
      }
    };
    getHistory().catch((error) => console.error(`There's an error: ${error}`));
    return () => {
      cancelled = true;
    };
  }, []);

  function totalEmissions(journeys) {
    let result = 0;
    for (let i = 0; i < journeys.length; i++) {
      result += journeys[i].emissionsValue;
    }
    return result;
  }

  function processForDisplay(journeys) {
    for (let i = 0; i < journeys.length; i++) {
      if (journeys[i].isMiles === true) {
        journeys[i].distanceKm *= 0.62137099;
      }
      journeys[i].date = strftime('%d %B, %Y', new Date(journeys[i].date));
    }
    return journeys;
  }

  processForDisplay(history);
  const totalEmissionsResult = parseFloat(totalEmissions(history).toFixed(2));
  const resultInTonnes = totalEmissionsResult / 1000;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['white', '#dbdbdf']} style={styles.background} />
      <View style={styles.titleView}>
        <Text style={styles.heading}>Your Journeys</Text>
      </View>
      {!!history.length && (
        <>
          <Text style={styles.standardText}>
            You have released {totalEmissionsResult} kilograms of CO
            <Text style={styles.standardTextSubscript}>2</Text> over
            {' ' + history.length} journeys.
          </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Offsets', { resultInTonnes })}>
            Click to offset this carbon!
          </Text>
          <Text style={styles.historyTitle}>Full List of Journeys</Text>
          <FlatList
            data={history.reverse()}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Text style={styles.listText}>
                {item.distance} {item.units} on {item.date} releasing{' '}
                {item.emissionsValue} kg of CO
                <Text style={styles.listTextSubscript}>2</Text>
                {'\n'}
              </Text>
            )}
          />
        </>
      )}
      {!history.length && (
        <>
          <Text>You haven't entered any journeys yet.</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 10,
    backgroundColor: '#f4f4f8',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    color: '#4F8B3A',
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 30,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  historyTitle: {
    color: '#311844',
    fontSize: 20,
    fontFamily: 'Futura',
    paddingBottom: 30,
    textDecorationLine: 'underline',
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
  standardText: {
    color: '#311844',
    fontSize: 18,
    fontFamily: 'Futura',
    paddingBottom: 30,
    textAlign: 'center',
  },
  standardTextSubscript: {
    color: '#311844',
    fontSize: 10,
    fontFamily: 'Futura',
    paddingBottom: 30,
    textAlign: 'center',
  },
  listText: {
    color: '#311844',
    fontSize: 14,
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  listTextSubscript: {
    color: '#311844',
    fontSize: 8,
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  standardTextAligned: {
    color: '#311844',
    fontSize: 18,
    fontFamily: 'Futura',
    paddingBottom: 25,
    textAlign: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  link: {
    color: '#4F8B3A',
    fontSize: 25,
    fontFamily: 'Futura',
    paddingBottom: 50,
  },
});

export default HistoryScreen;
