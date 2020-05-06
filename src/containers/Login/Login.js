import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/user';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    showMessage: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const stateObj = prevState;
    if (nextProps.loginInfo) {
      stateObj.showMessage = nextProps.loginInfo.message;
    }
    return prevState === stateObj ? null : stateObj;
  }

  onSubmit(values) {
    this.props.login(values);
  }

  render() {
    if (sessionStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
          <div>
            <label>Email</label>
            <div>
              <Field name="emailAddress" component="input" type="email" placeholder="Email" />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <Field name="userPassword" component="input" type="password" placeholder="Password" />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button">Clear Values</button>
          </div>
        </form>
        {this.state.showMessage}
      </div>
    );
  }
}

Login = reduxForm({
  form: 'LoginForm',
})(Login);

Login = connect(
  (state) => ({
    loginInfo: state.user.loginDetails,
  }),
  { login }
)(Login);

export default Login;
