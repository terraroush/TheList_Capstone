import React, { useContext, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { toast } from "react-toastify";
import { UserProfileContext } from "./providers/UserProfileProvider";

// Components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/MainView/Home/Home";
import AllLists from "./components/MainView/AllLists/AllLists";
import List from "./components/MainView/AllLists/List/List";
import Connections from "./components/MainView/Connections/Connections";
import ListDetails from "./components/MainView/ListDetails/ListDetails";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";

const Routes = () => {
  const { isLoggedIn, logout } = useContext(UserProfileContext);

  const currentURL = useLocation().pathname;
  const history = useHistory();

  // checks the URl to trigger the logout function
  useEffect(() => {
    if (currentURL === "/logout") {
      logout();
      toast.dark("Until next time...");
      history.push("/login");
    }
  }, [currentURL]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>

        <Route path="/alllists" exact>
          {isLoggedIn ? <AllLists /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/alllists/:list" component={List} />

        <Route path="/connections" exact>
          {isLoggedIn ? <Connections /> : <Redirect to="/login" />}
        </Route>

        <Route path="/listdetails" exact>
          {isLoggedIn ? <ListDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Routes;
