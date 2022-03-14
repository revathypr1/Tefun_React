import React from "react";
import styled from "styled-components";
import Metal from "../../assests/images/medal+.svg";
import Certify from "../../assests/images/certificate.png";
import arrow from "../../assests/images/arrow.svg";
export default function Certificate() {
  return (
    <div>
      <MainDiv>
        <DivOne>
          <H3>Ceritification</H3>
          <P>
            പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു
            കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.
          </P>
          <Images src={Metal} alt="images" />
        </DivOne>
        <DivTwo>
          <ImageOne src={Certify} alt="imges" />
          <ImageTwo src={arrow} alt="images" />
        </DivTwo>
      </MainDiv>
    </div>
  );
}
const MainDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 100%
  );
  border-radius: 20px;
  min-height: 300px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media all and (max-width: 1280px) {
    width: 87%;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media all and (max-width: 640px) {
    width: 100%;
  }
  @media all and (max-width: 320px) {
    flex-wrap: wrap;
  }
  @media all and (max-width: 360px) {
    width: 88%;
  }
`;
const DivOne = styled.div`
  width: 55%;
  padding-left: 50px;
  @media all and (max-width: 640px) {
    width: 89%;
    padding-left: 6px;
  }
`;
const H3 = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 35px;
  @media all and (max-width: 640px) {
    font-size: 29px;
  }
`;
const P = styled.p`
  width: 80%;
  color: rgb(255, 255, 255);
  font-size: 22px;
  @media all and (max-width: 980px) {
    width: 72%;
    color: rgb(255, 255, 255);
    font-size: 15px;
  }
  @media all and (max-width: 360px) {
    width: 171%;
  }
`;
const Images = styled.img`
  position: absolute;
  display: block;
  width: 3%;
  top: 0px;
`;
const DivTwo = styled.div`
  width: 45;
`;
const ImageOne = styled.img`
    position: absolute;
    display: block;
    width: 550px;
    bottom: -63px;
    right: 7%;
    @media all and (max-width: 980px){
      width: 424px;
    bottom: -9px;
    right: -2%;
    -webkit-transform: rotate(3deg);
   
    transform: rotate(4deg);
    }
    @media all and (max-width: 640px){
    width: 261px;
    bottom: 71px;
    right: -2%;
    transform: rotate(5deg);
    }
    @media all and (max-width: 420px){
      width: 165px;
    }
    @media all and (max-width: 360px){
      left: 110px;
    top: 82%;
    position: absolute;
    width: 150px;
    height: 110px;
    }
    @media all and (max-width: 360px){
    left: 80px;
top: 82%;
position: absolute;
width: 165px;
    }
    `;
const ImageTwo = styled.img`
  display: block;
  position: absolute;

  bottom: -73px;
  right: 543px;
  width: 11%;
  @media all and (max-width: 980px) {
    bottom: -94px;
    right: 206px;
    width: 32%;
  }
  @media all and (max-width: 640px) {
    display: none;
  }
`;
