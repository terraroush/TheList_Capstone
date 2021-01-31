import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "23%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  background: lightgrey;
  background-image: linear-gradient(
      315deg,
      rgba(254, 202, 32, 0.8) 0%,
      rgba(255, 209, 148, 0.8) 74%
    ),
    url(${(p) => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  position: relative; // Toggler
  transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 4px
    font-family: ${(p) => p.font};
`;
export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

// Menu items -------------------------------------------------------------------------------------------

export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
        text-align: center;
        ${p.selected && "background-color: orange"};
    `}

  padding: 6px 10px;
  font-weight: 400;
  color: ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(19, 15, 64)")};
  font-family: ${(p) => p.font};
  font-size: 14px;
  white-space: nowrap;
  position: relative; // Dropdown Icon
  transition: 0.2s ease-in all;

  &:hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;
  }

  &:after {
    content: "";
    border: 0.5px solid ${(p) => (p.selected ? "white" : "gold")};
    display: ${(p) =>
      p.isSidebarOpen && p.selected && p.isOpen ? "none" : "block"};
    margin: 8px 0 4px;
    transition: 0.1s ease-in all;
  }

  ${(p) =>
    !p.selected &&
    `
        &:hover {
            &:after {
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: .1s ease-in all;
            }
        }
    `}
`;

export const Text = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
`;

export const Icon = styled.img`
  ${(p) =>
    p.isSidebarOpen &&
    `padding-right: 5px; transition: .2s ease-in padding-right`};

  height: 25px;
  width: 25px;
`;

// Sub menu items --------------------------------------------------------------------------------

export const SubMenuItemContainer = styled.div`
  font-size: 12px;
  ${(p) => p.isSidebarOpen && "padding-left: 15%"};
  ${(p) => !p.isSidebarOpen && "text-align: center"};
`;
export const SubMenuItem = styled.p`
  color: ${(p) => (p.selected ? "rbga(255, 255, 255)" : "rgba(19, 15, 64)")};
  ${(p) => p.selected && "font-weight: bold; letter-spacing: 2px;"};
  transition: 0.1s ease-in all;

  &:hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;
  }
`;

// Dropdown Icon ---------------------------------------------------------------------------------
// makes a lined box, but with border-width essentially get rid of two sides, leaving just one angle, then we rotate it, creating a little carrot/arrow for the submenu
export const DropdownIcon = styled.span`
  position: absolute;
  top: ${(p) => (p.isOpen ? "16px" : "12px")};
  right: 24px;
  border: solid
    ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(19, 15, 64)")};
  border-width: 0 1px 1px 0;
  padding: 3px;
  transform: ${(p) => (p.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: 0.4s ease-in all;
`;

// Toggler ---------------------------------------------------------------------------------------

export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative; // horizontal lines

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;
