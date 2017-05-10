import React, { Component } from 'react'
import SigninForm from './signin_form'
import * as actions from '../../actions'
import { connect } from 'react-redux'

class Signin extends Component {

  handleRedirectErrors() {
    const location = this.props.location
    return location.state && location.state.needAuthentication && <div>You need to sign in</div>
  }


  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password})
  }

  render() {
    return (
      <div>
        {this.handleRedirectErrors()}
        <SigninForm onSubmit={this.handleFormSubmit.bind(this)}/>
      </div>
    )
  }

}

export default connect(null, actions)(Signin)

//   renderAlert() {
//     if(this.props.errorMessage) {
//       return (
//         <div className="alert alert-danger">
//           <strong>Oops: </strong>{this.props.errorMessage}
//         </div>
//       )
//     }
//   }
//
//   render() {
//
//     const {handleSubmit, fields: {email, password}} = this.props
//
//     return (
//       <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
//         <fieldset className="form-group">
//           <label>Email:</label>
//           <input {...email} type="text" className="form-control"/>
//         </fieldset>
//         <fieldset className="form-group">
//           <label>Password:</label>
//           <input {...password} type="text" className="form-control"/>
//         </fieldset>
//         {this.renderAlert()}
//         <button action="submit" className="btn btn-primary">Sign in</button>
//       </form>
//     )
//   }
// }
//
// function mapStateToProps(state) {
//   return {errorMessage: state.auth.error}
// }

// export default reduxForm({
//   form: 'signin',
//   fields: ['email', 'password']
// }, mapStateToProps, actions)(Signin)