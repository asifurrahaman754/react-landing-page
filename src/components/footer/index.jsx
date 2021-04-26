import React from "react";
import {
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
} from "./FooterCom";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <FooterHeader>About Us</FooterHeader>
          <FooterLinks href="#">How it works</FooterLinks>
          <FooterLinks href="#">Testimonial</FooterLinks>
          <FooterLinks href="#">Careers</FooterLinks>
          <FooterLinks href="#">Investors</FooterLinks>
          <FooterLinks href="#">Terms of service</FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Videos</FooterHeader>
          <FooterLinks href="#">Submit Video</FooterLinks>
          <FooterLinks href="#">Ambrassadors</FooterLinks>
          <FooterLinks href="#">Agency</FooterLinks>
          <FooterLinks href="#">Influencer</FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Contact Us</FooterHeader>
          <FooterLinks href="#">Contact</FooterLinks>
          <FooterLinks href="#">Support</FooterLinks>
          <FooterLinks href="#">Destinations</FooterLinks>
          <FooterLinks href="#">Sponsorships</FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Social Media</FooterHeader>
          <FooterLinks href="#">Instragram</FooterLinks>
          <FooterLinks href="#">Facebook</FooterLinks>
          <FooterLinks href="#">Youtube</FooterLinks>
          <FooterLinks href="#">Twitter</FooterLinks>
        </FooterSection>
      </FooterWrapper>

      <SocialFooter>
        <LogoFooter to="/">Dolla</LogoFooter>
        <CopyWrite>
          Dolla &copy; {new Date().getFullYear()} all rights reserved
        </CopyWrite>
        <SocialIconContainer>
          <SocialIcon>
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon>
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon>
            <AiFillYoutube />
          </SocialIcon>
          <SocialIcon>
            <AiFillTwitterSquare />
          </SocialIcon>
          <SocialIcon>
            <AiFillLinkedin />
          </SocialIcon>
        </SocialIconContainer>
      </SocialFooter>
    </FooterContainer>
  );
}
