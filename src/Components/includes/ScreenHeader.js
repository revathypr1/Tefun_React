import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assests/images/Logo.svg";
import Layer from "../../assests/images/Layer 2.svg";
import drop from "../../assests/images/logarrow.svg";
import LogoutForm from "./LogoutForm";

import "../../App.css";
import {
  Link,
  Outlet,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

export default function ScreenHeader()  {
  const [menuIconClick,setMenuIconClick]=useState(false)
  console.log(menuIconClick);
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
          <Divone to="/">
            <Img src={Layer} alt="icon" />
          </Divone>
          <DivTwo>
            
              <Small>R</Small>

              <P>Revathy  </P>
         
            <DivArrow>
              <Arrow  onClick={()=>{
                setMenuIconClick((menuIconClick)=>! menuIconClick)}}
              src={drop} alt="images" />
            </DivArrow>
          </DivTwo>
        </Rightdiv>
       <LogoutForm menuIconClick={menuIconClick} />
      </Divcontainer>

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
  top: 0;
  z-index: 5;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  padding: 2px;
  height: 100px;
`;
const Leftdiv = styled.div`
  margin-left: 30px;
`;
const H1 = styled.h1`
  @media all and (max-width: 360px) {
    width: 50%;
  }
  @media all and (max-width: 640px){
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
  margin-left: 60%;
@media all and (max-width: 980px){
  margin-left: 44%;
}
@media all and (max-width: 640px){
margin-left: 19%;
}
@media all and (max-width: 420px){
margin-left: -6%;
}
`;
const Divone = styled.div`
 width: 21%;
margin: 5px auto;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  border-right: 1px solid #000;
  height: 20px;
`;
const DivTwo = styled.div`
  display: flex;
  /* margin-bottom: -17px;
margin-left: 20px; */
`;
const Divname = styled.div``;
const Small = styled.p`
  background: red;
  color: #fff;
  font-size: 18px;

  border-radius: 50%;
  width: 38px;
height: 29px;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  margin-right: 10px;
  font-weight:700;
`;
const P = styled.p``;
const DivArrow = styled.div`

  width: 11%;
  margin: 9px 7px auto;
`;
const Arrow = styled.img`
  width: 100%;
  display: block;
`;
