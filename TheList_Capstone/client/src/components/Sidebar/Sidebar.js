import React from "react";
import * as s from "./Sidebar.styles";
import "../../Global.scss";

const Sidebar = () => {

    return (
        <s.SidebarContainer>
            <h3>sidebar</h3>
            <div>this will be the user's profile card</div>
            <div>this will be the accordian of lists</div>
            <div>this will be the accordian of friends</div>
            <div>this will be the logout</div>
        </s.SidebarContainer>
    )
};
export default Sidebar;