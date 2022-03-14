import React from "react";
import styled from "styled-components";
import activate from "../../../assests/images/activated.svg";
import bg from "../../../assests/images/bannerbg.svg";
import LL from "../../../assests/images/greenline.svg";
import { Link } from "react-router-dom";

export default function Welcome({ isModal, SetModal }) {
  return (
    <div>
      <College style={{ transform: isModal ? "scale(1,1)" : null }}>
        <CollegeDiv>
          <LeftList>
            <DivGallery>
              <Gallery src={activate} alt="image" />
            </DivGallery>
          </LeftList>
          <RightList>
            <RightList>
              <H1>Welcome</H1>
              <P>you've successfully activated your tefun program</P>
              <ButtonThree link to ="/video-log">Go to dashboards</ButtonThree>
            </RightList>
            <DivBack>
              <ImgLine src={LL} alt="images" />
            </DivBack>
          </RightList>
        </CollegeDiv>
      </College>
    </div>
  );
}

const Div = styled.div`
/* background: rgba(0,0,0,0.6); */
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
backdrop-filter: blur(2px);
transform:scale(0);
`;

const College = styled.div`
  transform: scale(0,0);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: 0.3s;
  transform: scale(0, 0);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
  background: rgba(f, f, f, 0.6);
  backdrop-filter: blur(2px);
`;
const CollegeDiv = styled.div`
  margin: 200px auto;
  width: 500px;
  height: 300px;
  /* transform: scale(0); */
  position: absolute;
  
  left: 288;

  align-items: center;

  /* width: 50%; */
  background: url(${bg});
  display: flex;
  justify-content: space-between;
`;
const DivFill = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background: url(${LL});
  background: url(${bg});
  padding-bottom: 100vh;

  border-radius: 5px;
`;
const LeftList = styled.div`
  width: 50%;
  padding-bottom: 20px;
`;
const DivGallery = styled.div`
  width: 80%;
`;
const Gallery = styled.img`
  width: 100%;
  display: block;
`;
const RightList = styled.div`
  width: 50%;
  padding-bottom: 20px;
`;
const H1 = styled.h1`
  margin-top: 44px;
  font-weight: 700;
  color: rgb(15, 167, 111);
`;
const P = styled.p`
  width: 241px;
  margin-top: 12px;
  margin-bottom: 55px;
`;
const DivP = styled.div`
  padding-top: 20px;
  background: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  width: 80%;
  border-radius: 10px;
`;
const Small = styled.p`
  font-size: 17px;
  text-align: center;
  color: #fff;
`;
const ButtonThree = styled(Link)`
  display: flex;
  justify-content: center;
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
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
`;
const DivBack = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
`;
const ImgLine = styled.img`
  width: 100%;
  display: block;

  bottom: 0;
`;
