import React, {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import { Link } from "react-router-dom";
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
    const [subMenuItemsStates, setSubMenus] = useState({})

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

    // Add index of menu items with submenus to state
    useEffect(() => {
        const newSubMenus = {};

        menuItems.forEach((item, index) => {
            // !! checks for falsey or truthy; 0 is falsey any other number is truthy
            const hasSubMenus = !!item.subMenuItems.length;

            if (hasSubMenus) {
                newSubMenus[index] = {};
                newSubMenus[index]["isOpen"] = false;
                newSubMenus[index]["isSelected"] = null;
            }
        }) 
        setSubMenus(newSubMenus)
    }, [menuItems])
    
    const handleMenuItemClick = (name, index) => {
        setSelectedMenuItem(name)

        const subMenusCopy = JSON.parse(JSON.stringify(subMenuItemsStates));

        if (subMenuItemsStates.hasOwnProperty(index)) {
            subMenusCopy[index]["isOpen"] = !subMenuItemsStates[index]["isOpen"]
            setSubMenus(subMenusCopy)
        }
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;

        // !! converts to truthy or falsey value
        const hasSubMenus = !!item.subMenuItems.length
        // if this exists, then it's open; if this doesn't exist, it's not open
        const isOpen = subMenuItemsStates[index]?.isOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            return (
                <s.SubMenuItem key={subMenuItemIndex}>{subMenuItem.name}</s.SubMenuItem>
            )
        })

        return (
            <s.ItemContainer key={index}>
                <Link to={item.to} style={{ textDecoration: "none"}}>
                    <s.MenuItem 
                        font={fonts.menu}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                        isOpen={isOpen}
                    >
                        <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
                        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                        {hasSubMenus && isSidebarOpen && (
                            <s.DropdownIcon selected={isItemSelected} isOpen={isOpen}/>
                        )}
                    </s.MenuItem>
                </Link>
                    <AnimatePresence>
                    {hasSubMenus && isOpen && (
                        <motion.nav 
                            initial={{ opacity: 0.5, y: -5 }}
                            animation={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            exit={{ opacity: 0.5, x: -30 }}
                        >
                            <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>{subMenusJSX}</s.SubMenuItemContainer>
                        </motion.nav>
                    )}
                    </AnimatePresence>
            </s.ItemContainer>
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