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
        return _.map(this.props.addresses,(address) => {
            return (
                <li key={address.id}>{address.street}</li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
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