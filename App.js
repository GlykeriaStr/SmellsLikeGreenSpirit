import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';

export default function App() {
  const [miles, setMiles] = useState('0')
  return (
    <SafeAreaView style={styles.container}>
      <Text>Enter mileage:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. 50'
        onChangeText={(val) => setMiles(val)} 
        />
      <Button color="orange" title="Click Me" onPress={() => console.log(miles)}/>
    </SafeAreaView>
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
});
