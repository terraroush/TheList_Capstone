import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
  const { isLoggedIn } = useContext(UserProfileContext);

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