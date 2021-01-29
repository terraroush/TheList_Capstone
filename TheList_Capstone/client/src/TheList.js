import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import "react-toastify/dist/ReactToastify.css";

const TheList = () => {
  return (
    <>
        <UserProfileProvider>
          <Router>
            <ApplicationViews />
          </Router>
        </UserProfileProvider>
    </>
  );
}

export default TheList;
