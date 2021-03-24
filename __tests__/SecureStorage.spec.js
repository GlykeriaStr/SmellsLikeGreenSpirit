import { isAvailableAsync } from 'expo-secure-store';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { save } from '../src/storage/SecureStorage'
import { getValueFor } from '../src/storage/SecureStorage'

describe('save', () => {
  it('adds a new item to secure storage database', () => {
    console.log(save("item1", 100))
    console.log(getValueFor("item1"))
    expect(getValueFor("item1")).toEqual(100)
  });
}); 






