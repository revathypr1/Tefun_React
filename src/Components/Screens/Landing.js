import React from "react";
import styled from "styled-components";
import channel from "../../assests/images/brands-360.svg";
import Tefun from "../../assests/images/Tefun-logo.svg";
import kerala from "../../assests/images/keralathile.svg";
import lakhs from "../../assests/images/lakhs.svg";
import students from "../../assests/images/kuttikalkk.svg";
import sv from "../../assests/images/sawjanyam.svg";
import tech from "../../assests/images/technology.svg";
import sd from "../../assests/images/Group 288.svg";
import AA from "../../assests/images/AAR.svg";
import Techies from "../../assests/images/tech.svg";
import SS from "../../assests/images/vvg.svg";
import UU from "../../assests/images/uu.svg";
import Icon from "../../assests/images/Icon feather-arrow-right.svg";
import Main from "../../assests/images/main-banner.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <MainContainer>
      <MainDiv>
        <DivItem>
          <Img src={channel} alt="images" />
        </DivItem>
        <H1>Present</H1>
        <DivImage>
          <Pic src={Tefun} alt="images" />
        </DivImage>
        <H2>Technology Funtamental program</H2>
        <DivPicture>
          <DivContainer>
            <ImgOne src={kerala} alt="images" />
            <ImgTwo src={lakhs} alt="images" />
            <ImgThree src={students} alt="images" />
            <ImgFour src={sv} alt="images" />
            <ImgFive src={tech} alt="images" />
            <ImgSix src={sd} alt="images" />
            <ImgSeven src={AA} alt="images" />
            <ImgEight src={Techies} alt="images" />
            <Imgnine src={SS} alt="images" />
            <ImgTen src={UU} alt="images" />
          </DivContainer>
        </DivPicture>
        <DivButton link to ="/chooseprofile">
          <Button >Start Learning</Button>
          <ArrowDiv>
            <Gallery src={Icon} alt="images" />
          </ArrowDiv>
        </DivButton>
      </MainDiv>
      </MainContainer>
    </div>
  );
}
const MainContainer=styled.div`
padding-top:120px;;
`;
const MainDiv = styled.div`
  background-image: url(${Main});
  background-position: 200%;
  background-size: cover;
`;
const DivItem = styled.div`
  text-align: center;
  padding-top: 27px;
`;
const Img = styled.img`
  margin: 0 auto;
`;
const H1 = styled.h1`
  font-size: 17px;
  text-align: center;
  color: #fff;
  margin-top: 13px;
`;
const DivImage = styled.div`
  width: 20%;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
`;
const Pic = styled.img`
  width: 100%;
  display: block;
`;
const H2 = styled.h2`
  font-size: 19px;
  color: #ffff;
  text-align: center;
  margin-top: 12px;
`;
const DivPicture = styled.div`
  width: 100%;
`;
const DivContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 63%;
  margin: 0 auto; ;

  @media all and (max-width: 1081px){
    width: 70%;
  }
  @media all and (max-width: 980px){
    width: 89%;
  }
  @media all and (max-width: 768px){
    width: 97%;
  }
  @media all and (max-width: 640px){
   width: 425px;
  }
  @media all and (max-width: 420px){
   width: 371px;
  }
  @media all and (max-width: 360px){
   width: 328px;
  }
`;
const ImgOne = styled.img`
  height: 70px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:57px;
  }
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:30px;
  }
`;
const ImgTwo = styled.img`
  height: 70px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:57px;
  }
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:30px;
  }
`;
const ImgThree = styled.img`
  height: 70px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:57px;
  }
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:30px;
  }
`;
const ImgFour = styled.img`
  height: 62px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:57px;
  }
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:30px;
  }
`;
const ImgFive = styled.img`
  height: 62px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:57px;
  }
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:30px;
  }
`;
const ImgSix = styled.img`
  height: 48px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:39px;
  }
  @media all and (max-width: 640px){
    height:36px;
  }
  @media all and (max-width: 420px){
    height:27px;
  }
  @media all and (max-width: 360px){
    height:23px;
  }
`;
const ImgSeven = styled.img`
  height: 62px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:58px;
  }
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:30px;
  }
`;
const ImgEight = styled.img`
  height: 40px;
  margin-right: 12px;
  @media all and (max-width: 768px){
    height:39px;
  }
  @media all and (max-width: 640px){
    height:36px;
  }
  @media all and (max-width: 420px){
    height:29px;
  }
  @media all and (max-width: 360px){
    height:24px;
  }
`;
const Imgnine = styled.img`
  height: 53px;
  margin-right: 12px;
  @media all and (max-width: 640px){
    height:44px;
  }
  @media all and (max-width: 420px){
    height:37px;
  }
  @media all and (max-width: 360px){
    height:28px;
  }
`;
const ImgTen = styled.img`
  height: 40px;
  margin-right: 12px;
  @media all and (max-width: 640px){
    height:33px;
  }
  @media all and (max-width: 420px){
    height:29px;
  }
  @media all and (max-width: 360px){
    height:20px;
  }
`;
const DivButton = styled(Link)`
  display: flex;
  padding-top: 22px;
`;
const Button = styled.button`
  color: #fff;

  align-items: center;
  margin: 0 auto;
  background-size: 200%;
  border-radius: 35%;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 18px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  background-size: 200%;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  @media all and (max-width: 420px){
    font-size: 15px;
  }
`;
const ArrowDiv = styled.div`
  width: 1%;
  @media all and (max-width: 1280px){
    width: 2%;
  }
  @media all and (max-width: 980px){
    display: none;
  }
`;
const Gallery = styled.img`
  width: 100%;
  display: block;
  margin-left: -579px;
  margin-top: 19px;
  @media all and (max-width: 1280px){
    margin-left: -468px;
margin-top: 16px;
  }
  @media all and (max-width: 1080px){
    margin-left: -421px;
    margin-top: 16px;
}
`;
