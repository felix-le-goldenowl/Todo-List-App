/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from 'actions';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import _ from 'lodash';
import './styles.css';

const LoginPage = ({ onLogin, user, history }) => {
  const isLoginFailed = _.get(user, 'loggedIn', true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(email, password);
    if (isLoginFailed) {
      history.push('/todos');
    }
  };
  return (
    <>
      {isLoginFailed === false && (
        <Alert variant="filled" severity="error">
          Đăng nhập thất bại, vui lòng kiểm tra lại email và mật khẩu
        </Alert>
      )}
      <div className="login">
        <div className="login-triangle" />
        <h2 className="login-header">Log in</h2>
        <form onSubmit={handleSubmit} className="login-container">
          <p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </p>
          <p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </p>
          <p>
            <input type="submit" value="Log in" />
          </p>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => dispatch(login(email, password)),
});

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
