import React from "react";
import styled from "styled-components";
import tick from "../../assests/images/Tick.svg";
import line from "../../assests/images/line.svg";
import top from "../../assests/images/top.svg";
import ScreenHeader from "../includes/ScreenHeader";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Main>
        <MainDiv>
          <Paragraph>
            <Span>HI, Mark Anderson </Span>choose your profile from the number{" "}
          </Paragraph>
          <DivItem>
            <Form>
              <DivList>
                <Left>Choose your profile</Left>
                <Right>(9188030718)</Right>
              </DivList>
              <Ul>
                <Li>
                  <ItemOne>
                    <LeftItem>
                      <Leftpart>
                        <DivImg>
                          <Img />
                        </DivImg>
                      </Leftpart>
                      <RightPart>
                        <Name>Ammus,(5A)</Name>
                        <School>LVHS Trivandrum</School>
                      </RightPart>
                    </LeftItem>
                    <RightItem>
                      <Pic src={tick} alt="images" />
                    </RightItem>
                  </ItemOne>
                </Li>
                <Li>
                  <ItemOne>
                    <LeftItem>
                      <Leftpart>
                        <DivImg>
                          <Img />
                        </DivImg>
                      </Leftpart>
                      <RightPart>
                        <Name>Achu s,(5A)</Name>
                        <School>LVHS Trivandrum</School>
                      </RightPart>
                    </LeftItem>
                    <RightItem>
                      <Pic src={tick} alt="images" />
                    </RightItem>
                  </ItemOne>
                </Li>
                <Li>
                  <ItemOne>
                    <LeftItem>
                      <Leftpart>
                        <DivImg>
                          <Img />
                        </DivImg>
                      </Leftpart>
                      <RightPart>
                        <Name>Manu s,(5A)</Name>
                        <School>LVHS Trivandrum</School>
                      </RightPart>
                    </LeftItem>
                    <RightItem>
                      <Pic src={tick} alt="images" />
                    </RightItem>
                  </ItemOne>
                </Li>
              </Ul>
              <DivButton>
                <ButtonOne>Not me</ButtonOne>
                <ButtonTwo link to="/details">Enroll</ButtonTwo>
              </DivButton>
            </Form>
          </DivItem>
          <DivPic>
            <Gallery src={line} alt="images" />
          </DivPic>
        </MainDiv>
      </Main>
    </div>
  );
}

const Main = styled.div`
  background: #d4ebe5;
  width: 100%;
  height: 100vh;
  background-image: url(${top});
  background-repeat: no-repeat;
@media all and (max-width: 1280px){
  background-position-y: 121px;
}
@media all and (max-width: 768px){
  background-image: none;
}
  
`;
const MainDiv = styled.div`
  padding: 10% 0 0 0;
  margin: 0 auto;
  text-align: center;
  width: 50%;

  @media all and (max-width:640px){
    width: 75%;
  }
`;
const Paragraph = styled.p`
  width: 57%;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 20px;

  @media all and (max-width: 980px){
    padding-top: 25px;
  }
  @media all and (max-width: 768px){
    padding-top: 30px;
  }
  @media all and (max-width: 640px){
  width: 80%;
    padding-top: 59px;
  }
  

`;
const Span = styled.span`
  color: rgb(15, 167, 111);
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 20px;
  /* @media all and (max-width: 420px){
  font-size: 15px;
  } */
`;
const DivItem = styled.div``;
const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  border: 1px solid #f0f0f7;
  border-radius: 8px;
  padding: 17px;
  background: #fff;
`;
const DivList = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 15px;
`;
const Left = styled.h1`
  font-size: 18px;
  @media all and (max-width: 420px){
  font-size: 15px;
  }
`;
const Right = styled.h2`
  font-size: 18px;
  color: rgb(15, 167, 111); ;
  @media all and (max-width: 420px){
  font-size: 15px;
  }
`;
const Ul = styled.ul`
  width: 100%;
`;
const Li = styled.li`
  border-top: 1px solid #f0f0f7;
  width: 100%;
  border-bottom: 1px solid #f0f0f7;

  padding: 12px;
`;
const ItemOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center; ;
`;
const LeftItem = styled.div`
  display: flex;
  width: 100%;
`;
const Leftpart = styled.div`
  width: 32px;
`;
const DivImg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffc107;
`;
const Img = styled.img``;
const RightPart = styled.div``;
const Name = styled.h3`
  font-size: 14px;
  color: #8a9093;
`;
const School = styled.h4`
  font-size: 14px;
  color: #2eafaf;
`;
const RightItem = styled.div`
  width: 100%;
  display: block;
`;
const Pic = styled.img`
  width: 8%;

  @media all and (max-width: 768px){
    width: 14%;
  }
  @media all and (max-width: 360px){
    width: 21%;
  }
`;
const DivButton = styled.div`
  display: flex;

  @media all and (max-width: 980px){
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ButtonOne = styled.button`
  /* background: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  ); */

  width: 200px;
  height: 40px;
  align-items: center;
  color: red;
  border-radius: 5px;
  font-size: 15px;
  border: 1px solid red;

  margin-top: 18px;
  display: block;

  text-align: center;
  padding: 12px;
  margin-left: 106px;
  margin-top: 40px;
`;

const ButtonTwo = styled(Link)`
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
`;
const DivPic = styled.div`
  position: relative;
  width: 100%;
`;
const Gallery = styled.img`
  width: 100%;
  display: block;
  position: absolute;
`;
