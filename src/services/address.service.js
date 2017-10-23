/**
 * This is like an interface for all external service follow.
 * We can easily change the way store data or use any rest api by change the import here.
 */
import service from '../firebase/firebase.service';
import helper from './helper';

/**
 * Return a promise contain all addresses from server/database
 */
const getAllAddresses = () => {
    return service.getAllAddresses();
}

/**
 * Post a request to server/database for add new address
 */
const addNewAddress = (payload) => {
    payload.address.id = helper.newId();
    service.addNewAddress(payload)
};

/**
 * Extract data from promise.
 */
const extractData = (payload) => {
    return service.extractData(payload);
}

module.exports = {
    getAllAddresses: getAllAddresses,
    addNewAddress: addNewAddress,
    extractData: extractData
}