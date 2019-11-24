import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #282c34;
  height: 100px;
  display: flex;
  padding: 0 20px;
  color: white;
  
  .home {
    font-size: 28px;
    cursor: pointer;
    color: #E6E7E8;
  }
`;

const Header = ({ history }) => {
  return (
    <StyledHeader>
      <p className="home" onClick={() => history.push('/')}>
        Live Apps
      </p>
    </StyledHeader>
  )
};

Header.propTypes = {
  history: PropTypes.any.isRequired
};

export default withRouter(Header);