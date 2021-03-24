import * as SecureStore from 'expo-secure-store';

export async function save(journeyHash) {
  let existingData = await SecureStore.getItemAsync('journeys');

  if (existingData) {
    let entryId = `id${existingData.length}`;
    console.log("🔐 Here's your existing values 🔐 \n" + existingData);
    // console.log(entryId);
    let existingParsed = JSON.parse(existingData);
    console.log(existingParsed);

    journeyHash.key = entryId;
    existingParsed.push(journeyHash);
    console.log(existingParsed);
    // let newResult = result + string;
    await SecureStore.setItemAsync('journeys', JSON.stringify(existingParsed));
    // return newResult;
  } else {
    journeyHash.key = 'id1';
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
