import React from "react";
import {
  ServicesContainer,
  Serviceshead,
  ServicesWrapper,
  ServiceCard,
  ServiceIcon,
  Serviceh2,
  ServiceP,
} from "./ServicesCom";
import Icon1 from "../../assets/images/svg-5.svg";
import Icon2 from "../../assets/images/svg-3.svg";
import Icon3 from "../../assets/images/svg-2.svg";

export default function Services() {
  return (
    <ServicesContainer id="services">
      <Serviceshead>Our services</Serviceshead>
      <ServicesWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon1} />
          <Serviceh2>Reduce Expense</Serviceh2>
          <ServiceP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            eos!
          </ServiceP>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <Serviceh2>Premium Benefits</Serviceh2>
          <ServiceP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            eos!
          </ServiceP>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <Serviceh2>Virtual Offices</Serviceh2>
          <ServiceP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            eos!
          </ServiceP>
        </ServiceCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
