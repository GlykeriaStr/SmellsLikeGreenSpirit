import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

const KMToMilesSwitch = (switchValue, setSwitchValue) => {
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.toggleText}>{switchValue ? 'MILES' : 'KM'}</Text>
        <Switch
          ios_backgroundColor="lightsteelblue"
          trackColor={{ true: '#336699' }}
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#311844',
    fontFamily: 'Futura',
    textAlign: 'center',
    color: 'black',
    paddingBottom: 2
  },
});

export default KMToMilesSwitch;
