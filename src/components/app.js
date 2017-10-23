import React, { Component } from 'react';
import AddressList from '../containers/address-list';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/new">Add new address</Link>
        <AddressList />
        </div>
    );
  }
}

