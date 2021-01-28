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
    <main>
      <Sidebar />
      <Main />
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? /*this is home*/<p>hello logged in user</p> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
};
export default ApplicationViews;