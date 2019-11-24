import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const StyledLogin = styled.div`
  .actions {
    margin: 20px 0 10px 0;
  } 
`;

const Login = ({ history }) => (
  <StyledLogin className="row">
    <div className="col s12 m8 l4 offset-m2 offset-l4">
      <div className="card">
        <div className="card-action teal lighten-1 white-text">
          <h3>Login</h3>
        </div>
        <div className="card-content">
          <div className="input-field">
            <label htmlFor="username">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <div className="actions">
            <button className="btn-large waves-effect waves-dark">Login</button>
          </div>
          <div className="no-account">
            <span>No Account? </span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  </StyledLogin>
);

Login.propTypes = {
  history: PropTypes.any.isRequired
};

export default withRouter(Login);