import React from "react";
import styled from "styled-components";
import Time from "./Time";
import "../../App.css";
import ScreenHeader from "../includes/ScreenHeader";
import { Link } from "react-router-dom";

export default function Tefunexam() {
  return (
    <div>
      <Time />
      <MainDiv>
        <Left>
          <Div>
            <SpanNum></SpanNum>
            <Small>Start</Small>
          </Div>

          <DivOne>
            <SpanOne>01</SpanOne>
          </DivOne>
          <DivTwo>
            <SpanTwo>02</SpanTwo>
          </DivTwo>
        </Left>
        <Right>
          <Heading>
            <Word>Examination </Word> Instructions.
          </Heading>
          <DivList>
            <ItemLeft>
              <Circle></Circle>
            </ItemLeft>
            <Itemright>
              <Paragraph>60 മിനിറ്റ് ആയിരിക്കും എക്സാം ഉണ്ടാകുക</Paragraph>
            </Itemright>
          </DivList>
          <DivList>
            <ItemLeft>
              <Circle></Circle>
            </ItemLeft>
            <Itemright>
              <Paragraph>എല്ലാ ചോദ്യത്തിനും തെയ്യം എഴുതണം</Paragraph>
            </Itemright>
          </DivList>

          <DivList>
            <ItemLeft>
              <Circle></Circle>
            </ItemLeft>
            <Itemright>
              <Paragraph>എല്ലാ ചോദ്യത്തിനും തെയ്യം എഴുതണം</Paragraph>
            </Itemright>
          </DivList>

          <DivList>
            <ItemLeft>
              <Circle></Circle>
            </ItemLeft>
            <Itemright>
              <Paragraph>
                ഓരോ ശരിയുത്തരത്തിനും ഓരോ വിക്കറ്റ് വീതം ലഭിക്കും
              </Paragraph>
            </Itemright>
          </DivList>

          <DivList>
            <ItemLeft>
              <Circle></Circle>
            </ItemLeft>
            <Itemright>
              <Paragraph>
                കോഴ്സ് സർട്ടിഫിക്കറ്റ് നിങ്ങളുടെ സ്കൂളിലേക്ക് എത്തിക്കുന്നത്
              </Paragraph>
            </Itemright>
          </DivList>
          <DivList>
            <ItemLeft>
              <Circle></Circle>
            </ItemLeft>
            <Itemright>
              <Paragraph>
                ഓരോ ശരിയുത്തരത്തിനും ഓരോ വിക്കറ്റ് വീതം ലഭിക്കും
              </Paragraph>
            </Itemright>
          </DivList>
          <Button link to ="/exam-start">Start Exam</Button>
        </Right>
      </MainDiv>
    </div>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10% 0 0 0;

  @media all and (max-width: 640px) {
    flex-direction: column;
    padding: -36% 0 0 0;
    margin-top: -103px;
  }

  @media all and (max-width: 420px) {
    margin-top: -103px;
  }
`;
const Left = styled.div`
  width: 40%;
  display: block;
  flex-wrap: wrap;
  padding: 58px 107px;

  @media all and (max-width: 640px) {
 

    display: inline-block;
    transform: rotate(269deg);
    margin: 0 auto;
    padding: 1px 16px;
   
  }
`;
const Div = styled.div`
  display: flex;
  position: relative;

  @media all and (max-width: 360px) {
    padding-top: 23px;
  }
`;
const SpanNum = styled.span`
  width: 25px;
  height: 25px;
  background: rgb(15, 167, 111);
  border-radius: 50%;
  margin-right: 10px;
  /* &::after{
        content: "";
    position: absolute;
    z-index: -1;
    width: 47px;
    height: 267%;
    border-left: 2px dashed #5aa870;
    left: -31%;
    top: 72px;
    bottom: 0;
    margin: auto 0;
    } */
  @media all and (max-width: 640px) {
    width: 16px;
    height: 16px;
  }
`;
const Small = styled.div`
  color: rgb(15, 167, 111);
  font-size: 20px;
  font-weight: 700;

  
  /* &::after{
        content: "";
    position: absolute;
    z-index: -1;
    width: 47px;
    height: 267%;
    border-left: 2px dashed #5aa870;
    left: -31%;
    top: 72px;
    bottom: 0;
    margin: auto 0;
    } */
  @media all and (max-width: 420px) {
    transform: rotate(90deg);
    left: -38px;
    bottom: 47px;
  }
`;
const DivOne = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 47px;
    height: 97%;
    border-left: 2px dashed #5aa870;
    left: 4%;
    top: -17px;
    bottom: 0;
  }

`;
const SpanOne = styled.span`
  margin-top: 53px;
  display: inline-block;
  font-size: 17px;
  color: #d2efe8;
  margin-left: 6px;
  &::after {
      position: absolute;
    content: "";
    z-index: -1;
    width: 47px;
    height: 93%;
    border-left: 2px dashed #5aa870;
    left: 3%;
    top: 130px;
    bottom: 0;
    margin: auto 0;
  }
  @media all and (max-width: 640px) {
    top: 107px; 
  }

`;
const DivTwo = styled.div`
  position: relative;
`;
const SpanTwo = styled.span`
  margin-top: 88px;
  display: inline-block;
  font-size: 17px;
  color: #d2efe8;
  margin-left: 1px;
  /* &::after{
        content: "";
    position: absolute;
    z-index: -1;
    width: 47px;
    height: 96%;
    border-left: 2px dotted #5aa870;
    left: 2%;
    top: 130px;
    bottom: 0;
    margin: auto 0;
    } */
`;
const Right = styled.div`
  width: 60%;
  @media all and (max-width: 640px) {
    width: 100%;
    margin-top: 53px;
    margin: 0 auto;
  }
  @media all and (max-width: 640px) {
    width: 75%;
    margin-top: 53px;
  }
  @media all and (max-width: 360px) {
    width: 91%;
  }
`;
const Heading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 16px;

  @media all and (max-width: 420px) {
    font-size: 22px;
  }
`;
const Word = styled.span`
  color: rgb(15, 167, 111);
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 3px;
  display: inline-block;

  @media all and (max-width: 420px) {
    font-size: 22px;
  }
`;
const DivList = styled.div`
  display: flex;
  padding-top: 7px;
  position: relative;
`;
const ItemLeft = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid rgb(15, 167, 111);
  border-radius: 50%;
  padding: 2px;
`;
const Span = styled.div``;
const Circle = styled.small`
  background: rgb(15, 167, 111);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  padding: 1px;
  display: block;
`;
const Itemright = styled.div``;
const Paragraph = styled.p`
  color: #4d6c64;
  margin-left: 10px;
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

  margin-top: 18px;
  display: block;

  text-align: center;
  padding: 12px;
  margin-left: 106px;
  margin-top: 40px;


  @media all and (max-width: 640px) {
    margin-left: 44px;
    width:172px;
  }
`;
