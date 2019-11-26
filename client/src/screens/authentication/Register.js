import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const StyledRegister = styled.form`
  .actions {
    margin: 20px 0 10px 0
  } 
`;

// TODO: post actual JSON not form data
// TODO: add validation
const Register = () => (
  <StyledRegister className="row" action="/users/register" method="POST">
    <div className="col s12 m8 l4 offset-m2 offset-l4">
      <div className="card">
        <div className="card-action teal lighten-1 white-text">
          <h3>Register</h3>
        </div>
        <div className="card-content">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-field">
            <label htmlFor="username">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirmPassword" />
          </div>
          <div className="actions">
            <button className="btn-large waves-effect waves-dark">Register and login</button>
          </div>
          <div className="have-account">
            <span>Have An Account? </span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </StyledRegister>
);

export default withRouter(Register);