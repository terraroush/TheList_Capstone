import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import {ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// making test comment for whatever

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar />
        <UserProfileProvider>
          <Router>
            <ApplicationViews />
          </Router>
        </UserProfileProvider>
    </div>
  );
}

export default App;
