import constants from './constants';
import axios from '../axios';

export function registration(values) {
  return (dispatch) => {
    axios
      .post('/user/registration', values)
      .then((response) => {
        response = response.data;
        dispatch({
          type: constants.REGISTRATION,
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: constants.REGISTRATION,
          payload: constants.generator('04', error.message, error.err)
        });
      });
  };
}

export function login(values) {
  return (dispatch) => {
    axios
      .post('/user/login', values)
      .then((response) => {
        response = response.data;
        dispatch({
          type: constants.LOGIN,
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: constants.LOGIN,
          payload: constants.generator('04', error.message, error.err)
        });
      });
  };
}

export function AuthError() {
  return dispatch => {
    dispatch({
      type: constants.AUTHENTICATION_ERROR,
      payload: true
    });
  }
}
