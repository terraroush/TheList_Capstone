import React from "react";
import * as s from "./MainView.styles";
import "../../Global.scss";
import Routes from "../../Routes";

const MainView = () => {
  return (
    <s.MainViewContainer>
      <Routes />
    </s.MainViewContainer>
  );
};
export default MainView;
