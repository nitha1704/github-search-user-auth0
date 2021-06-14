import React from 'react';
import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react';

// Image
import developerActivity from "../images/developer-activity.svg";

const LoginPage = () => {
    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
    console.log(isAuthenticated, user);
    return (
      <Wrapper>
        <div className="wrap-content">
          <img src={developerActivity} />
          <h3>Github User</h3>
          <button onClick={loginWithRedirect}>Login / Sign Up</button>
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  min-height: 100vh;
  .wrap-content {
    text-align: center;
    img {
      width: 600px;
      height: 100%;
    }
    h3 {
      font-size: 70px;
      margin: 20px 0;
      letter-spacing: 1px;
    }

    button {
      border: 1px solid #b9e2e7;
      background: #2caeba;
      color: #fff;
      padding: 20px 30px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: 0.3s;
      &:hover {
        border: 1px solid #000;
        background: #ddeef2;
        color: #000;
      }
    }
  }
`;
export default LoginPage
