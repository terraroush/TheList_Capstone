import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";

const TheList = () => {
  return (
    <>
      <UserProfileProvider>
        <Router>
          <Routes />
        </Router>
      </UserProfileProvider>
    </>
  );
};

export default TheList;
