const authentication = () => {
  if (sessionStorage.getItem('token')) {
    return true;
  } else {
    window.location = '/login';
  }
};

export default authentication;
