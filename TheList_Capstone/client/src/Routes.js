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
import Connections from "./components/MainView/Connections/Connections";
import NotFound from "./pages/NotFound";
import PlanDetailsForm from "./components/MainView/AllPlans/Plan/PlanDetailsForm";
import ListCenter from "./pages/ListCenter";
import PlanList from "./components/MainView/AllPlans/Plan/PlanList";
import ConnectionList from "./components/MainView/Connections/ConnectionList";
import ConnectionsPlanList from "./components/MainView/Connections/ConnectionsPlanList";
import UserPlan from "./components/MainView/AllPlans/Plan/UserPlan";
// import Footer from "./components/Footer";

const Routes = () => {
  const { isLoggedIn, logout } = useContext(UserProfileContext);
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

        <Route path="/listcenter" exact>
          {isLoggedIn ? <ListCenter /> : <Redirect to="/login" />}
        </Route>

        <Route path="/listcenter/createlist" exact>
          {isLoggedIn ? <PlanDetailsForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/listcenter/edit/:planId(\d+)" exact>
          {isLoggedIn ? <PlanDetailsForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/listcenter/createlist/:planId(\d+)" exact>
          {isLoggedIn ? <UserPlan /> : <Redirect to="/login" />}
        </Route>
        <Route path="/listcenter/createlist/:planId(\d+)" exact>
          {isLoggedIn ? <div></div> : <Redirect to="/login" />}
        </Route>

        <Route path="/listcenter/listory" exact>
          {isLoggedIn ? <PlanList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/listcenter/friendslists" exact>
          {isLoggedIn ? <ConnectionsPlanList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/connections" exact>
          {isLoggedIn ? <ConnectionList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/listdetails" exact>
          {isLoggedIn ? <div></div> : <Redirect to="/login" />}
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
