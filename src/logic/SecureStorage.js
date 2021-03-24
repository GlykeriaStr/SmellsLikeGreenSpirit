import * as SecureStore from 'expo-secure-store';

var keysArray = [];

// key value

// "journeys" : [ {km: 10, emissions: 4, date: 2021-03-24}, {km: 14, emissions: 10, date: 2021-03-24}]

// if nothing in "journeys":
// set [ {km: 10, emissions: 4, date: 2021-03-24}]

// if there is something in "journeys":
// save variable = result ie [ {km: 10, emissions: 4, date: 2021-03-24}]
// push new hash to make the new value to save
// [ {km: 10, emissions: 4, date: 2021-03-24}, {km: 14, emissions: 10, date: 2021-03-24}]

// set "journeys" ie overwrite the old one

export async function save(journeyHash) {
  let existingData = await SecureStore.getItemAsync('journeys');

  if (existingData) {
    let entryId = `id${existingData.length}`;
    console.log("🔐 Here's your existing values 🔐 \n" + existingData);
    // console.log(entryId);
    journeyHash.key = entryId;
    let updatedHistory = [JSON.parse(existingData), journeyHash];
    console.log(updatedHistory);
    // let newResult = result + string;
    await SecureStore.setItemAsync('journeys', JSON.stringify(updatedHistory));
    // return newResult;
  } else {
    journeyHash.key = 'id1';
    // console.log('no result');
    await SecureStore.setItemAsync('journeys', JSON.stringify(journeyHash));
    // console.log(string);
    // return string;
  }
}

export async function deleteKey(key) {
  console.log('here in delete key');
  await SecureStore.deleteItemAsync(key);
}

export async function getValueFor() {
  console.log('here in getValue');
  let result = await SecureStore.getItemAsync('journeys');
  if (result) {
    console.log('🔐 getValueFor 🔐 \n' + result);
    return result;
  } else {
    console.log('No values stored under that key.');
    return 0;
  }
}
