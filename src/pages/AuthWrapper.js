import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import spinningGIF from "../images/preloader.gif";
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      //   <Wrapper>
      //     <img src={spinningGIF} />
      //   </Wrapper>
      <Wrapper>
        <h1>Loading ...</h1>
      </Wrapper>
    );
  }
  if (error) {
    return <Wrapper>{error.message}</Wrapper>;
  }
  return children;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export default AuthWrapper;
