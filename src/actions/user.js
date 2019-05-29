import constants from './constants';
import axios from '../axios';

export function registration(values) {
  return dispatch => {
    axios
      .post('/user/registration', values)
      .then(response => {
        response = response.data;
        dispatch({
          type: constants.REGISTRATION,
          payload: response
        });
      })
      .catch(response => {
        constants.generator('04', response.message, response.err);
      });
  };
}
