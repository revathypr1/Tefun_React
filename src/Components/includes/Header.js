import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assests/images/Logo.svg";
import Menu from "../../assests/images/menu-icon.svg";
import Bg from "../../assests/images/decorator.svg";
import flg from "../../assests/images/india-flag.jpeg";
import arrow from "../../assests/images/down-arrow.svg";
import phone from "../../assests/images/phone.svg";
import cross from "../../assests/images/close.svg";
import "../../App.css";
import {
    Link,
    Outlet,
    NavLink,
    Routes,
    Route,
    useNavigate,
  } from "react-router-dom";
import JoinForm from "./JoinForm";

export default function Header({menuIconClick, setMenuIconClick}) {
  

  return (
    <>
      <Divcontainer>
        <Leftdiv>
          <H1>
            <A to="/">
              <Image src={Logo} alt="logo" />
            </A>
          </H1>
        </Leftdiv>
        <Rightdiv>
          <Divone>
            <Button
              onClick={() => {
                setMenuIconClick(true);
              }}
            >
              Join now
            </Button>
          </Divone>
          <Divtwo to="/">
            <Img  onClick={( )=>{
              setMenuIconClick(true);
            }}src={Menu} alt="icon" />
          </Divtwo>
        </Rightdiv>
      </Divcontainer>
      <JoinForm menuIconClick={menuIconClick} setMenuIconClick={setMenuIconClick} />
      {/* <DivNow className={menuIconClick ? "active" : ""}>
        <LoginDiv>
          <H2>Login to your account</H2>
          <H3>Enter your registered phone number</H3>
          <DivList>
            <DivTotal>
              <DivItem>
                <ImageOne src={flg} lt="imge" />
              </DivItem>
              <DivItemone>
                <Pic src={arrow} lt="imge" />
              </DivItemone>
            </DivTotal>

            <DivTwo>
              <PicOne src={phone} lt="imges" />
              <Input type="text" placeholder="Enter your phone number" />
            </DivTwo>
          </DivList>
          <ButtonDiv>Next</ButtonDiv>
          <DivContiner>
            <POne>
              New to Yiaai?<Span>Create an account</Span>
            </POne>
          </DivContiner>
          <P2>Terms of service</P2>
          <Close
            onClick={() => {
              setMenuIconClick((menuIconClick) => !menuIconClick);
            }}
          >
            <PicThree src={cross} alt="images" />
          </Close>
        </LoginDiv>
      </DivNow> */}
      <Outlet />
    </>
  );
}
const Divcontainer = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top:0;
  z-index: 5;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  padding: 2px;
  height: 100px;

 
`;
const Leftdiv = styled.div`
  margin-left:30px;
`;
const H1 = styled.h1`


@media all and (max-width:360px){
      width: 50%;
    }

`;
const A = styled(Link)``;
const Image = styled.img`
  display: block;
  width: 100%;
  /* @media all and (max-width: 1280px){
  margin-left: 19px;
    display: block;
    width: 64%;
  } */
`;
const Rightdiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right:35px;
`;
const Divone = styled.div`
`;
const Button = styled.button`
  border-radius: 35%;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  background-size: 200%;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  @media all and (max-width:360px){
  font-size: 13px;
  padding: 11px 23px;
  }
`;
const Divtwo = styled(Link)`
  margin-left: 19px;
  /* margin-bottom: 5px; */
 

  width: 28px;
  @media all and (max-width: 1280px){
    display: none;
  }
`;


const Img = styled.img`
  display: block;
  width: 100%;
  margin-top: -34px;
  @media all and (max-width: 1280){
    display: none;
  }
`;
const DivNow = styled.div`
  background: #fff;

  position: fixed;
  right: -100%;
  z-index: 1000;
  /* padding: 2px 627px; */
  width: 50%;
  height: 100vh;
  transition: all 1 ease;
  &.active {
    right: 0px;
    top: 0px;
    transition: all 1 ease;
  }
`;
const LoginDiv = styled.div`
  background-image: url(${Bg});
  background-repeat:no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow-y: scroll;
  z-index: 500;
  /* background: rgb(255, 255, 255); */
  width: 600px;
  padding: 0px 60px;
`;
const H2 = styled.h2`
  font-size: 25px;
  line-height: 1.4em;
  margin-bottom: 64px;
  margin-top: 44%;
  font-weight: 600;
`;
const H3 = styled.h3`
  margin-top: -84px;

  font-size: 14px;
  font-weight: 600;
`;
const DivList = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;
const DivTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 44px;
`;
const DivItem = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  overflow: hidden;

  justify-content: center;
`;
const ImageOne = styled.img`
  width: 100%;
  display: block;
`;
const DivItemone = styled.div`
  width: 18px;
  margin-left: 13px;
  margin-top: 7px;
`;
const Pic = styled.img`
  width: 100%;
  display: block;
`;
const DivTwo = styled.div`
  border-color: rgb(47, 51, 55);

  border: 1px solid #000;
  border-radius: 9px;
  padding: 9px 44px;
  display: flex;
  align-items: center;

`;

const PicOne = styled.img`
  margin-right: 12px;
`;
const Input = styled.input`
  width: 81%;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 17px;
  padding-left: 5px;
  caret-color: rgb(92, 198, 106);
`;

const ButtonDiv = styled.button`
  border-radius: 35%;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  background-size: 200%;
  background: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
`;
const DivContiner = styled.div`
  margin: 0 auto;
`;
const POne = styled.p``;
const Span = styled.span`
  color: green;
  text-align: center;
`;

const P2 = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  margin-top: -20px;
  font-weight: 400;
`;
const Close = styled.div`
  width: 3%;
  left: 7%;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  left: -3%;

  &.active {
    right: 0px;
    top: 0px;
  }
`;
const PicThree = styled.img`
  width: 100%;
  display: block;
`;
