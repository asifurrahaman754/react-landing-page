import svg from "../../assets/images/svg-1.svg";
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
} from "../Discover/infoSectionTwoCom";

export default function SignUp() {
  return (
    <InfoSectionBgTwo id="signUp">
      <InfoSectionContainerTwo>
        <InfoContentCol>
          <ImgWrapper>
            <InfoImg src={svg} />
          </ImgWrapper>
        </InfoContentCol>

        <InfoContentCol>
          <InfoContainer>
            <InfoSpan>Join our team</InfoSpan>
            <InfoHead>Creating an account in extemely easy</InfoHead>
            <InfoPera>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              blanditiis minus totam voluptatem nulla! Repellendus officia illo
              voluptatem,
            </InfoPera>
            <InfoButtonTwo>Star now</InfoButtonTwo>
          </InfoContainer>
        </InfoContentCol>
      </InfoSectionContainerTwo>
    </InfoSectionBgTwo>
  );
}
