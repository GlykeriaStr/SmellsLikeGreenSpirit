import React from 'react';
import { StyleSheet, Text, TextInput, Switch, View, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [miles, setMiles] = useState('0');

  return (
    <View>
      <Text>Enter mileage:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 50"
        onChangeText={(val) => setMiles(val)}
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() => navigation.navigate('Results', { miles })}
      />
      <Text>{"\n"}</Text>
      <View>
        {KMToMilesSwitch()}
      </View>
    </View>
  );
<<<<<<< HEAD
=======
}

const KMToMilesSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
    console.log(switchValue);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>
          { switchValue ? "MILES" : "KM" }
        </Text>
        <Switch
          ios_backgroundColor="lightsteelblue"
          trackColor={{true: 'lightseagreen'}}
          style={{marginTop: 10}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
>>>>>>> 2b7eead... Toggle feature works but on IOS the MILES KM text is not showing
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
  },
<<<<<<< HEAD
});
=======
  innerText: {
    color: 'red',
  }
})
>>>>>>> 2b7eead... Toggle feature works but on IOS the MILES KM text is not showing

export default HomeScreen;
