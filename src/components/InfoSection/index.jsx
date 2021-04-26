import React from "react";
import svg from "../../assets/images/svg-3.svg";
import {
  InfoSectionBg,
  InfoSectionContainer,
  InfoContentCol,
  InfoContainer,
  InfoSpan,
  InfoHead,
  InfoPera,
  InfoButton,
  InfoImg,
  ImgWrapper,
} from "./InfoSectionCom";

export default function InfoSection() {
  return (
    <InfoSectionBg id="about">
      <InfoSectionContainer>
        <InfoContentCol>
          <InfoContainer>
            <InfoSpan>premium bank</InfoSpan>
            <InfoHead>Unlimited Transaction with zero fees</InfoHead>
            <InfoPera>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              blanditiis minus totam voluptatem nulla! Repellendus officia illo
              voluptatem,
            </InfoPera>
            <InfoButton>Get started</InfoButton>
          </InfoContainer>
        </InfoContentCol>

        <InfoContentCol>
          <ImgWrapper>
            <InfoImg src={svg} />
          </ImgWrapper>
        </InfoContentCol>
      </InfoSectionContainer>
    </InfoSectionBg>
  );
}
