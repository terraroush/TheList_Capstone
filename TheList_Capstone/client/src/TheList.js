import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
// import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// making test comment for whatever

const TheList = () => {
  return (
    <>
      {/* <ToastContainer position="bottom-right" hideProgressBar /> */}
        <UserProfileProvider>
          <Router>
            <ApplicationViews />
          </Router>
        </UserProfileProvider>
    </>
  );
}

export default TheList;
