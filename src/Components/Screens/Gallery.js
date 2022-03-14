import React from "react";
import styled from "styled-components";
import AI from "../../assests/images/ai.jpg";
import Robo from "../../assests/images/robotics.jpg";
import Metapic from "../../assests/images/meta.jpg";
import Dpic from "../../assests/images/3d.jpg";
import Gp from "../../assests/images/Group+49584.jpg";
import AV from "../../assests/images/ar&vr.jpg";
import Iot from "../../assests/images/iot.jpg";
import Car from "../../assests/images/car.jpg";
import "../../App.css";
import Card from "../../assests/images/card.svg";
export default function Gallery() {
  return (
    <div>
      <MainDiv>
        {/* <Section class="Wrapper"> */}
        <DivItem>
          <H2>
            ഞങ്ങളുടെ <Small>പാഠപദ്ധതികൾ </Small>{" "}
          </H2>

          <P>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്.</P>
        </DivItem>
        <DivList>
          <UlItem>
            <LiItem type={"ai"}>
              <DivImage>
                <Img src={AI} alt="images" />
              </DivImage>
              <Span>Artificial Intelligence</Span>
            </LiItem>
            <LiItem type={"rob"}>
              <DivImage>
                <Img src={Robo} alt="images" />
              </DivImage>
              <Span>Robotics</Span>
            </LiItem>
            <LiItem type={"met"}>
              <DivImage>
                <Img src={Metapic} alt="images" />
              </DivImage>
              <Span>Metaverse</Span>
            </LiItem>
            <LiItem type={"web"}>
              <DivImage>
                <Img src={Dpic} alt="images" />
              </DivImage>
              <Span>3D Printing</Span>
            </LiItem>
            <LiItem type={"met"}>
              <DivImage>
                <Img src={Gp} alt="images" />
              </DivImage>
              <Span>web 3.0</Span>
            </LiItem>
            <LiItem type={"web"}>
              <DivImage>
                <Img src={AV} alt="images" />
              </DivImage>
              <Span>Ar & VR</Span>
            </LiItem>
            <LiItem type={"ai"}>
              <DivImage>
                <Img src={Iot} alt="images" />
              </DivImage>
              <Span>IoT</Span>
            </LiItem>
            <LiItem type={"rob"}>
              <DivImage>
                <Img src={Car} alt="images" />
              </DivImage>
              <Span>Driveless Cars</Span>
            </LiItem>
            <DivOne>
              <ImgOne src={Card} alt="images" />
            </DivOne>
          </UlItem>
        </DivList>
        {/* </Section> */}
      </MainDiv>
    </div>
  );
}
const MainDiv = styled.div`
  text-align: center;
  padding: 50px 0px;
`;
const Wrapper = styled.div``;
const DivItem = styled.div`
  /* display:block; */
`;
const H2 = styled.h2`
  position: relative;
  font-size: 45px;
  margin-bottom: 30px;
  color: rgb(15, 167, 111);
  font-weight: 600;
`;
const Small = styled.span`
  color: #000;
  font-weight: 600;
`;
const H3 = styled.h3`
  font-size: 20px;
`;
const P = styled.p`
  margin: -19px auto;
  max-width: 500px;
  font-size: 22px;
  color: grey;
`;
const DivList = styled.div`
  margin-top: 40px;
  /* width: 100%; */
  position: relative;
`;
const UlItem = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @media all and (max-width: 1280px) {
    width: 79%;
  }
  @media all and (max-width: 980px) {
    width: 96%;
  }

  @media all and (max-width: 768px) {
    justify-content: center;
  }
`;
const LiItem = styled.li`
  border-radius: 10px;
  margin: 0px 10px 20px;
  padding: 15px;
  position: relative;
  width: calc(25% - 20px);
  list-style: none;
  background-color: ${({ type }) =>
    type === "ai"
      ? "#fff6ed"
      : type === "rob"
      ? "#ebf2fa"
      : type === "met"
      ? "#eeeaf9"
      : type === "web"
      ? "#f9eefc"
      : ""};

  /* @media all and (max-width: 768px) {
    width: calc(30% - 39px);
  } */
  @media all and (max-width: 768px) {
    width: 45%;
  }
`;
const DivImage = styled.div`
  width: 91%;
  overflow: hidden;
  border-radius: 10px;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const Span = styled.span`
  display: block;
  font-size: 18px;
  margin: 20px 0px 5px;
`;
const DivOne = styled.div`
  position: absolute;
  bottom: -108px;
  right: 0;
  width: 19%;

  /* @media all and (max-width: 2800px){
    bottom: -25%;
    right: -213px;
} */

  @media all and (max-width: 1080px) {
    bottom: -35px;
    right: 20px;
    width: 19%;
  }
  @media all and (max-width: 980px) {
    bottom: -31px;
    right: -55px;
  }

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const ImgOne = styled.img`
  width: 100%;
  display: block;

  @media all and (max-width: 1280px) {
    width: 51%;
  }
`;
