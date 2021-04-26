import styled from "styled-components";
import { NavBtnLink, NavItem, NavBtn } from "../NavbarComp";

const SideBarContainer = styled.aside`
  background-color: #0d0d0d;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  top: ${props => (props.isOpen ? "0" : "-100%")};
  opacity: ${props => (props.isOpen ? "100%" : "0")};
  transition: all 0.3s ease;
  overflow: hidden;
`;

const Icon = styled.span`
  color: #fff;
  font-size: 3rem;
  top: 20px;
  right: 40px;
  position: absolute;
  cursor: pointer;
`;

const SideNavMenu = styled.ul`
  display: grid;
  color: #fff;
  align-items: center;
  grid-gap: 3.5rem;
`;

//copying style from another component and overiding them
const SideNavItem = styled(NavItem)`
  margin-left: 0px;
`;

const SideNavLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
`;

const SideNavBtn = styled(NavBtn)`
  padding: 10px 40px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SideNavBtnLink = styled(NavBtnLink)`
  font-size: 1.2rem;
`;
//copying style from another component and overiding them

export {
  SideBarContainer,
  Icon,
  SideNavItem,
  SideNavLink,
  SideNavMenu,
  SideNavBtn,
  SideNavBtnLink,
};
