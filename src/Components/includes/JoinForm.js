import React, { useState } from "react";
import styled from "styled-components";
import Bg from "../../assests/images/decorator.svg";
import flg from "../../assests/images/india-flag.jpeg";
import arrow from "../../assests/images/down-arrow.svg";
import phone from "../../assests/images/phone.svg";
import cross from "../../assests/images/close.svg";
import { Link } from "react-router-dom";

export default function ({ menuIconClick, setMenuIconClick }) {
  // const [menuIconClick, setMenuIconClick] = useState(false);
  return (
    <div>
      <DivNow menuIconClick={menuIconClick}>
        <DivContain>
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
            <ButtonDiv link to ="/landing">Next</ButtonDiv>
            <DivContiner>
              <POne>
                New to Yiaai?<Span>Create an account</Span>
              </POne>
            </DivContiner>
            <P2>Terms of service</P2>
            <Close
              onClick={() => {
                setMenuIconClick(false);
              }}
            >
              <PicThree src={cross} alt="images" />
            </Close>
          </LoginDiv>
        </DivContain>
      </DivNow>
    </div>
  );
}

const DivNow = styled.div`
  background: #fff;

  position: fixed;
  right: -100%;
  z-index: 1000;

  width: 50%;
  height: 100vh;
  transition: all 1 ease;
  top: 0px;
  right: ${({ menuIconClick }) => (menuIconClick ? "0px" : "-1000px")};

  @media all and (max-width: 640px){
    width: 69%;
  }
  @media all and (max-width: 420px){
  width: 76%;
  }
  @media all and (max-width: 360px){
  width: 82%;
  }

`;
const DivContain = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const LoginDiv = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: center;
  overflow-y: scroll;
  z-index: 500;
  width: 600px;
  padding: 0px 60px;
  @media all and (max-width: 640px){
  padding: 0px 13px;
}
 `;
const H2 = styled.h2`
  font-size: 25px;
  line-height: 1.4em;

  font-weight: 600;
  @media all and (max-width: 768px){
    font-size: 19px;
  }
  @media all and (max-width: 640px){
    font-size: 18px;
width: 189px;
  }
 
`;
const H3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-top:20px;
  margin-bottom: 50px;

  @media all and (max-width: 980px) {
    font-size:14px;
  }
  @media all and (max-width: 768px) {
  width: 285px;
  }
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
  @media all and (max-width: 980px){
    margin-left:0%;
  }
`;
const DivItem = styled.div`
  height: 23px;
  width: 34px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 17px;

  justify-content: center;
  @media all and (max-width: 768px){
    display: none;
  }
`;
const ImageOne = styled.img`
  width: 100%;
  display: block;
`;
const DivItemone = styled.div`
  width: 18px;
  margin-left: 17px;
  margin-top: 23px;
  @media all and (max-width: 768px){
    display: none;
  }
`;
const Pic = styled.img`
  width: 100%;
  display: block;
`;
const DivTwo = styled.div`
  border-color: rgb(47, 51, 55);
  margin-bottom: -30px;

  border: 1px solid #000;
  border-radius: 9px;
  padding: 9px 44px;
  display: flex;
  align-items: center;
  @media all and (max-width: 980px){
    padding: 9px 15px;
  }

  
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

const ButtonDiv = styled(Link)`
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
  margin-top: 57px;
 text-align: center;
`;
const DivContiner = styled.div`
  margin: 0 auto;
  margin-top:20px;
`;
const POne = styled.p`


@media all and (max-width: 768px){
  font-size: 14px;
}
`;
const Span = styled.span`
  color: green;
  text-align: center;
  @media all and (max-width: 768px){
  font-size: 14px;
}
`;

const P2 = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 14px;

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
  top: 0;

  &.active {
    right: 0px;
    top: 0px;
  }
  @media all and (max-width: 768px){
    left: -7px;
    width: 5%;
  }
`;
const PicThree = styled.img`
  width: 100%;
  display: block;
`;
