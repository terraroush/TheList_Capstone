import React from 'react';
import { Route } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import {ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// making test comment for whatever

const TheList = () => {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar />
        <UserProfileProvider>
          <Route>
            <ApplicationViews />
          </Route>
        </UserProfileProvider>
    </div>
  );
}

export default TheList;
