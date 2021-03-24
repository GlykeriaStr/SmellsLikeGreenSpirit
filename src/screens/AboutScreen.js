import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import * as Linking from 'expo-linking';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This App</Text>
      <Text>Blah blah blah</Text>
      <Text>
        Made by:
        {'\n'}Glykeria{'\n'}Jonathan{'\n'}Karsten{'\n'}Miranda{'\n'}Tom
      </Text>
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            'https://github.com/GlykeriaStr/SmellsLikeGreenSpirit',
          )
        }>
        GitHub Repository
      </Text>
      <Text onPress={() => navigation.navigate('Emissions Facts')}>
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
