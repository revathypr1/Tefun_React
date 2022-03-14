import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icon from "../../assests/images/Set.svg";

export default function Time() {
  const [hour, setHour] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
          if (hour > 0) {
            setHour(hour - 1);
            setMinutes(59);
            setSeconds(59);
          }
          if (hour === 0) {
            // setExamCompleted(true)
            clearInterval(myInterval);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <MainDiv>
        <LeftDiv>
          <ImageDiv>
            <Img src={icon} alt="images" />
          </ImageDiv>
          <Heading>Tefun Examination</Heading>
        </LeftDiv>
        <RightDiv>
          <TopDiv>
            <Paragraph>Time Remaining</Paragraph>
          </TopDiv>
          <BottomDiv>
            <DivOne>
              <Sentence>
                {hour} : {minutes} : {seconds}
              </Sentence>
              <SentenceOne>hr min sec</SentenceOne>
            </DivOne>
          </BottomDiv>
        </RightDiv>
      </MainDiv>
    </div>
  );
}
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 24px 17px 24px;
  border: 1px solid #e6e6e6;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  background: #fef6f9;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;
const ImageDiv = styled.div`
  width: 13%;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const Heading = styled.h3`
  font-size: 17px;
  width: 100%;
  margin-left: 19px;
  color: #707387;
  font-weight: 800;
`;
const RightDiv = styled.div`
  border-left: 1px solid #e6e6e6;
  margin-right: 20px;
`;
const TopDiv = styled.div``;
const Paragraph = styled.p`
  color: #707387;
  font-size: 16px;
`;
const BottomDiv = styled.div``;
const DivOne = styled.div``;
const SentenceOne = styled.p`
  color: #707387;
  font-size: 13px;
`;

const Sentence = styled.p`
  color: #707387;
  font-weight: 800;
`;
