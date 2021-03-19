import React, {useState} from 'react';
import { Switch, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const KMToMilesSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <SafeAreaView>
      <Text style={styles.toggleText}>
        { switchValue ? "MILES" : "KM" }
      </Text>
      <View style={styles.container}>
        <Switch
          ios_backgroundColor="lightsteelblue"
          trackColor={{true: 'lightseagreen'}}
          style={{marginTop: 30}}
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
    textAlign: 'center',
    color: 'black',
    padding: 5,
  }
});

export default KMToMilesSwitch;
