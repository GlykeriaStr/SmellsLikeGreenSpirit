import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [miles, setMiles] = useState('0');
  const [plate, setPlate] = useState('');

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
        onPress={() => navigation.navigate('Results', { miles })}
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
