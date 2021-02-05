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
import { PlanContext } from "./providers/PlanProvider";

// Components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/MainView/Home/Home";
import AllPlans from "./components/MainView/AllPlans/AllPlans";
import Connections from "./components/MainView/Connections/Connections";
import PlanDetails from "./components/MainView/PlanDetails/PlanDetails";
import NotFound from "./pages/NotFound";
// import PlanList from "./components/MainView/AllPlans/Plan/PlanList";
import PlanContainer from "./components/MainView/AllPlans/Plan/PlanContainer";
// import Footer from "./components/Footer";

const Routes = () => {
  const { isLoggedIn, logout } = useContext(UserProfileContext);
  const { plans, setPlans } = useContext(PlanContext);

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
          {isLoggedIn ? <AllPlans /> : <Redirect to="/login" />}
        </Route> */}

        <Route path="/listcenter/createlist" exact>
          {isLoggedIn ? <PlanContainer /> : <Redirect to="/login" />}
        </Route>
        {/* <Route path="/listcenter/listory" exact>
          {isLoggedIn ? <PlanList /> : <Redirect to="/login" />}
        </Route> */}
        {/* <Route path="/listcenter/friendslists" exact>
          {isLoggedIn ? <TaskCard /> : <Redirect to="/login" />}
        </Route> */}

        <Route path="/connections" exact>
          {isLoggedIn ? <Connections /> : <Redirect to="/login" />}
        </Route>

        <Route path="/listdetails" exact>
          {isLoggedIn ? <PlanDetails /> : <Redirect to="/login" />}
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
