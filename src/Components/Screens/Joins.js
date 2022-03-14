import React from "react";
import styled from "styled-components";
import phn from "../../assests/images/phone-g-call.svg";
import scissor from "../../assests/images/scissors.svg";
import cert from "../../assests/images/certificate-r.svg";
import device from "../../assests/images/devices.svg";
import tefun from "../../assests/images/certificate.svg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <JoinDiv>
        <H1>How</H1>
        <H2>Schools Can Join </H2>
        <DivItem>
          <DivList>
            <DivOne>
              <DivNum>01</DivNum>
            </DivOne>
            <Span>
              <Image src={phn} alt="imges" />
            </Span>
            <P>
              Talrop ടീമിന്റെ 8589998066 എന്ന ഫോൺ നമ്പറിൽ ബന്ധപ്പെടുക
              ഉദ്ഘാടനത്തിനാവശ്യമായ അടങ്ങുന്ന ഡിജിറ്റൽ സംവിധ
            </P>
          </DivList>
          <DivList>
            <DivTwo>
              <DivNum>02</DivNum>
            </DivTwo>
            <SpanOne>
              <Image src={scissor} alt="imges" />
            </SpanOne>
            <P>
              ഉദ്ഘാടനത്തിനാവശ്യമായ സ്കൂൾ ലോഗോ അടങ്ങുന്ന ഡിജിറ്റൽ സംവിധാനം Talrop
              ഒരുക്കുന്നു
            </P>
          </DivList>
          <DivList>
            <DivThree>
              <DivNum>03</DivNum>
            </DivThree>
            <SpanTwo>
              <Image src={cert} alt="imges" />
            </SpanTwo>
            <P>
              {" "}
              Talrop ഉം 24 ന്യൂസും ചേർന്നൊരുക്കുന്ന പ്രോഗ്രാം കാപ്പീഷൻ
              സർട്ടിഫിക്കറ്റ് സ്കൂൾ മുഖാന്തരം നൽകുന്നു
            </P>
          </DivList>
          <DivList>
            <DivFour>
              <DivNum>04</DivNum>
            </DivFour>
            <SpanThree>
              <Image src={device} alt="imges" />
            </SpanThree>
            <P>
              Talrop ടീമിന്റെ 8589998066 എന്ന ഫോൺ നമ്പറിൽ ബന്ധപ്പെടുക
              ഉദ്ഘാടനത്തിനാവശ്യമായ അടങ്ങുന്ന ഡിജിറ്റൽ സംവിധ
            </P>
          </DivList>
          <DivList>
            <DivFive>
              <DivNum>05</DivNum>
            </DivFive>
            <SpanFour>
              <Image src={tefun} alt="imges" />
            </SpanFour>
            <P>
              ഉദ്ഘാടനത്തിനാവശ്യമായ സ്കൂൾ ലോഗോ അടങ്ങുന്ന ഡിജിറ്റൽ സംവിധാനം Talrop
              ഒരുക്കുന്നു
            </P>
          </DivList>
        </DivItem>
        <Button to="/">Register now</Button>
      </JoinDiv>
    </div>
  );
}
const JoinDiv = styled.div`
  padding: 50px 0;
`;
const H1 = styled.h1`
  color: rgb(15, 167, 111);
  font-size: 45px;
  text-align: center;
`;
const H2 = styled.h2`
  color: #000;
  font-size: 35px;
  text-align: center;
`;
const DivItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0px auto 35px;
  position: relative;
  gap: 30px;
`;
const DivList = styled.div`
  width: 30%;
  position: relative;
  margin-bottom: 30px;
  text-align: center;
  @media all and (max-width: 1080px) {
    width: 33%;
    margin: 0 auto;
  }
  @media all and (max-width: 640px) {
    width: 57%;
  }
`;
const DivOne = styled.div`
  position: relative;
  background: rgb(0, 154, 102);
  width: 142px;
  height: 143px;
  transform: rotate(45deg);
  border-radius: 30px;
  margin: 50px;
  font-size: 40px;
`;
const Span = styled.span`
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 154, 102);
  position: absolute;
  border-radius: 50%;
  width: 68px;
  padding: 2;
  padding: 4%;
  bottom: 138px;
  right: 184px;
  height: 68px;

  @media all and (max-width: 980px) {
    bottom: 182px;
    right: 39px;
  }
  @media all and (max-width: 768px) {
    bottom: 197px;
right: 12px;
  }
  @media all and (max-width: 640px) {
    bottom: 191px;
right: 24px;
  }
  @media all and (max-width: 420px) {
    bottom: 249px;
  right: 2px;
}
@media all and (max-width: 360px){
  bottom: 255px;
right: -12px;
}

  
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const P = styled.p`
  color: grey;
  font-size: 20px;

  @media all and (max-width: 768px) {
    font-size: 19px;
  }
`;

