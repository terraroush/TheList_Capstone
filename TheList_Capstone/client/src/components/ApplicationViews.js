// All major routes here: home, login, register...list/create, list/edit, list/

import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";

const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main id="bossGrid">
      <Sidebar />
      <Main />
      
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn ? <Login /> : <Redirect to="/dashboard" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
        {!isLoggedIn ? <Register /> : <Redirect to="/dashboard" />}
        </Route>

        {/* <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route> */}

      </Switch>

      <Footer />
    </main>
  );
};
export default ApplicationViews;