import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

const StyledLoginOrRegister = styled.div`
  h3 {
    text-align: center;
  }
  .actions {
    display: flex;
    margin: 20px 0 10px 0;
    justify-content: center;
    
    button {
      margin: 0 20px;  
    }
  } 
`;

const LoginOrRegister = ({ history }) => (
  <StyledLoginOrRegister className="row">
    <div className="col s12 m8 l4 offset-m2 offset-l4">
      <h3>Welcome</h3>
      <div className="actions">
        <button
          className="btn-large waves-effect waves-dark"
          onClick={() => history.push('login')}
        >
          Login
        </button>
        <button
          className="btn-large waves-effect waves-dark"
          onClick={() => history.push('register')}
        >
          Register
        </button>
        <button
            className="btn-large waves-effect waves-dark"
            onClick={() => history.push('test')}
        >
          Test
        </button>
      </div>
    </div>
  </StyledLoginOrRegister>
);


export default withRouter(LoginOrRegister);