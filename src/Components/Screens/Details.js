import React, { useState } from "react";
import styled from "styled-components";
import Drop from "../../assests/images/down-arrow.svg";
import Top from "../../assests/images/top.svg";
import activate from "../../assests/images/activated.svg";
import bg from "../../assests/images/bannerbg.svg";
import LL from "../../assests/images/greenline.svg";
import Welcome from "../includes/modal/Welcome";
import ScreenHeader from "../includes/ScreenHeader";

export default function Details() {
  const [schoolValue, setSchoolValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [arrowDown,setArrowDown] = useState(false);

  const [isModal,SetModal] =useState(false);

  // const options = ['B','C','Default']
  const divisions = [
    {
      id: "1",
      name: "9",
    },
    {
      id: "2",
      name: "8",
    },
    {
      id: "3",
      name: "7",
    },
  ];

const Standards =[
  {
    id: "1",
    name: "B",
  },
  {
    id: "2",
    name: "C",
  },
  {
    id: "3",
    name: "D",
  },

]
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
 
  const [division, setDivision] = useState("10");
  const [standard, setStandard] = useState("A");
  const handleDivision = (item) => {
    setDivision(item.name);
  };
  console.log(division, "-----------------------");

  const standards = [{id:"1", name : "A"},
  {id:"2", name : "B"},
  {id:"3", name : "C"},
  {id:"4", name : "D"},
  {id:"5", name : "E"},];
  // const getDivision = (item) => {
  //   setStandards(item.name);
  // };

  console.log(standards, "-----------------------");
  return (
    <div>
      <Welcome isModal={isModal} SetModal={SetModal} />
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
                  setSelectedSchool(e.target.value);
                  console.log(textInput);
                }}
                ref={textInput}
                value={selectedSchool}
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
                <DivisionClass onClick={() => setDropDown(!dropDown)}>
                  {division}
                  <DivPic>
                    <Pic src={Drop} alt="images" />
                  </DivPic>
                </DivisionClass>
                <DivDropDown dropDown={dropDown}>
                  <Items>
                    {divisions.map((item) => (
                      <Item
                        onClick={() => {
                          setDivision(item.name);
                          setDropDown(!dropDown);
                        }}
                      >
                        {item.name}
                      </Item>
                    ))}
                  </Items>
                </DivDropDown>
              </DivItem>
              <DivList>
                <Label>select Division</Label>
                <DivisionClass onClick={() => setArrowDown(!arrowDown)}>
                  {standard}
                  <DivPic>
                    <Pic src={Drop} alt="images" />
                  </DivPic>
                </DivisionClass>
                <DivArrowDown arrowDown={arrowDown}>
                  <Items>
                    {standards.map((item) => (
                      <Item
                        onClick={() => {
                          setStandard(item.name);
                          setArrowDown(!arrowDown);
                        }}
                      >
                        {item.name}
                      </Item>
                    ))}
                  </Items>
                </DivArrowDown>
                {/* <Divisions onClick={()=>setArrowDown(!arrowDown)}>
                  {standards}
                  <Div>A</Div>
                  <DivPicOne>
                    <Img src={Drop} alt="images" />
                  </DivPicOne>
                </Divisions> */}
                {/* <DivArrowDown arrowDown={arrowDown}>
                  <Items>
                    {standards.map((item)=>(
                      <Item onClick={()=>{setArrowDown(item.name);
                      setArrowDown(!arrowDown)}}>{item.name}</Item>
                    ))}
                  </Items>

                </DivArrowDown> */}
              </DivList>
              <Button>
                <ButtonOne>Back</ButtonOne>
                <ButtonTwo onClick={()=>SetModal(true)}>Submit</ButtonTwo>
              </Button>
            </Form>
          </DivContainer>
        </Section>
      </DetailContainer>

      {/* <CollegeDiv>
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
      </CollegeDiv> */}
    </div>
  );
}

const DivArrowDown=styled.div`
display: ${({arrowDown}) => (arrowDown ? "block":"none")};
`;

const DivDropDown = styled.div`
  display: ${({ dropDown }) => (dropDown ? "block" : "none")};
`;
const Items = styled.ul`
  border: 1px solid #e6e6e6;
  margin-top: 7px;
  border-radius: 7px;
  background: #fff;
  padding: 8px 10px;
`;
const Item = styled.li`
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  margin-left: 14px;
  color: #938a8a;
`;
const DetailContainer = styled.div`
  padding: 10% 0 0;
  background-color: #dffbf4;
  width: 100%;
  padding-bottom: 100px;
    /* backdrop-filter: blur(2px); */

  display: flex;

  justify-content: center;
  @media all and (max-width: 1080px){
  padding: 13% 0 0 0;
  }
  @media all and (max-width: 980px){
  padding: 16% 0 0 0;
  }
  @media all and (max-width: 980px){
  padding: 17% 0 0 0;
  }
  @media all and (max-width: 640px){
  padding: 27% 0 0 0;
  }
  @media all and (max-width: 360px){
  padding: 37% 0 0 0;
  }

`;
const Section = styled.div`
  position: relative;
`;
const PicList = styled.img`
  position: absolute;
  top: -43px;
  left: -390px;
  width: 33%;
  @media all and (max-width: 1280px){
    left: -329px;
    top: 10px;
  }
  @media all and (max-width: 1080px){
    left: -277px;
  }
  @media all and (max-width: 980px){
  left: -174px;
    width: 27%;
  }
  @media all and (max-width: 768px){
  display: none;
  }
  /* @media all and (max-width: 768px){
  left: -152px;
    width: 27%;
  } */
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
const Div = styled.div`
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
cursor: pointer;
  padding: 3px 41px;
  border: 1px solid grey;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  background-size: 200%;
  color: #000;
  margin-right: 12px;
`;
const ButtonTwo = styled.span`
  border-radius: 35%;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 16px;
  cursor: pointer;
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
