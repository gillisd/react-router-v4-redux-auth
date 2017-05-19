import React from 'react'
import TextField from 'material-ui/TextField'

export const renderTextField = ({input, type, label, meta: {touched, error}, ...custom}) => (  // Define stateless component to render input and errors
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
