import styled from "styled-components";
import { Logo } from "../Navbar/NavbarComp";

const FooterContainer = styled.section`
  background: #10141e;
  color: white;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  max-width: 1100px;
  padding: 80px 50px;
  grid-gap: 1.5rem;
  margin: 0 auto;
`;

const FooterSection = styled.div``;

const FooterHeader = styled.h4`
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const FooterLinks = styled.a`
  text-decoration: none;
  display: block;
  color: #ffffffb8;
  transition: color 0.3s;
  margin-bottom: 5px;

  &:hover {
    color: #fff;
  }
`;

const SocialFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 50px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    gap: 0.6rem;

    @supports not (gap: 0.6rem) {
      & > * {
        margin-bottom: 10px;
      }
    }
  }
`;

const LogoFooter = styled(Logo)``;

const CopyWrite = styled.p``;

const SocialIconContainer = styled.ul`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.li`
  list-style: none;
  font-size: 1.3rem;

  @supports not (gap: 1rem) {
    margin-left: 15px;
  }
`;

export {
  FooterContainer,
  FooterWrapper,
  FooterSection,
  FooterHeader,
  FooterLinks,
  SocialFooter,
  LogoFooter,
  CopyWrite,
  SocialIconContainer,
  SocialIcon,
};
