import React, { useContext } from "react";
import * as s from "./MainView.styles";
import "../../Global.scss";
import Routes from "../../Routes";

// Provider
import { UserProfileContext } from "../../providers/UserProfileProvider";

const MainView = () => {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <s.MainViewContainer isLoggedIn={isLoggedIn}>
      <Routes />
    </s.MainViewContainer>
  );
};
export default MainView;
