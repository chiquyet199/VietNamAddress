/**
 * Must implement all method from address.service.js
 */
import { database } from './firebase.config';

const getAllAddresses = () => {
    return database.ref('/addresses').once('value');
}

const addNewAddress = (payload) => {
    const guestsRef = database.ref('/addresses');
    let newAddress = {
        id: payload.address.id,
        street: payload.address.street,
        ward: payload.address.ward,
        district: payload.address.district,
        city: payload.address.city,
        country: payload.address.country
      };
    guestsRef
    .push(newAddress)
    .then(payload.callback)
};

const extractData = (payload) => {
    return payload.exportVal();
}

module.exports = {
    getAllAddresses: getAllAddresses,
    addNewAddress: addNewAddress,
    extractData: extractData
}