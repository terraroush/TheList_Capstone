import React from "react";
import "../index.css";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

const Main = () => {

    return (
        <div className="theMain" id="theMain">
            <h3>main container</h3>
            <h6>holds leftMain and rightMain</h6>
            <div className="listContainer"><LeftMain /></div>
            <div className="listDetailContainer"><RightMain /></div>
        </div>
    )
};
export default Main;