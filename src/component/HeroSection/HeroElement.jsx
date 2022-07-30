import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import Wave from "../../asset/images/wave.svg";
import Typical from "react-typical";
import { Col, Row } from "antd";
import Image from "../../asset/images/b6.png";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 30px; */
  height: 750px;
  position: relative;
  background-repeat: no-repeat, no-repeat;
  background-image: url(${Wave}), url(${Image});
  background-size: cover, cover;

  z-index: 1;
  :before {
    content: "";
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${Image});
    background-size: cover;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
    opacity: 0.5;
  }
  :after {
    content: "";
    position: absolute;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 1024px) {
    height: 600px;
  } ;;;;
`;
export const BgCover = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.1;
  background-repeat: no-repeat;
  background-size: 300px 100px;
  background-image: url(${Image});
`;
export const HeroBg = styled.div`
  position: "absolute";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HeroContent = styled.div`
  z-index: 3;
  text-align: right;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 400px;
  margin-top: 140px;
  @media screen and (max-width: 1440px) {
    margin-left: 200px;
    margin-top: 100px;
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`;
export const HeroH3 = styled.h1`
  color: #fff;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const TypicalContext = styled(Typical)`
  color: #fff;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const HeroP = styled.p`
  margin-top: 5px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const HeroPhoto = styled.div`
  z-index: 3;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 400px;
  margin-top: 60px;
  @media screen and (max-width: 1440px) {
    margin-left: 200px;
    margin-top: 5px;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const HeroProfilePic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 #ffffff;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  margin: 0 0 0 100px;
`;
export const HeroProfilePhoto = styled.div`
  height: 92%;
  width: 92%;
  background-size: cover;
  background-image: url("https://joeschmoe.io/api/v1/random");
  border-radius: 50%;
`;
export const HeroRow = styled(Row)`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
`;

// import styled from "styled-components";
// import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
// import Wave from "../../asset/images/wave.svg";
// export const HeroContainer = styled.div
//   /* background: #0c0c0c; */
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 30px;
//   height: 700px;
//   position: relative;
//   background-repeat: no-repeat;
//   background-image: url(${Wave});
//   background-size: cover;

//   z-index: 1;
//   :before {
//     content: "";
//     position: relative;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.2) 0%,
//         rgba(0, 0, 0, 0.6) 100%
//       ),
//       linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//     z-index: 2;
//   }
// `;
// export const HeroBg = styled.div`
//   position: "absolute";
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;
// export const HeroContent = styled.div`
//   z-index: 3;
//   margin-top: -180px;
//   position: absolute;
//   padding: 8px 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const HeroH3 = styled.h3`
//   color: #fff;
//   justify-content: space-between;
//   font-size: 25px;
//   text-align: center;
//   display: flex;

//   @media screen and (max-width: 768px) {
//     font-size: 40px;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 32px;
//   }
// `;

// export const HeroP = styled.p`
//   margin-top: 24px;
//   color: #fff;
//   font-size: 24px;
//   text-align: center;
//   max-width: 600px;
//   @media screen and (max-width: 768px) {
//     font-size: 24px;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 18px;
//   }
// `;
// export const HeroBtnWrapper = styled.div`
//   margin-top: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 2px 2px;
// `;
// export const HeroPhoto = styled.div`
//   z-index: 3;
//   margin-top: -180px;
//   padding: 8px 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const ArrowForward = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 20px;
// `;
// export const ArrowRight = styled(MdKeyboardArrowRight)`
//   margin-left: 8px;
//   font-size: 20px;
// `;
