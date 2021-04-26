import styled from "styled-components";
import { Button } from "../Hero/HeroCom";

const InfoSectionBg = styled.section`
  width: 100%;
  background: black;
  color: white;
  display: flex;
  align-items: center;
`;

const InfoSectionContainer = styled.div`
  width: 100%;
  height: inherit;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const InfoContentCol = styled.div``;

const InfoContainer = styled.div`
  max-width: 450px;
`;

const InfoSpan = styled.span`
  text-transform: uppercase;
  color: #01bf71;
  letter-spacing: 0.4px;
  font-weight: bold;
`;

const InfoHead = styled.h1`
  font-size: clamp(2rem, 10vw, 3rem);
  margin: 15px 0px;
  margin: 15px 0px 20px 0px;
  line-height: 1;
`;

const InfoPera = styled.p`
  font-size: clamp(1rem, 1vw, 1.5rem);
  letter-spacing: 0.3px;
  line-height: 1.5;
`;

const InfoButton = styled(Button)``;

const ImgWrapper = styled.div`
  max-width: 450px;
  @media (max-width: 768px) {
    margin: 80px auto 0px auto;
    max-width: 85%;
  }
`;

const InfoImg = styled.img`
  width: 100%;
`;

export {
  InfoSectionBg,
  InfoSectionContainer,
  InfoContentCol,
  InfoContainer,
  InfoSpan,
  InfoHead,
  InfoPera,
  InfoButton,
  ImgWrapper,
  InfoImg,
};
