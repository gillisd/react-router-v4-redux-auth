import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const renderTextField = ({input, type, label, meta: {touched, error}, ...custom}) => (  // Define stateless component to render input and errors
  <div>
    <TextField
      type={type}
      floatingLabelText={label}
      {...input}
      {...custom}
    />
    {touched && error && <span className="error">{error}</span>}
  </div>
)

class SigninForm extends Component {
  render() {

    const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit}>

        <div>
          <Field
            label="Username"
            name="email"
            component={renderTextField}
            type="text"/>
        </div>

        <div>
          <Field
            label="Password"
            name="password"
            component={renderTextField}
            type="password"/>
        </div>

        <RaisedButton type="submit" primary={true}>Sign In</RaisedButton>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm)
