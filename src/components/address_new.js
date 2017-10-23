import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAddress } from '../actions/address.action';

class AddressNew extends Component {
  renderField(field) {
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input  }
        />
        <div className="help-text">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(address) {
    this.props.addAddress(address, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Street"
          name="street"
          component={this.renderField}
        />
        <Field
          label="Ward"
          name="ward"
          component={this.renderField}
        />
        <Field
          label="District"
          name="district"
          component={this.renderField}
        />
        <Field
          label="City"
          name="city"
          component={this.renderField}
        />
        <Field
          label="Country"
          name="country"
          component={this.renderField}
        />
        <div className="form-group">
          <button type="submit"
            className="btn btn-primary">
            Save
        </button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.street) {
    errors.street = "pls add street";
  }
  return errors;
}

AddressNew.propTypes = {
  handleSubmit: PropTypes.func,
  addAddress: PropTypes.func,
  history: PropTypes.object
}

export default reduxForm({
  validate: validate,
  form: 'AddNewAddressForm'
})(
  connect(null, { addAddress })(AddressNew)
);