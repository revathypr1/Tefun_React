import {React,useState} from "react";
import styled from "styled-components";
import Item from "../../assests/images/640.svg";
import Min from "../../assests/images/spot-min.jpeg";
import arrow from "../../assests/images/arrow.svg";
import play from "../../assests/images/grey-and-play.svg";
import Fun from "../../assests/images/Tefun-logo.svg";
import { Link } from "react-router-dom";
import JoinForm from "../includes/JoinForm";

export default function Spotlight({menuIconClick, setMenuIconClick}) {
  
  
  return (
    <div>
      <MainContainer>
        <Spotlightmain>
          <Leftdiv>
            <Piccontainer>
              <Tefun src={Fun} alt="image" />
            </Piccontainer>
            <H2>Technology Fundamental Program</H2>
            <H3>
              കേരളത്തിലെ <Span>20 ലക്ഷം</Span> കുട്ടികൾക്ക് E-സാക്ഷരത
              ഉറപ്പുവരുത്താ
            </H3>
            <P>
              ഇത് Industry 4.0 കാലഘട്ടം, ടെക്ക്‌നോളജിയുടെ പുത്തൻ സാധ്യതകൾ ഇനി
              നമ്മുടെ കുട്ടികൾ അറിയണം. സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ
              തൊട്ടറിയുവാനും, ടെക്ക്-സാക്ഷരത ഉറപ്പുവരുത്തുന്നതിനുമുള്ള
              സൗജന്യാവസരം ഒരുക്കുകയാണ് Talrop.
            </P>
            <Divitem>
              <Imgone src={Item} alt="images" />
            </Divitem>
            <Largediv>
              <Divlist to ="/">
                <Button onClick={() => {
                setMenuIconClick((menuIconClick) => !menuIconClick);
              }}>
                Join for now</Button>
              </Divlist>
              <Divlistone>
                <Divbutton to="/">
                  <Small>
                    Are you a Campus <Span>Register now</Span>{" "}
                  </Small>
                </Divbutton>
              </Divlistone>
            </Largediv>
          </Leftdiv>
          <Rightdiv>
            <Imagediv>
              <Picture src={Min} alt="images" />
            </Imagediv>
            <Pic src={arrow} alt="arrow" />
            <Googlediv>
              <Google src={play} alt="play" />
              <Google className="playstore" src={play} alt="play" />
            </Googlediv>
          </Rightdiv>
        </Spotlightmain>
        <JoinForm  menuIconClick={menuIconClick} setMenuIconClick={setMenuIconClick}/>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  margin: 0px auto 0px;
  padding-bottom: 80px;
  position: relative;
  margin-top: 50px;

  @media all and (max-width: 420px){
    margin-top: -9px;
  }
`;
const Spotlightmain = styled.div`
  width: 90%;
  margin: 0px auto;
  border-radius: 35px;
  overflow: hidden;
  background-color: rgb(243, 249, 235);
  background-image: url;
  background-position: left 10% top 0px;
  background-repeat: no-repeat;
  background-size: 1000px;
  padding: 5% 50px;
  display: flex;
  justify-content: space-between;
  margin-left: 5%;

  @media all and (max-width:1280px){
    width:80%;
  }
  @media all and (max-width:980px){
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media all and (max-width:768px){
    width:95%;
    margin: 0 auto;
  }
  @media all and (max-width:640px){
    width:100%;
  }
`;
const Leftdiv = styled.div`
  margin-bottom: 20px;
  width: 48%;
`;
const Piccontainer = styled.div`
  width: 43%;
`;
const Tefun = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 10px;
`;
const H2 = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;

  @media all and (max-width:980px){
    width: 141%;
    font-size: 21px;
  }
  @media all and (max-width:640px){
  width: 190%;
    font-size: 19px;
  }
`;
const H3 = styled.h3`
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 30px;
  width: 99%;
  margin-bottom: 30px;

  @media all and (max-width:980px){
    width: 193%;
    font-size: 31px;
  }
  @media all and (max-width: 769px){

  width: 153%;
    font-size: 26px;
  }
  @media all and (max-width: 640px){
    width: 215%;
    font-size: 23px;
  }
 
`;
const Span = styled.span`
  color: rgb(15, 167, 111);
  font-weight:700;
`;

const P = styled.p`
  font-size: 15px;
  color: rgb(84, 84, 84);
  width: 90%;
  line-height: 1.3em;
  margin-bottom: 40px;

  @media all and (max-width:980px){
    width: 166%;
  }
  @media all and (max-width:640px){
    width: 238%;
  }
`;

const Divitem = styled.div`
  margin-bottom: 25px;
  width: 80%;
  align-items: center;

  @media all and (max-width:980px){
    width: 100%;
  }
`;

const Imgone = styled.img`
  display: block;
  width: 100%;
`;
const Largediv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media all and (max-width:640px){
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    margin-left: 207px;
  }

`;
const Divlist = styled(Link)``;
const Button = styled.button`
  cursor: pointer;
  margin-right: 30px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  width: 208px;
  height: 59px;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s ease 0s;
  background-size: 200%;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );


  @media all and (max-width:640px){
   margin-bottom: 30px;
  }
  @media all and (max-width:420px){
    width: 197px;
margin-right: 134px;
  }
  @media all and (max-width: 360px){
    width: 188px;
  }
  
`;
// const Buttonone=styled.button`
// padding:3px;`;
// ;
const Divbutton = styled(Link)`
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-radius: 10px;
  color: rgb(32, 156, 165);
  text-align: center;
`;
const Small = styled.small`
  color: rgb(32, 156, 165);
  /* margin-top: 14px; */
  width: 118px;
  margin: 0 auto;
  @media all and (max-width: 640px){
    width: 166px;
  }
`;

const Divlistone = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  padding: 3px;
  width: 216px;
  cursor: pointer;

  @media all and (max-width:640px){
  margin-left: 0;
  }
  @media all and (max-width:420px){
  margin-right: 112px;
  }
  @media all and (max-width:360px){
  margin-right: 174px;
  }
`;
const P1 = styled.p`
  color: rgb(32, 156, 165);
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
`;
const Rightdiv = styled.div`
  width: 100%;
  position: relative;

  @media all and (max-width:980px){
    margin-top: 30px;
  }
`;
const Imagediv = styled.div`
  transform: rotate(4deg);
  overflow: hidden;
`;
const Picture = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
`;

const Pic = styled.img`
  width: 33%;
  position: absolute;
  z-index: 1;
  top: 272px;
  left: -113px;

  @media all and (max-width:1280px){
    top: 207px;
    left: -71px;
  }
  @media all and (max-width:1280px){
    display: none;
  }
`;
const Googlediv = styled.div`
  width: 62%;
  margin: 0 auto;
  margin-top: -1%;
  margin-left: 180px;
  @media all and (max-width:420px){
    width: 86%;
    margin-left:105px;
  }

`;
const Google = styled.img`
  width: 41%;
  margin-top: 36px;
  cursor: pointer;
`;