const DivTwo = styled.div`
  position: relative;
  background: rgb(251, 184, 44);
  width: 142px;
  height: 143px;
  transform: rotate(45deg);
  border-radius: 30px;
  margin: 50px;
`;

const DivNum = styled.div`
  position: absolute;
  z-index: 1;
  position: absolute;
  z-index: 1;

  top: -18px;
  width: 49%;
  left: -42px;
  bottom: 167px;
  transform: rotate(317deg);
  position: absolute;
  z-index: 1;
  position: absolute;
  z-index: 1;
  top: 9px;
  width: 67%;
  left: -74px;
  bottom: 167px;
  -webkit-transform: rotate(317deg);

  font-size: 48px;
  color: #eaeaea;

  @media all and (max-width: 980px) {
    bottom: 125px;
    right: 81px;
  }
  @media all and (max-width: 768px) {
    bottom: 227px;
    right: 68px;
  }
`;

const DivThree = styled.div`
  position: relative;
  background: rgb(255, 91, 47);
  width: 142px;
  height: 143px;
  transform: rotate(45deg);
  border-radius: 30px;
  margin: 50px;
`;

const DivFour = styled.div`
  position: relative;
  background: rgb(178, 87, 255);
  width: 142px;
  height: 143px;
  transform: rotate(45deg);
  border-radius: 30px;
  margin: 50px;
`;

const DivFive = styled.div`
  position: relative;
  background: rgb(76, 154, 254);
  width: 142px;
  height: 143px;
  transform: rotate(45deg);
  border-radius: 30px;
  margin: 50px;
`;
const Button = styled(Link)`
  cursor: pointer;
  margin: 0px auto;
  color: rgb(255, 255, 255);
  font-size: 18px;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
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

const SpanOne = styled.span`
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(251, 184, 44);
  position: absolute;
  border-radius: 50%;
  width: 68px;
  padding: 2;
  padding: 4%;
  bottom: 114px;
  right: 184px;
  height: 68px;
  @media all and (max-width: 980px) {
    bottom: 122px;
  right: 38px;

  }
  @media all and (max-width: 768px) {
    bottom: 161px;
right: 14px;

    @media all and (max-width: 640px) {
      bottom: 131px;
    right: 19px;
    }
   

    
    @media all and (max-width: 420px) {
      bottom: 171px;
right: 2px;
    }
    
    @media all and (max-width: 360px) {
    bottom: 171px;
  right: -18px;
}
`;

const SpanTwo = styled.span`
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 91, 47);
  position: absolute;
  border-radius: 50%;
  width: 68px;
  padding: 2;
  padding: 4%;
  bottom: 114px;
  right: 184px;
  height: 68px;

  @media all and (max-width: 980px) {
    bottom: 156px;
right: 33px;
  }
  @media all and (max-width: 768px) {
    bottom: 164px;
  right: 7px;
}
  
  @media all and (max-width: 640px) {
    bottom: 156px;
right: 32px;
  }
  
  
  
  @media all and (max-width: 420px){
    bottom: 162px;
right: -3px;
    
}
  @media all and (max-width: 360px) {
    bottom: 183px;
right: -13px;
  }
`;
const SpanThree = styled.span`
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(178, 87, 255);
  position: absolute;
  border-radius: 50%;
  width: 68px;
  padding: 2;
  padding: 4%;
  bottom: 136px;
  right: 184px;
  height: 68px;

  @media all and (max-width: 980px) {
    bottom: 184px;
right: 37px;
  }
  @media all and (max-width: 768px) {
    bottom: 196px;
right: 13px;
  }
  @media all and (max-width: 640px) {
    bottom: 188px;
right: 13px;
  }
  @media all and (max-width: 420px) {
    bottom: 260px;
right: 13px;
   
  }
@media all and (max-width: 360px){
  bottom: 257px;
  right: -8px;
}
 
`;
const SpanFour = styled.span`
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(76, 154, 254);
  position: absolute;
  border-radius: 50%;
  width: 68px;
  padding: 2;
  padding: 4%;
  bottom: 114px;
  right: 184px;
  height: 68px;
  @media all and (max-width: 980px) {
    bottom: 131px;
  right: 37px;

  }
  @media all and (max-width: 768px) {
    bottom: 169px;
right: 14px;
  }
  @media all and (max-width: 640px) {
    bottom: 134px;
  right: 24px;

  }
  @media all and (max-width: 420px) {
    bottom: 168px;
right: 14px;
  }
@media all and (max-width: 360px){
  right: -17px;
  bottom: 174px;
}
 

`;
