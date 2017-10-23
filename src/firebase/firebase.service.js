/**
 * Must implement all method from address.service.js
 */
import { database } from './firebase.config';

const getAllAddresses = () => {
    return database.ref('/addresses').once('value');
}

const addNewAddress = () => {
};

const extractData = (payload) => {
    return payload.exportVal();
}

module.exports = {
    getAllAddresses: getAllAddresses,
    addNewAddress: addNewAddress,
    extractData: extractData
}