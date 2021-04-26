import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Nav = styled.nav`
  background: ${props => (props.changeBg ? "black" : "transparent")};
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: background 0.4s ease;
`;

const NavbarContainer = styled.div`
  padding: 0px 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
`;

const Logo = styled(LinkR)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    font-size: 1.8 rem;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  color: #fff;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin-left: 20px;
  cursor: pointer;
  position: relative;

  &:before {
    width: 0%;
    position: absolute;
    content: "";
    opacity: 0;
    bottom: -7px;
    transition: width 0.3s, opacity 0.6s;
    border-bottom: 4px solid #01bf71;
  }

  &:hover&:before {
    width: 100%;
    opacity: 100;
  }
`;
const NavLinks = styled.a`
  text-decoration: none;
  color: white;
`;

const NavBtn = styled.button`
  display: block;
  background: #01bf71;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: background 0.2s ease;

  &:hover {
    background: #28d48e;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavBtnLink = styled(LinkR)`
  font-weight: bold;
  font-size: 1rem;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #010606;
`;

export {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
};
