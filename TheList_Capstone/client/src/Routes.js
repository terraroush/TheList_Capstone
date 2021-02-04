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
import { UserListContext } from "./providers/UserListProvider";

// Components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/MainView/Home/Home";
import AllLists from "./components/MainView/AllLists/AllLists";
import Connections from "./components/MainView/Connections/Connections";
import ListDetails from "./components/MainView/ListDetails/ListDetails";
import NotFound from "./pages/NotFound";
import UserListList from "./components/MainView/AllLists/UserList/UserListList";
import UserListContainer from "./components/MainView/AllLists/UserList/UserListContainer";
// import Footer from "./components/Footer";

const Routes = () => {
  const { isLoggedIn, logout } = useContext(UserProfileContext);
  const { userLists, setUserList } = useContext(UserListContext);

  const currentURL = useLocation().pathname;
  const history = useHistory();

  // checks the URl to trigger the logout function
  useEffect(() => {
    if (currentURL === "/logout") {
      logout();
      toast("Until next time...");
      history.push("/login");
    }
  }, [currentURL]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>

        {/* <Route path="/listcenter" exact>
          {isLoggedIn ? <AllLists /> : <Redirect to="/login" />}
        </Route> */}

        <Route path="/listcenter/createlist" exact>
          {isLoggedIn ? (
            <UserListContainer
              userLists={userLists}
              setUserList={setUserList}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        {/* <Route path="/listcenter/listory" exact>
          {isLoggedIn ? <UserListList /> : <Redirect to="/login" />}
        </Route> */}
        {/* <Route path="/listcenter/friendslists" exact>
          {isLoggedIn ? <UserListCard /> : <Redirect to="/login" />}
        </Route> */}

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
