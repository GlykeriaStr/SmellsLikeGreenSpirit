import React from 'react';
import { Switch, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const KMToMilesSwitch = (switchValue, setSwitchValue) => {
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <SafeAreaView>
      <Text style={styles.toggleText}>{switchValue ? 'MILES' : 'KM'}</Text>
      <View style={styles.container}>
        <Switch
          ios_backgroundColor="lightsteelblue"
          trackColor={{ true: 'lightseagreen' }}
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#311844',
    fontFamily: 'Futura',
    textAlign: 'center',
    color: 'black',
    padding: 5,
  },
  switch: {
    marginTop: 30,
  },
});

export default KMToMilesSwitch;
