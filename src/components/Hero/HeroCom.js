import styled from "styled-components";

const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 0 30px;
  position: relative;
  margin-top: -80px;
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000;
  opacity: 0.3;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  padding: 8px 24px;
  align-items: center;
  z-index: 333;
  color: white;
  text-align: center;
`;

const HeroP = styled.p`
  max-width: 600px;
  margin-top: 24px;
  font-size: clamp(1rem, 3vw, 1.5rem);
`;

const HeroHeading = styled.h3`
  font-size: 48px;
  font-size: clamp(2rem, 10vw, 3.5rem);
`;

const Button = styled.button`
  border: none;
  background: #01bf71;
  padding: 8px 25px;
  border-radius: 50px;
  margin-top: 30px;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;

  & > svg {
    font-size: 1.8rem;
  }

  &:hover {
    background: #fff;
  }
`;

export {
  HeroContainer,
  HeroBg,
  Video,
  HeroContent,
  HeroP,
  HeroHeading,
  Button,
};
