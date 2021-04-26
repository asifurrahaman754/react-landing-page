import svg from "../../assets/images/svg-4.svg";
import {
  InfoContentCol,
  InfoContainer,
  InfoSpan,
  InfoHead,
  InfoPera,
  InfoImg,
  ImgWrapper,
} from "../InfoSection/InfoSectionCom";

import {
  InfoSectionBgTwo,
  InfoSectionContainerTwo,
  InfoButtonTwo,
} from "./infoSectionTwoCom";

export default function Discover() {
  return (
    <InfoSectionBgTwo id="discover">
      <InfoSectionContainerTwo>
        <InfoContentCol>
          <ImgWrapper>
            <InfoImg src={svg} />
          </ImgWrapper>
        </InfoContentCol>

        <InfoContentCol>
          <InfoContainer>
            <InfoSpan>unlimited access</InfoSpan>
            <InfoHead>Login to your account at any time</InfoHead>
            <InfoPera>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              blanditiis minus totam voluptatem nulla! Repellendus officia illo
              voluptatem,
            </InfoPera>
            <InfoButtonTwo>Learn more</InfoButtonTwo>
          </InfoContainer>
        </InfoContentCol>
      </InfoSectionContainerTwo>
    </InfoSectionBgTwo>
  );
}
