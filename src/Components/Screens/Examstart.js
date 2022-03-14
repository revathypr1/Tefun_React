import React from "react";
import styled from "styled-components";
import Time from "./Time";

export default function () {
  return (
    <div>
      <Time/>
      <Main>
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
          <P>
            The school survey questions for teachers in an in-depth survey that
            a school deploys to its teaching stuff to gather data about they
            perception about the school?
          </P>
          <Boxes>
            <Li>
              <DivItem>
                <DivLeft>
                  <Point>A</Point>
                </DivLeft>
                <DivRight>
                  <Sentence>Another answer can be placed here</Sentence>
                </DivRight>
               
              </DivItem>
              
            </Li>
            <Li>
              <DivItem>
                <DivLeft>
                  <Point>B</Point>
                </DivLeft>
                <DivRight>
                  <Sentence>Another answer can be placed here</Sentence>
                </DivRight>
               
              </DivItem>
              
            </Li>
            <Li>
              <DivItem>
                <DivLeft>
                  <Point>C</Point>
                </DivLeft>
                <DivRight>
                  <Sentence>Another answer can be placed here</Sentence>
                </DivRight>
               
              </DivItem>
              
            </Li>
            <Li>
              <DivItem>
                <DivLeft>
                  <Point>D</Point>
                </DivLeft>
                <DivRight>
                  <Sentence>Another answer can be placed here</Sentence>
                </DivRight>
               
              </DivItem>
              
            </Li>
          </Boxes>
          <Button>Next</Button>
        </Right>
      </Main>
    </div>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10% 0 0 0;
`;
const Left = styled.div`
  width: 26%;
  display: block;
  flex-wrap: wrap;
  padding: 42px 42px;
`;
const Div = styled.div`
  display: flex;
`;
const SpanNum = styled.span`
    width: 12px;
    height: 12px;
  background: #d5d6d5;
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
`;
const Small = styled.div`
  color: #d5d6d5;
  font-size: 20px;
  font-weight: 700;
  position: relative;
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
`;
const DivOne = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 47px;
    height: 84%;
    border-left: 2px dashed #5aa870;
    left: 3%;
    top: -20px;
  }
`;
const SpanOne = styled.span`
  margin-top: 53px;
  display: inline-block;
  display: inline-block;
    font-size: 23px;
    font-weight: 600;
    color: #d2efe8;
    margin-left: -6px;
  color:rgb(15, 167, 111);
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 47px;
    height: 84%;
    border-left: 2px dashed #5aa870;
    left: 3%;
    top: 120px;
    bottom: 0;
    margin: auto 0;
  }
`;
const DivTwo = styled.div`
  position: relative;
`;
const SpanTwo = styled.span`
  margin-top: 53px;
  display: inline-block;
  font-size: 21px;
    color: #d2efe8;
    margin-left: -4px;
  ;
`;
const Right = styled.div`

`;
const P = styled.p`
font-size: 16px;
    width: 70%;
    color: #707387;
    margin-bottom: 20px;
   
`;
const Boxes = styled.ul``;
const Li = styled.li``;
const DivItem = styled.div`
  display: flex;
  align-items: center;
    justify-content: flex-start;
    border: 1px solid #cbe3f1;
    width: 66%;
    padding: 8px;
    box-sizing: 7px;
    background: #d4e2eb;
    margin-bottom: 16px;
    outline: none;
    border-radius: 5px;
`;
const DivLeft = styled.div`
    margin-right: 19px;
    margin-left: 14px;
`;
const Point = styled.p`
color: #717272;
font-size: 12px;
    border: 1px solid grey;
    padding: 1px 8px;
    background: #fff;
    font-weight: 700;
`;
const DivRight = styled.div``;
const Sentence = styled.p`
  color: #717272;
  font-size: 14px;
`;
const Button = styled.button`
 background: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  width: 143px;
  height: 40px;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;

  margin-top: 18px;
  display: block;
  
  text-align: center;
  padding: 12px;
  margin-left: 455px;
  margin-top: 34px;
`;


