import React, { useState } from "react";
import styled from "styled-components";
import Drop from "../../assests/images/down-arrow.svg";
import Top from "../../assests/images/top.svg";
import activate from "../../assests/images/activated.svg";
import bg from "../../assests/images/bannerbg.svg";
import LL from "../../assests/images/greenline.svg";

export default function Details() {
  const [schoolValue, setSchoolValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  let textInput = React.createRef();

  const [schools] = useState([
    "JNE002 :- Jamia Nadviyya",
    "JNE003 :- Jamath College edakkara",
    "JNE004 :- Mila Manjeri",
    "DNBSC :- Donbosco Mannuthy",
  ]);

  const getPredictions = () =>
    setPredictions(
      schools.filter(
        (school) =>
          school.toLowerCase().indexOf(schoolValue.toLowerCase()) !== -1
      )
    );

  const inputOnchange = (e) => {
    setSchoolValue(e.target.value);
    getPredictions();
  };

  return (
    <div>
      <DetailContainer>
        <Section class="wrapper">
          <PicList src={Top} alt="image" />
          <DivContainer>
            <H2>Fill your Details</H2>
            <hr />

            <Form>
              <Label>Campus Name/Code</Label>
              <NumberText
                type="text"
                placeholder="Js22"
                onChange={(e) => {
                  inputOnchange(e);
                  setSelectedSchool(e.target.value)
                  console.log(textInput);
                }}
                ref={textInput}
                value= {selectedSchool}
              ></NumberText>
              <DivLoop>
                {predictions.map((prediction) => (
                  <Predictions
                    onClick={() => {
                      setSelectedSchool(prediction);
                      setPredictions([]);
                    }}
                    key={prediction}
                  >
                    {prediction}
                  </Predictions>
                ))}
              </DivLoop>
              <DivItem>
                <Label>Select classes</Label>
                {/* </DivItem> */}
                <DivisionClass>
                  <Classes>
                    <Class>10</Class>
                  </Classes>
                  <DivPic>
                    <Pic src={Drop} alt="images" />
                  </DivPic>
                </DivisionClass>
              </DivItem>
              <DivList>
                <Label>select Division</Label>
                <Divisions>
                  <Div>A</Div>
                  <DivPicOne>
                    <Img src={Drop} alt="images" />
                  </DivPicOne>
                </Divisions>
              </DivList>
              <Button>
                <ButtonOne>Back</ButtonOne>
                <ButtonTwo>Submit</ButtonTwo>
              </Button>
            </Form>
          </DivContainer>
        </Section>
      </DetailContainer>

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
            <ButtonThree>Go to dashboards</ButtonThree>
          </RightList>
          <DivBack>
            <ImgLine src={LL} alt="images" />
          </DivBack>
        </RightList>
      </CollegeDiv>
    </div>
  );
}
const DetailContainer = styled.div`
  padding: 10% 0 0;
  background-color: #dffbf4;
  width: 100%;
  padding-bottom: 100px;

  display: flex;

  justify-content: center;
`;
const Section = styled.div`
  position: relative;
`;
const PicList = styled.img`
  position: absolute;
  top: -43px;
  left: -390px;
  width: 33%;
`;
const DivContainer = styled.div`
  padding: 25px 7% 5% 11%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;
const H2 = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 10px;
`;
const Form = styled.form``;
const DivItem = styled.div`
  padding-bottom: 10px;
`;
const Label = styled.label`
  color: #858585;

  display: inline-block;
  margin-bottom: 8px;
  margin-top: 20px;
`;
const NumberText = styled.input`
  font-size: 17px;
  border: 1px solid #e6e6e6;
  padding-bottom: 20px;
  border-radius: 7px;
  padding: 11px 19px;
  border-radius: 7px;
  width: 100%;

  &::placeholder {
  }
`;
const DivList = styled.div``;
const DivisionClass = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  padding: 7px 19px;
  border-radius: 7px;
`;
const Classes = styled.div``;
const Class = styled.small`
  color: #000;
  display: inline-block;
  padding-bottom: 5px;
  font-size: 20px;
`;
const DivPic = styled.div`
  width: 7%;
`;
const Pic = styled.img`
  /* width:100px;
display:block; */
  color: #e6e6e6;
`;
const Divisions = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  padding: 7px 19px;
  border-radius: 7px;
`;
const Div = styled.small`
  color: #000;
  font-size: 20px;
`;
const DivPicOne = styled.div``;
const Img = styled.img``;
const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;
const ButtonOne = styled.button`
  border-radius: 35%;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 16px;

  padding: 3px 41px;
  border: 1px solid grey;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  background-size: 200%;
  color: #000;
  margin-right: 12px;
`;
const ButtonTwo = styled.button`
  border-radius: 35%;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 16px;

  padding: 13px 41px;
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
`;

const CollegeDiv = styled.div`
  margin: 200px auto;
  position: relative;
  width: 50%;
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
const ButtonThree = styled.span`
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

const DivLoop = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  position: absolute;
  width: 90%;
  top: 20%;
`;
const Predictions = styled.p`
  border-bottom: 2px solid #e6e6e6;
  padding: 3%;
  margin-bottom: 15px;
  color: #68ba50;
  font-size: 15px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-bottom: 0;
    border: 0;
  }
`;
