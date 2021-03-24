import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import * as Linking from 'expo-linking';

const EmissionsFactsScreen = ({ navigation }) => {
  const guardian = {
    link: 'https://www.theguardian.com/environment/green-living-blog/2010/nov/25/carbon-footprint-load-laundry',
    title: "Guardian: What's the carbon footprint of...a load of laundry?"
  };
  const bbc = {
    link: 'https://www.bbc.com/future/article/20200326-the-hidden-impact-of-your-daily-water-use',
    title: "BBC: The hidden impact of your daily water use"
  };

  const urlLink=(link) => {
    return (
      <Text
      style={styles.link}
      onPress={() => navigation.navigate('Carbon Data', { url: link.link })}>
      {link.title}
    </Text>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
      <Text style={styles.heading}>About CO</Text>
      <Text style={styles.titleSubscript}>2</Text>
      <Text style={styles.heading}> Emissions</Text>
      </View>
      <ScrollView>
        <Text style={ styles.factsText }>
          Taking only five minute showers for the next 30 days would save 108 lbs
          of CO2, which is more than what a tree seedlings grown for 10 years can
          sequester (1.27 times more to be precise)! {'\n'}
          {'\n'}
          Domestic laundry has a has a surprisingly large carbon footprint. The
          power needed to run household appliances, and especially the energy
          required to heat up water, has a carbon footprint that’s largely
          invisible to householders. Yet all of our water use adds up. It accounts
          for 6% of all carbon dioxide (CO2) emissions in the UK. {'\n'} {'\n'}The
          bulk of the emissions from household water use, comes from the energy
          needed to heat water in the home, about 46% if a gas boiler is used.
          About 17% of the emissions come from using dishwashers, and 11% from
          washing machines. {'\n'}
          {'\n'} The carbon footprint of a load of laundry: {'\n'} 0.6 kg CO2e
          washed at 30°C, dried on the line {'\n'} 0.7 kg CO2e washed at 40°C,
          dried on the line {'\n'} 2.4 kg CO2e washed at 40°C, tumble-dried in a
          vented dryer {'\n'} 3.3 kg CO2e washed at 60°C, dried in a combined
          washer-dryer {'\n'} {'\n'}The kitchen sink is actually the source of the
          most water-related carbon emissions in the home. Keeping the kitchen tap
          running leads to approximately 157kg of CO2 being released per year
          while the dishwasher produces 142kg of CO2, the washing machine
          generates 118kg and the bath creates 103kg. (In a newer home, however,
          the shower is the water-use device with the highest emissions.) {'\n'}
          {'\n'}
          {urlLink(guardian)}
          {'\n'}
          {urlLink(bbc)}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    // justifyContent: 'center',
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
  },
  factsText: {
    fontFamily: 'Verdana',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 28,
    color: '#311844',
  },
  titleSubscript: {
    color: '#4F8B3A',
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 60,
  },
  titleView: {
    flexDirection: 'row', 
    alignItems: 'flex-start'
  }
});

export default EmissionsFactsScreen;
