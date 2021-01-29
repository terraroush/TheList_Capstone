import React from "react";
import "./Main.css";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

const Main = () => {

    return (
        <div className="main" id="main">
            <LeftMain />
            <RightMain />
        </div>
    )
};
export default Main;