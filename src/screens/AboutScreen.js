import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Linking from 'expo-linking';

const AboutScreen = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This App</Text>
      <Text>Blah blah blah</Text>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
      Google
      </Text>
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
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default AboutScreen;
