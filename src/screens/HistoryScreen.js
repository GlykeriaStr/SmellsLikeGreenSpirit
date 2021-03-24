import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const HistoryScreen =() => {
  const journeys = [ { distance: 1, emissions: 5, date: "2021/03/24" }, { distance: 2, emissions: 6, date: "2021/03/24" } ]

return(
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
   style={styles.bigText}>Your Journeys</Text>
 <Text>
   Your total list of journeys to date is (x = number of journeys) and you have released y
   kilograms of CO2.
 </Text>
 <Text>{"\n"}</Text>
 <FlatList
   data={[
     { distance: 1, emissions: 5},
   ]}
  renderItem={({item}) => <Text>{item.distance}</Text>}
/>
   
</View>)
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