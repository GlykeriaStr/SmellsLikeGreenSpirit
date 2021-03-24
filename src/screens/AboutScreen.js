import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This App</Text>
      <Text>Blah blah blah</Text>
      <Text>
        Made by:
        {'\n'}Glykeria{'\n'}Jonathan{'\n'}Karsten{'\n'}Miranda{'\n'}Tom
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('GitHub')}>
        GitHub Repository
      </Text>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Emissions Facts')}>
        Emissions Facts
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
  link: {
    color: 'blue',
  },
});

export default AboutScreen;
