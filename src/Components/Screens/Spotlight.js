import React from "react";
import styled from "styled-components";
import Item from "../../assests/images/640.svg";
import Min from "../../assests/images/spot-min.jpeg";
import arrow from "../../assests/images/arrow.svg";
import play from "../../assests/images/grey-and-play.svg";
import Fun from "../../assests/images/Tefun-logo.svg";

export default function Spotlight() {
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
              കേരളത്തിലെ <Span>20 ലക്ഷം</Span>  കുട്ടികൾക്ക് E-സാക്ഷരത ഉറപ്പുവരുത്താ
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
              <Divlist>
                <Button className="btn">join for now</Button>
              </Divlist>
              <Divlistone>
                <Divbutton>
                  <Small>Are you a school</Small>
                  Enquire now
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
              <Google src={play} alt="play" />
            </Googlediv>
          </Rightdiv>
        </Spotlightmain>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  margin: 0px auto 0px;
  padding-bottom: 80px;
  position: relative;
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
`;
const Leftdiv = styled.div`
  margin-bottom: 20px;
  width:48%;
`;
const Piccontainer = styled.div``;
const Tefun = styled.img``;
const H2 = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;
const H3 = styled.h3`
font-size: 33px;
    font-weight: 700;
    margin-bottom: 30px;
  
  margin-bottom: 30px;
`;
const Span = styled.span`
  color: rgb(15, 167, 111);
`;

const P = styled.p`
  font-size: 15px;
  color: rgb(84, 84, 84);
  width: 90%;
  line-height: 1.3em;
  margin-bottom: 40px;
`;

const Divitem = styled.div`
  margin-bottom: 25px;
  width: 80%;
  align-items: center;
`;

const Imgone = styled.img`
  display: block;
  width: 100%;
`;
const Largediv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Divlist = styled.div``;
const Button = styled.button`
  cursor: pointer;
  margin-right: 30px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  width: 238px;
  height: 70px;
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
`;
// const Buttonone=styled.button`
// padding:3px;`;
// ;
const Divbutton = styled.div`
  border: 2px solid transparent;
  border-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  border-image-slice: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  color: rgb(32, 156, 165);
  padding: 2px;
  width: 242px;
  height: 60px;
  text-align: center;
`;
const Small = styled.small`
  color: rgb(32, 156, 165);
  margin-top: 14px;
`;

const Divlistone = styled.div`
  border-radius: 10px;
`;
const P1 = styled.p`
  color: rgb(32, 156, 165);
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
`;
const Rightdiv = styled.div`
width:100%;
position:relative;`;
const Imagediv = styled.div`
 transform: rotate(2deg);
 overflow: hidden;
`;
const Picture = styled.img`
width:100%;
display:block;
border-radius:10px`;

const Pic = styled.img`
  width:38%;
  position: absolute;
  z-index: 1;
  top: 250px;
    left: -113px;
    `;
const Googlediv = styled.div`
  width: 62%;
    margin: 0 auto;
    margin-top: 6%;
`;
const Google = styled.img`
width:33%;`;
