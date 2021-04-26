import styled from "styled-components";
import { InfoSectionBg } from "../InfoSection/InfoSectionCom";

const ServicesContainer = styled(InfoSectionBg)`
  flex-direction: column;
  padding: 80px 0px;
`;
const Serviceshead = styled.h1`
  font-size: clamp(1rem, 10vw, 3rem);
  margin-bottom: 50px;
`;
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  max-width: 1100px;
  grid-gap: 1rem;
  padding: 0px 50px;
`;

const ServiceCard = styled.div`
  background: #e3e3e3;
  color: black;
  padding: 25px 20px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

const ServiceIcon = styled.img`
  width: 160px;
  height: 160px;
`;

const Serviceh2 = styled.h2`
  margin: 10px 0px 8px 0px;
`;

const ServiceP = styled.p``;

export {
  ServicesContainer,
  Serviceshead,
  ServicesWrapper,
  ServiceCard,
  ServiceIcon,
  Serviceh2,
  ServiceP,
};
