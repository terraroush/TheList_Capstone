import React from "react";
import ListCenter from "../../../pages/ListCenter";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h2>Welcome to TheList</h2>
      <br />
      <ListCenter />
    </div>
  );
};

export default Home;
