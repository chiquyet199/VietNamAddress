import helper from './helper';

let data = [
    {
        id: 1,
        street: 'Lam Van Ben',
        ward: '1',
        district: '7',
        city: 'HCM'
    },
    {
        id: 2,
        street: 'SDS Van Ben',
        ward: '3',
        district: '7',
        city: 'HDS'
    }
];

const getAllAddresses = () => {
    return data;
}

const addNewAddress = (payload) => {
    var newAddress = payload.address;
    newAddress.id = helper.newId();
    data.push(newAddress);
    payload.callback && payload.callback();
};

const removeAddress = () => {

}

module.exports = {
    getAllAddresses: getAllAddresses,
    addNewAddress: addNewAddress,
    removeAddress: removeAddress
}