import addressModel from './models/address';
import database from './configs/firebase';
// export const init = () ...
// retrieve from firebase
// return promise object

//fetch all addresses
export const getAddresses = () => {
  return database.ref('/').once('value')
}

// get specified address
export const getAddress = (addressId) => {
  return database.ref(`/${addressId}`).once('value')
}

// add new address
export const addAddress = (address) => {
  let key = database.ref('/').push().key
  let model = addressModel(address.id, address.name, address.ward, address.city);
  return database.ref('/'+ key).set(model)
}
