import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const AboutScreen = ({ navigation }) => {
  const gly = { link: 'https://github.com/GlykeriaStr', name: 'Glykeria' };
  const mir = { link: 'https://github.com/mscwilson', name: 'Miranda' };
  const tom = { link: 'https://github.com/twigz826', name: 'Tom' };
  const Karsten = { link: 'https://github.com/KarstenFinlay', name: 'Karsten' };
  const Jon = { link: 'https://github.com/bullhornfixie', name: 'Jonathan' };
  const Github = {
    link: 'https://github.com/GlykeriaStr/SmellsLikeGreenSpirit',
    name: 'GitHub Repository',
  };

  const githubs = (link) => {
    return (
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('GitHub', { url: link.link })}>
        {link.name}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This App</Text>
      <ScrollView>
        <Text style={styles.text}>
          Spring Onion is a mobile app on iOS and Android that allow users to be
          able to calculate the carbon footprint of car journeys. {'\n'}
          {'\n'}
          All you need to know is your licence plate and the distance travelled
          and the app returns the amount of CO
          <Text style={styles.textSubscript}>2</Text> consumed, as well as other
          regular activities that consume a similar amount of CO
          <Text style={styles.textSubscript}>2</Text> for comparison. If you'd
          like to donate to offset your carbon emissions, you can follow a link
          to our chosen environmental organisation where a one-off payment can
          be made. {'\n'}
          {'\n'}
          This project was built in the final two weeks at Makers Academy. We
          used React Native to create an E2E mobile app experience for the user.
          Our app is a one stop shop for environmentally conscious users that
          are looking to limit their contribution to global warming, no matter
          how small.{'\n'}
        </Text>
        <View style={styles.repos}>
          <Text style={styles.text}>
            Made by:
            {'\n'}
            {githubs(gly)}
            {'\n'}
            {githubs(Jon)}
            {'\n'}
            {githubs(Karsten)}
            {'\n'}
            {githubs(mir)}
            {'\n'}
            {githubs(tom)}
            {'\n'}
            {githubs(Github)}
            {'\n'}
          </Text>
          <Text
            style={styles.emissions}
            onPress={() => navigation.navigate('Emissions Facts')}>
            Emissions Facts
            {'\n'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    color: '#4F8B3A',
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
  },
  link: {
    color: '#369',
    fontSize: 15,
  },
  text: {
    fontFamily: 'Verdana',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 28,
    color: '#311844',
  },
  textSubscript: {
    fontFamily: 'Verdana',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 80,
    color: '#311844',
  },
  repos: {
    flex: 1,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  emissions: {
    color: '#369',
    fontSize: 20,
  },
});

export default AboutScreen;
