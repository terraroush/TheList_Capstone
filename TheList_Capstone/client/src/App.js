import React from "react";
import * as s from "./App.styles";

//Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {

    const backgroundImage = "/images/journalList.jpg";
    const sidebarHeader = {
        fullName: "TheList",
        shortName: "TL"
    };
    const menuItems = [
        {name: "Home", to: "/", icon: "icons/home.svg", subMenuItems: []},
        {name: "All Lists", to: "/lists", icon: "icons/list.svg", 
            subMenuItems: [
                {name: "listOne", to: "/listone"},
                {name: "listTwo", to: "/listTwo"},
                {name: "listThree", to: "/listThree"}
            ]},
        {name: "List Details", to: "/listdetails", icon: "icons/details.svg", subMenuItems: []},
        {name: "Connections", to: "/connections", icon: "icons/connections.svg", 
            subMenuItems: [
                {name: "friendOne", to: "/friendOne"},
                {name: "friendTwo", to: "/friendTwo"},
                {name: "friendThree", to: "/friendThree"},
                {name: "friendFour", to: "/friendFour"}
            ]},
        {name: "Logout", to: "/logout", icon: "icons/logout.svg", subMenuItems: []}
    ];

    const fonts = {
        header: "",
        menu: ""
    }


    return (
        <s.App>
            <Sidebar 
                backgroundImage={backgroundImage}
                sidebarHeader={sidebarHeader}
                menuItems={menuItems}
                fonts={fonts}
            />
            <MainView />
        </s.App>
    )
}

export default App;