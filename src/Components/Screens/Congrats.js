import React from "react";
import styled from "styled-components";
import Girl from "../../assests/images/girl.svg";
import Tefun from "../../assests/images/Tefun-logo.svg";
import bg from "../../assests/images/bannerbg.svg";

export default function () {
  return (
    <div>
      <Main>
        <MainDiv>
          <Imgcontainer>
            <Img src={Tefun} alt="images" />
          </Imgcontainer>
          <H1>Technology Funtamental Program</H1>
          <DivImage>
            <Pic src={Girl} alt="image" />
          </DivImage>
          <H2>congratulations</H2>
          <P>
            You have complete your examination we will provide certificate come
            soon{" "}
          </P>
          <Button>Go to dashBoards</Button>
        </MainDiv>
      </Main>
    </div>
  );
}

const Main = styled.div`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  background-position: -6px;
`;

const MainDiv = styled.div`
  margin: 0 auto;
  width: 30%;
`;
const Imgcontainer = styled.div`
  width: 31%;
  padding-top: 70px;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const H1 = styled.h1`
  font-size: 14px;
  text-align: center;
  color: #508181;
  margin-top: 10px;
`;
const DivImage = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const Pic = styled.img`
  width: 100%;
  display: block;
`;
const H2 = styled.h2`
  font-size: 21px;
  text-align: center;
  color: rgb(15, 167, 111);
  font-weight: 600;
`;
const P = styled.p`
  font-size: 15px;

  font-size: 15px;
  width: 85%;
  display: flex;
  justify-content: center;
  color: #508181;
  text-align: center;
  margin-top: 11px;
  margin-bottom: 20px;
`;
const Button = styled.span`
  background: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  width: 200px;
  height: 40px;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;
  margin: 0 auto;
  margin-top: 18px;
  display: block;
  justify-content: center;
  text-align: center;
  padding: 12px;
`;
