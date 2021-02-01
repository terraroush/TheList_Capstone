import React, { useContext } from "react";
import * as s from "./App.styles";

//Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const backgroundImage = "/images/journalList.jpg";
  const sidebarHeader = {
    fullName: "TheList",
    shortName: "TL",
  };
  const menuItems = [
    { name: "Home", to: "/", icon: "/icons/home.svg", subMenuItems: [] },
    {
      name: "All Lists",
      to: "/alllists",
      icon: "/icons/list.svg",
      subMenuItems: [
        { name: "list1", to: "/list1" },
        { name: "list2", to: "/list2" },
        { name: "list3", to: "/list3" },
      ],
    },
    {
      name: "List Details",
      to: "/listdetails",
      icon: "/icons/details.svg",
      subMenuItems: [],
    },
    {
      name: "Connections",
      to: "/connections",
      icon: "/icons/connections.svg",
      subMenuItems: [],
    },
    {
      name: "Logout",
      to: "/logout",
      icon: "/icons/logout.svg",
      subMenuItems: [],
    },
  ];

  const fonts = {
    header: "",
    menu: "",
  };

  // App.js contains the whole sidebar
  return (
    <s.App>
      {/* here we're saying, sidebar, you can have these props to do with what you will. all our data are belong to us, and all your logic are belong to you. */}
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
      />
      <MainView />
    </s.App>
  );
};

export default App;
