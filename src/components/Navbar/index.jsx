import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./NavbarComp";
import { TiThMenu } from "react-icons/ti";

export default function Navbar({ toggle }) {
  const [changeBg, setchangeBg] = useState(false);

  const toggleBg = () => {
    if (window.scrollY >= 80) {
      setchangeBg(true);
    } else {
      setchangeBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBg);
  }, []);

  return (
    <>
      <Nav changeBg={changeBg}>
        <NavbarContainer>
          <Logo to="/">Dolla</Logo>

          <MobileIcon onClick={toggle}>
            <TiThMenu />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks href="#about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#signUp">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/sign in">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
//nav , div
