import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps)
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oh no! </strong>{this.props.errorMessage}
      </div>
    }
  }

  render() {
    const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input type="password" className="form-control" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

function validate(formProps) {
  const errors = {}

  if (formProps.password != formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  if (!formProps.email) {
    errors.email = 'Email must be present'
  }

  if (!formProps.password) {
    errors.password = 'Password must be present'
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Confirm your password'
  }

  return errors
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
}, mapStateToProps, actions)
(Signup)