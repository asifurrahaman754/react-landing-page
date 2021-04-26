import React, { useState } from "react";
import video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  Video,
  HeroContent,
  HeroP,
  HeroHeading,
  Button,
} from "./HeroCom";
import { BsArrowRightShort, BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  const [hover, setHover] = useState(false);

  return (
    <HeroContainer>
      <HeroBg>
        <Video autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroHeading>Virtual banking made easy</HeroHeading>
        <HeroP>
          Sing up for new account today and recieve 25$ in credit towards your
          next payment
        </HeroP>
        <Button
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
        >
          Get started {hover ? <BsArrowRight /> : <BsArrowRightShort />}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
}
