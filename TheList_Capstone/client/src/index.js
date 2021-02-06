import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import firebase from "firebase/app";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TheList from './TheList';
import App from "./App";
import "./Global.scss";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { PlanProvider } from "./providers/PlanProvider";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer position="bottom-right" hideProgressBar />
    <UserProfileProvider>
      <PlanProvider>
        <Router>
          <App />
          {/* <TheList /> */}
        </Router>
      </PlanProvider>
    </UserProfileProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
