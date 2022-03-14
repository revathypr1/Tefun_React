import React from "react";
import styled from "styled-components";
import screen from "../../assests/images/Lockscreen.svg";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <MainDiv>
        <ImgDiv>
          <Img src={screen} alt="images" />
        </ImgDiv>
        <Heading>Your examination is locked.</Heading>
        <Paragraph>
          Please complete your lessons as soon as possible to unlock your
          examination.
        </Paragraph>
        <Button link to ="/video-date">Go To dashBoards</Button>
      </MainDiv>
    </div>
  );
}

const MainDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`;
const ImgDiv = styled.div`
  width: 50%;
  padding-top: 30%;
  margin: 0 auto;

  @media all and (max-width: 768px){
    padding-top: 37%;
  }
  @media all and (max-width: 640px){
    padding-top: 58%;
  }
  @media all and (max-width: 420px){
    padding-top: 95%;
    width: 65%;
  
  }
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const Heading = styled.h1`
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  margin-top: -41px;

  @media all and (max-width: 420px){
    margin-top: 15px;
  }
`;
const Paragraph = styled.p`
  font-size: 15px;

  font-size: 15px;
  width: 85%;
  display: flex;
  justify-content: center;
  color: #508181;
  text-align: center;
  margin-top: 11px;
  margin-bottom: 20px;
  @media all and (max-width: 640px){
    width: 92%;
  }
`;
const Button = styled(Link)`
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
