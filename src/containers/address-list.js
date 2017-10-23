import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { fetchAddresses } from '../actions/address.action';

class AddressList extends Component {
    componentDidMount(){
        this.props.fetchAddresses();
    }

    renderList() {
        if(_.isEmpty(this.props.addresses)){
            return (
                <tr><td className="loading" colSpan="5">loading....</td></tr>
            );
        }

        return _.map(this.props.addresses,(address) => {
            return (
                <tr key={address.id}>
                    <td>{address.street}</td>
                    <td>{address.ward}</td>
                    <td>{address.district}</td>
                    <td>{address.city}</td>
                    <td>{address.country}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Street</th>
                <th scope="col">Ward</th>
                <th scope="col">District</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
          </table>
        );
    }
}

AddressList.propTypes = {
    addresses: PropTypes.object,
    map: PropTypes.func,
    fetchAddresses: PropTypes.func
}

function mapStateToProps(state){
    return {addresses: state.addresses};
}

export default connect(mapStateToProps, { fetchAddresses })(AddressList);