module.exports = {
  REGISTRATION: 'REGISTRATION',
  LOGIN: 'LOGIN',
  generator: function(code, message, result) {
    return {
      code: code,
      message: message,
      result: result
    };
  }
};
