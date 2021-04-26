import styled from "styled-components";
import {
  InfoSectionBg,
  InfoSectionContainer,
  InfoButton,
} from "../InfoSection/InfoSectionCom";

const InfoSectionBgTwo = styled(InfoSectionBg)`
  background: #e3e3e3;
  color: black;
`;

const InfoSectionContainerTwo = styled(InfoSectionContainer)`
  @media (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

const InfoButtonTwo = styled(InfoButton)`
  background-color: black;
  color: white;
  padding: 10px 25px;

  &:hover {
    background: #01bf71;
    color: black;
  }
`;

export { InfoSectionBgTwo, InfoSectionContainerTwo, InfoButtonTwo };
