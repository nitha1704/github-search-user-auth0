import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarAuth0 = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;

  const isTwitter = user ? user.sub.includes("twitter"): "";
  const isVK =  user ?user.sub.includes("vkontakte") : "" ;
  const isFacebook = "";

  if (isUser && isTwitter) {
    return (
      <Nav>
        <div className="navbar-item1">
          <div className="wrap-image">
            <img src={user.picture} />
          </div>
          <span>Welcome, {user.name}</span>
          <div className="wrap-button">
            <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
          </div>
        </div>
      </Nav>
    );
  }
  if (isUser && isVK) {
    return (
      <Nav>
        <div className="navbar-item1">
          <div className="wrap-image">
            <img src={user.picture} />
          </div>
          <span>
            Welcome, {user.given_name} {user.family}
          </span>
          <div className="wrap-button">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </div>
        </div>
      </Nav>
    );
  }

  if(isUser){
      return (
        <Nav>
          <div className="navbar-item1">
            <div className="wrap-image">
              <img src={user.picture} />
            </div>
            <span>Welcome, {user.name}</span>
            <div className="wrap-button">
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </div>
          </div>
        </Nav>
      );
  }

  return <h1>Please Login</h1>

};

const Nav = styled.nav`
  display: grid;
  background: white;
  padding: 30px;
  .navbar-item1 {
    display: flex;
    justify-content: center;
    align-items: center;
    .wrap-image {
      img {
        border-radius: 50%;
      }
    }
    span {
      margin: 0 30px;
    }
  }

  button {
    padding: 10px 20px;
    cursor: pointer;
  }
`;
export default NavbarAuth0;
