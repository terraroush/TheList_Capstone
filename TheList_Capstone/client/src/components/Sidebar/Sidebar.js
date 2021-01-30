import React, {useState, useEffect} from "react";
import * as s from "./Sidebar.styles";
import "../../Global.scss";
 
const Sidebar = (props) => {
    const { 
        backgroundImage = "", 
        sidebarHeader = {
            fullName: "",
            shortName: ""
        }, 
        menuItems = [] ,
        fonts = {
            header: "",
            menu: ""
        }
    } = props;

    // State
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name)
    const [isSidebarOpen, setSidebarState] = useState(true)
    const [header, setHeader] = useState(sidebarHeader.fullName)

    // Effects

    // Update of header state
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName)
    }, [isSidebarOpen, sidebarHeader])

    // Update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 1280)setSidebarState(false);
            else setSidebarState(true);
        }
        window.addEventListener("resize", updateWindowWidth);

        return () => window.removeEventListener("resize", updateWindowWidth);
    }, [isSidebarOpen])

    const handleMenuItemClick = name => {
        setSelectedMenuItem(name)
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;

        return (
            <s.MenuItem 
                key={index} 
                font={fonts.menu}
                selected={isItemSelected}
                onClick={() => handleMenuItemClick(item.name)}
                isSidebarOpen={isSidebarOpen}
            >
                <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            </s.MenuItem>
        )
    })

    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
                <s.Toggler />
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
};
export default Sidebar;