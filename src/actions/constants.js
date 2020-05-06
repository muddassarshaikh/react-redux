module.exports = {
  REGISTRATION: 'REGISTRATION',
  LOGIN: 'LOGIN',
  GET_AUTH: 'GET_AUTH',
  generator: function (code, message, result) {
    return {
      code: code,
      message: message,
      result: result,
    };
  },
};
