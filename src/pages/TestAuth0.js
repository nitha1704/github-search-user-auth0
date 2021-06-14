import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";


const TestAuth0 = () => {
    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
    console.log(isAuthenticated, user);
    return (
      <Wrapper>
        <button onClick={() => loginWithRedirect()}>Login</button>
        <button onClick={() => logout()}>Logout</button>
      </Wrapper>
    );
}


const Wrapper = styled.div`

`
export default TestAuth0
