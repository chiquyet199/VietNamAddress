import addressService from '../services/address.service';

export const addAddress = (address, callback) => {
  let payload = {
    address, callback
  };
  return {
    type: 'ADD_ADDRESS',
    payload: payload
  }
}

export const fetchAddresses = () => {
    const payload = addressService.getAllAddresses();
    return {
        type: 'FETCH_ADDRESSES',
        payload: payload
    }
}