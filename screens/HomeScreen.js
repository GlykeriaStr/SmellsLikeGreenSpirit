import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigator-stack';

const HomeScreen = () => {
  return (
    <Text>Enter mileage:</Text>
    <TextInput
      style={styles.input}
      placeholder='e.g. 50'
      onChangeText={(val) => setMiles(val)}
    />
    <Button
      color="orange"
      title="Click Me"
      onPress={() => navigation.navigate('Results')}
    />
  );
}

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
  }

export default HomeScreen;
