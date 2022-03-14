import React from "react";
import styled from "styled-components";
import GG from "../../../assests/images/Groupbg.svg";
import LL from "../../../assests/images/greenline.svg";
import bg from "../../../assests/images/bannerbg.svg";
import { Link } from "react-router-dom";

export default function () {
  return (
   
    <MainHurry>
       <Trans></Trans>
      <HurryDiv>
        <LeftDiv>
          <ImageContainer>
            <Img src={GG} alt="images" />
          </ImageContainer>
        </LeftDiv>
        <RightDiv>
          <H1>Hurry !</H1>
          <P>
            You Have successfully completed tefun course we will notify your
            examination data soon
          </P>
          <DivButton link to ="/Locks">Go To dashboards</DivButton>
        </RightDiv>
        <DivBack>
          <ImgLine src={LL} alt="images" />
        </DivBack>
      </HurryDiv>
      </MainHurry>
  );
}
const Trans=styled.div`
  background: rgba(0,0,0,0.6);
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
backdrop-filter: blur(2px);

`;
const MainHurry=styled.div`

  position:fixed;
transition: 0.3s;

width:100%;
height: 100vh;
z-index: 1000;
left: 0;
top: 0;

display: flex;
justify-content: center;
align-items: center;
padding: 10% 0;

/* @media all and (max-width:640px){
  flex-wrap:wrap;
} */
`;
const HurryDiv = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin: 200px auto;

  position: relative;
  margin: 200px auto;
  position: relative;
  width: 50%;
  background: url(${bg});
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  @media all and (max-width: 768px){
    width: 63%;
  }
  @media all and (max-width:640px){
  flex-wrap:wrap;
}

`;
const LeftDiv = styled.div`
  width: 50%;
  padding-bottom: 20px;
  @media all and (max-width: 640px){
    width: 87%;;
  }
`;
const ImageContainer = styled.div`
  width: 108%;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const RightDiv = styled.div`
  width: 50%;
  padding-bottom: 20px;
  @media all and (max-width:640px){
    width: 100%;
  }
`;
const H1 = styled.h1`
  margin-top: 44px;
  font-weight: 700;
  color: rgb(15, 167, 111);
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;
const P = styled.p`
 font-size: 12px;
    text-align: center;
    color: #000;
    margin-bottom: 20px;
    width: 69%;
    margin: 0 auto;
`;
const DivButton = styled(Link)`
  display: flex;
  justify-content: center;
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
  border-radius: 8px;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 18px;

 @media all and (max-width: 360px){
   width: 177px;
 }
`;
const DivBack = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 5px;
`;
const ImgLine = styled.img`
  width: 100%;
  display: block;

  bottom: 0;
`;
