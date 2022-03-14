import React from 'react'
import styled from 'styled-components'
import Metal from "../../assests/images/medal+.svg"
import Certify from "../../assests/images/certificate.png"
import arrow from "../../assests/images/arrow.svg"
export default function Certificate() {
  return (
    <div>
        <MainDiv>
            <DivOne>
                <H3>Ceritification</H3>
                <P>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</P>
                <Images src={Metal} alt="images"/>
            </DivOne>
            <DivTwo>
                <ImageOne src={Certify} alt="imges"/>
                <ImageTwo src={arrow} alt="images"/>

            </DivTwo>
        </MainDiv>
    </div>
  )
}
const MainDiv=styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    border-radius: 20px;
    min-height: 300px;
    margin-bottom: 20px;

`;
const DivOne=styled.div`
    width: 55%;
    padding-left: 50px;
    `;
const H3=styled.h3`
  color: rgb(255, 255, 255);
  font-size: 35px;
`;
const P=styled.p`
  width: 80%;
  color: rgb(255, 255, 255);
  font-size: 22px;
`;
const Images=styled.img`
  position: absolute;
  display: block;
  width: 3%;
  top: 0px;`;
const DivTwo=styled.div`
  width:45;`;
const ImageOne=styled.img`
    position: absolute;
    display: block;
    width: 550px;
    bottom: -63px;
    right: 7%;`;
const ImageTwo=styled.img`
    display: block;
    position: absolute;
    
    bottom: -73px;
    right: 543px;
    width: 11%;
    `;
