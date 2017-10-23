import _ from 'lodash';
import { addNewAddress } from '../services/address.service';

let initialState = {};

const addresses = (state = initialState, action) => {
    var handler = addressActionHandlers[action.type];
    if (handler)
        return handler(state, action.payload);
    return state;
};

const addressActionHandlers = {};

addressActionHandlers['FETCH_ADDRESSES'] = (state, payload) => {
    return _.mapKeys(payload, 'id');
};

addressActionHandlers['ADD_ADDRESS'] = (state, payload) => {
    addNewAddress(payload);
    return state;
};

export default addresses;