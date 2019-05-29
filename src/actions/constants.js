module.exports = {
  REGISTRATION: 'REGISTRATION',
  generator: function (code, message, result) {
    return {
      code: code,
      message: message,
      result: result
    };
  }
};
