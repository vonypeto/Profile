import React, { useState } from "react";
import Particles from "react-tsparticles";
import FooterImage from "../../asset/images/cbimage.png";
import particlesConfig from "./ParticlesConfig";
import {
  HeroContainer,
  HeroBg,
  HeroPhoto,
  HeroContent,
  HeroH3,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  TypicalContext,
  HeroProfilePic,
  HeroProfilePhoto,
} from "./HeroElement";
import { Button, ButtonLearn } from "./ButtonElements";
import Typical from "react-typical";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
          />
        </HeroBg>
        <HeroContent>
          <HeroH3>
            <p>
              Hello, My Name is <span style={{ color: "#01BF71" }}> Von</span>
            </p>
          </HeroH3>
          <TypicalContext
            className="typically"
            steps={[
              "React Developer",
              1000,
              "Full Stack Developer(BackEnd)",
              2000,
            ]}
            loop={Infinity}
          />
          <HeroP>
            Sign up for a new accoun today and recive $250 in credit towards
            your next payment
          </HeroP>
          <HeroBtnWrapper>
            <ButtonLearn
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Learn More
            </ButtonLearn>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Hire Me {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
        <HeroPhoto>
          <HeroProfilePic>
            <HeroProfilePhoto></HeroProfilePhoto>
          </HeroProfilePic>
        </HeroPhoto>
      </HeroContainer>
      <div class="footer-container">
        <div class="footer-parent">
          <img src={FooterImage} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
