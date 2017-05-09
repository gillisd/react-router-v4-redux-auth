import axios from 'axios'
import { browserHistory } from 'react-router'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR } from './types'
const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}) {

  return function (dispatch) {

    // submit email and password to server
    const request = axios.post(`${ROOT_URL}/signin`, {email, password})
    request
      .then(response => {
        // -if request is good, we need to update state to indicate user is authenticated

        dispatch({type: AUTH_USER})
        // -Save the JWT token

        localStorage.setItem('token', response.data.token)

        // -redirect to the route '/feature'

        browserHistory.push('/feature')

      })
      .catch(() => {
        dispatch(authError('bad login info'))
      })


    // If request is bad...
    // -Show an error to the user
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function signupUser({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER})

        localStorage.setItem('token', response.data.token)

        browserHistory.push('/feature')
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}