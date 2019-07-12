import constants from '../actions/constants';

export default function(state = {}, action) {
  switch (action.type) {
    case constants.REGISTRATION:
      return {
        ...state,
        registrationDetails: action.payload
      };
    case constants.LOGIN:
      return {
        ...state,
        loginDetails: action.payload
      };
    default:
      return state;
  }
}
