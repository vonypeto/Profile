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
  BgCover,
} from "./HeroElement";
import { Button, ButtonLearn } from "./ButtonElements";
import Typical from "react-typical";
import { Col, Row } from "antd";
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
        {" "}
        <HeroBg>
          <Particles
            id="tsparticles"
            canvasClassName="display-canvas"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            width="25vw"
            height="25vh"
          />{" "}
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              {" "}
              <HeroContent>
                <HeroH3>
                  <p>
                    Hello, My Name is{" "}
                    <span style={{ color: "#01bf71" }}> Von</span>
                  </p>
                </HeroH3>
                <TypicalContext
                  className="typically"
                  steps={[
                    "React Developer",
                    1000,
                    "Full Stack Developer",
                    2000,
                  ]}
                  loop={Infinity}
                />
                <HeroP>Highly skilled at backend and average at frontend</HeroP>
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
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {" "}
              <HeroPhoto>
                <HeroProfilePic>
                  <HeroProfilePhoto></HeroProfilePhoto>
                </HeroProfilePic>
              </HeroPhoto>
            </Col>
          </Row>
        </HeroBg>
      </HeroContainer>
      {/* <div className="footer-container">
        <div className="footer-parent">
          <img src={FooterImage} />
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
