import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "./providers/UserProfileProvider";

// Components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/MainView/Home/Home";
import AllLists from "./components/MainView/AllLists/AllLists";
import Connections from "./components/MainView/Connections/Connections";
import ListDetails from "./components/MainView/ListDetails/ListDetails";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";


const Routes = () => {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <>
      <Switch>

         <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route> 

        <Route path="/lists">
          {isLoggedIn ? <AllLists /> : <Redirect to="/login" />}
        </Route>

        <Route path="/connections">
          {isLoggedIn ? <Connections /> : <Redirect to="/login" />}
        </Route>

        <Route path="/listdetails">
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