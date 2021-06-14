import React from "react";
import { SearchBar, UserInfoData, UserChartData } from "../components/index";
import LoginPage from "../pages/LoginPage";
import { GithubContext } from "../context/globalContext";
import loadingImage from "../images/preloader.gif";
import NavbarAuth0 from "../components/NavbarAuth0";

import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { loading } = React.useContext(GithubContext);
  const { isAuthenticated, user } = useAuth0();
  const isLogin = isAuthenticated && user;

  if (!isLogin) {
    return <LoginPage />;
  }

  if (loading) {
    return (
      <>
        <NavbarAuth0 />
        <div className="app">
          <SearchBar />
          <img src={loadingImage} alt="" className="img-loading" />
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarAuth0 />
      <div className="app">
        <SearchBar />
        <UserInfoData />
        <UserChartData />
      </div>
    </>
  );
};

export default Home;
