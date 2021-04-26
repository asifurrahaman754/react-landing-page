import {
  SideBarContainer,
  Icon,
  SideNavItem,
  SideNavLink,
  SideNavMenu,
  SideNavBtn,
  SideNavBtnLink,
} from "./SidebarCom";
import { AiOutlineClose } from "react-icons/ai";

export default function index({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <AiOutlineClose />
      </Icon>

      <SideNavMenu>
        <SideNavItem>
          <SideNavLink onClick={toggle} href="#about">
            About
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink onClick={toggle} href="#discover">
            Discover
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink onClick={toggle} href="#services">
            Services
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink onClick={toggle} href="#signUp">
            Sign Up
          </SideNavLink>
        </SideNavItem>
      </SideNavMenu>

      <SideNavBtn onClick={toggle}>
        <SideNavBtnLink to="/sign in">Sign in</SideNavBtnLink>
      </SideNavBtn>
    </SideBarContainer>
  );
}
