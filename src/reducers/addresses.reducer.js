import addressService from '../services/address.service';

let initialState = {};

const addresses = (state = initialState, action) => {
    var handler = addressActionHandlers[action.type];
    if (handler)
        return handler(state, action.payload);
    return state;
};

const addressActionHandlers = {};

addressActionHandlers['FETCH_ADDRESSES'] = (state, payload) => {
    return addressService.extractData(payload);
};

addressActionHandlers['ADD_ADDRESS'] = (state, payload) => {
    addressService.addNewAddress(payload);
    return state;
};

export default addresses;