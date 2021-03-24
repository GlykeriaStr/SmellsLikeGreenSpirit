import * as SecureStore from 'expo-secure-store';

export async function save(journeyHash) {
  let existingData = await SecureStore.getItemAsync('journeys');

  if (existingData) {
    // let entryId = `id${existingData.length}`;
    // console.log("🔐 Here's your existing values 🔐 \n" + existingData);

    let existingParsed = JSON.parse(existingData);

    journeyHash.key = `id${existingParsed.length}`;
    existingParsed.push(journeyHash);
    // console.log(existingParsed);

    await SecureStore.setItemAsync('journeys', JSON.stringify(existingParsed));
  } else {
    journeyHash.key = 'id0';
    await SecureStore.setItemAsync('journeys', JSON.stringify([journeyHash]));
  }
}

export async function deleteKey(key) {
  console.log('here in delete key');
  await SecureStore.deleteItemAsync(key);
}

export async function getValueFor() {
  // console.log('here in getValue');
  let result = await SecureStore.getItemAsync('journeys');
  if (result) {
    // console.log('🔐 getValueFor 🔐 \n' + result);
    return result;
  } else {
    console.log('No values stored under that key.');
    return 0;
  }
}
