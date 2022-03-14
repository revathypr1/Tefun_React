import React, { useState } from "react";
import styled from "styled-components";
import screen from "../../assests/images/screenshot.png";
import small from "../../assests/images/small.svg";
import Ig from "../../assests/images/640.svg";
import Drop from "../../assests/images/down-arrow.svg";
import PlayImage from "../../assests/images/play-lock.svg";
import Back from "../../assests/images/back.svg";
import book from "../../assests/images/book.svg";
import cap from "../../assests/images/cap.svg";
import school from "../../assests/images/school.svg";
import Logout from "../../assests/images/logout.svg";
import "../../App.css"
import ScreenHeader from "../includes/ScreenHeader";
import Hurrypop from "../includes/modal/Hurrypop";

export default function Videologout() {
  const [selectedId, setSelectedId] = useState("");
  const [subheadSelectedId, setSubheadSelectedId] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [ItemLists] = useState([
    {
      id: 1,
      heading: "Lesson 1 ",
      subheads: [
        {
          id: 1,
          title: "Introduction",
          durattion: "2:34",
        },
        {
          id: 2,
          title: "Create beauty full stunning",
          durattion: "2:34",
        },
        {
          id: 3,
          title: "Monthly Coding challenge",
          durattion: "2:34",
        },
        {
          id: 4,
          title: "Create website",
          durattion: "2:34",
        },
      ],
    },
    {
      id: 2,
      heading: "Lesson 2",
      subheads: [
        {
          id: 1,
          title: "Introduction",
          durattion: "2:34",
        },
        {
          id: 2,
          title: "Coding website",
          durattion: "2:34",
        },
      ],
    },
    {
      id: 3,
      heading: "Lesson 3",
      subheads: [
        {
          id: 1,
          title: "Introduction",
          durattion: "2:34",
        },
        {
          id: 2,
          title: "Website",
          durattion: "2:34",
        },
      ],
    },
    {
      id: 4,
      heading: "Lesson 4",
      subheads: [
        {
          id: 1,
          title: "Introduction",
          durattion: "2:34",
        },
        {
          id: 2,
          title: "Website",
          durattion: "2:34",
        },
      ],
    },
  ]);

  const renderItems = () => {
    return ItemLists.map((ItemList) => (
      <Li key={ItemList.id} className={ItemList.id === selectedId && "active"}>
        <DivPara
          onClick={() => {
            if (selectedId === ItemList.id) {
              setSelectedId("");
            } else {
              setSelectedId(ItemList.id);
            }
          }}
        >
          <Intro>{ItemList.heading}</Intro>
          <Arrow className={ItemList.id === selectedId && "arrowActive"}>
            <img src={Drop} alt="Arrow" />
          </Arrow>
        </DivPara>

        {ItemList.subheads.map((subhead) => (
          <SubHead
            key={subhead.id}
            className={subhead.id === subheadSelectedId && "subheadActive"}
            onClick={() => {
              setSubheadSelectedId(!subhead.id);
            }}
          >
            <Play>
              <img src={PlayImage} alt="Play" />
            </Play>
            <Question>{subhead.title}</Question>
            <Duration>{subhead.durattion}</Duration>
          </SubHead>
        ))}
      </Li>
    ));
  };

  return (
    <div>
      <Wrapper>
   
        <MainDiv>
          {
            completed ? <Hurrypop/> : ""
          }
          <DivLeft>
            <DivImage>
              <Img src={screen} alt="images" />
              <Overlay></Overlay>
            </DivImage>
            <DivItem>
              <DivItemOne>
                <H1>Technology Fundamentals</H1>
                <H2>What is technology?</H2>
              </DivItemOne>
              <DivItemTwo onClick={()=>setCompleted(true)} >
                <P>Mark as Complete</P>
              </DivItemTwo>
            </DivItem>
            <DivPic>
              <Pic src={small} alt="images" />
            </DivPic>
            <DivPicone>
              <Picone src={Ig} alt="images" />
            </DivPicone>
          </DivLeft>
          <DivRight>
            <Ul>
              {renderItems()}
              {/* <Li>
                        <DivPara>
                            <Para>Introduction to Technology</Para>
                            <ImageContainer>
                                <PicThree  src={Drop} alt="images"/>
                            </ImageContainer>
                        </DivPara>
                    </Li>
                        <DivPara>
                            <Para>Current Technologies</Para>
                            <ImageContainer>
                                <PicThree  src={Drop} alt="images"/>
                            </ImageContainer>
                        </DivPara>
                        <DivPara>
                            <Para>Possibilities of Technology</Para>
                            <ImageContainer>
                                <PicThree  src={Drop} alt="images"/>
                            </ImageContainer>
                        </DivPara>
                        <DivPara>
                            <Para>Transporation</Para>
                            <ImageContainer>
                                <PicThree  src={Drop} alt="images"/>
                            </ImageContainer>
                        </DivPara>         */}
            </Ul>
          </DivRight>
        </MainDiv>
      </Wrapper>
    </div>
  );
}

// const SlideBar = styled.div`
//   margin: 0 auto;
//   padding: 10% 0 0 0;
//   position: relative;
 
 
// `;
// const DivSpace = styled.div`
//   /* position: absolute;
// left:0;
// top:0; */
// position: absolute;
//     right: 0;
//     z-index: 57;
    
//     width: 326px;
//     /* background: red; */
//     height: 626px;
//     background: #fff;
// `;
// const DivLog = styled.div`
//   display: flex;
//   margin: 0 auto;
//   width: 20%;
//   margin-bottom: 30px;
//   margin-top: 30px;
 
// `;
// const LeftList = styled.div`
//   width: 27%;
 
// `;
// const Down = styled.img`
//   width: 100%;
//   display: block;
//   margin-left: -35px;
// `;
// const Right = styled.div`
//   width: 50%;
// `;
// const Title = styled.h3`
//   margin-right: 103px;
//   font-size: 20px;
// `;
// const Center = styled.div`
//   text-align: center;
// `;
// const DivCirlce = styled.div`
//   background: #56b45c;

//   width: 14%;
//   /* height: 17%; */
//   margin: 0 auto;
//   border-radius: 51%;
//   padding: 1%;
// `;
// const Accout = styled.h2`
//   font-size: 30px;
//   font-weight: 600;
//   color: #ffff;
// `;
// const Heading = styled.h1`
//   font-size: 18px;
//   margin-top: 10px;
// `;
// const Phone = styled.a`
//   font-size: 12px;
//   color: #60b194;
// `;
// const DivTotal = styled.ul`
//   margin-bottom:40px;
// `;
// const Total = styled.li`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   /* padding: 1% 24% 1% 28%; */
//   text-align: center;
//   width: 80%;
//   border: 1px solid #f8faf5;
//   background: #f8faf5;
//   margin-bottom: 10px;
//   border-radius: 7px;
// `;
// const DivCollege = styled.div`
//   width: 9%;
// `;
// const College = styled.img`
//   width: 100%;
//   display: block;
// `;
// const Divname = styled.div`
//   margin-left: 20px;
// `;
// const Small = styled.small`
//   font-size: 12px;
//   color: #8f9699;
// `;
// const Sentence = styled.p`
//   font-size: 13px;
// `;
// const DivOut = styled.div`
//   margin-bottom:40px;
// `;
// const ListOne = styled.div`
//   width: 4%;
//   display: flex;
//   margin: 0 auto;
// `;
// const One = styled.img`
//   width: 100%;
//   display: block;
//   margin-left: 10px;
// `;
// const Lock = styled.p`
//   font-size: 16px;
//   color: red;
//   margin-left: 10px;
// `;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 12%;
  @media all and (max-width: 980px){
    padding-top:17%;
  }
  @media all and (max-width: 768px){
    flex-wrap: wrap;
    padding-top:36%;
  }
`;
const DivLeft = styled.div`
  width: 70%;
  @media all and (max-width: 768px){
    width: 100%;
  }
`;
const DivImage = styled.div`
  width: 85%;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const DivItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivItemOne = styled.div``;
const H1 = styled.h1`
  font-size: 16px;
  color: rgba(21, 35, 46, 0.49);
`;
const H2 = styled.h2`
  margin-top: 15px;
  font-weight: 600;
  margin-bottom: 48px;

  @media all and (max-width:640px){
    font-size: 19px;
  }
  @media all and (max-width:420px){
    font-size: 16px;
  }
`;
const DivItemTwo = styled.div`
  cursor: pointer;
  background: linear-gradient(
    272deg,
    rgb(34, 193, 195) 0%,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 100%
  );
  padding: 9px;
  border-radius: 7px;
  color: rgb(255, 255, 255);
  width: 23%;
  height: 15%;
  margin-right: 220px;
@media all and (max-width: 1280px){
  width: 28%;
}
@media all and (max-width: 1080px){
  width: 35%;
  margin-right: 136px;
}
@media all and (max-width: 980px){
width: 40%;
margin-right: 30px;
}

@media all and (max-width: 768px){
    width: 32%;
  }
  @media all and (max-width: 640px){
    width: 44%;
  }
  @media all and (max-width: 420px){
    width: 53%;
  }
  @media all and (max-width: 360px){
    width: 75%;
  }
`;
const P = styled.p`
  color: rgb(255, 255, 255);
  font-size: 18px;
  padding-left: 22px;

  @media all and (max-width: 980px){
padding-left: 9px;
}

@media all and (max-width: 640px){
font-size: 14px;
}
`;
const DivPic = styled.div`
  width: 85%;
  @media all  and (max-width: 768px){
    position: relative;
  }
`;
const Pic = styled.img`
  width: 100%;
  display: block;
  @media all  and (max-width: 768px){
  
  position: absolute;
  top:250px;
}
`;
const DivPicone = styled.div`
  width: 85%;
  margin-top: 22px;
  height: 108px;
  @media all  and (max-width: 768px){
  position: relative;
  height: 0;
  margin-top: -45px;
  }
`;
const Picone = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
`;
const DivRight = styled.div`
  width: 30%;
  padding-top: 20px;

  @media all and (max-width: 768px){
    width: 93%;
  }
`;
const Ul = styled.ul`
  width: 100%;
`;
const Li = styled.li`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  &.active div {
    display: flex;
  }
`;
const DivPara = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  padding: 15px 19px;
  margin: 0px 0px 10px;
  border-radius: 9px;
  cursor: pointer;
  justify-content: space-between;
`;
const Para = styled.small`
  font-size: 17px;
`;
const ImageContainer = styled.div`
  width: 3%;
`;
const PicThree = styled.img`
  width: 100%;
  display: block;
`;
const Arrow = styled.div``;
const SubHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 3%;
  display: none;
  transition: all 0.3s ease 0s;
  justify-content: space-between;
  align-items: center;
  padding: 12px 31px;
  cursor: pointer;
  border-radius: 9px;
  &.subheadActive {
    background-image: linear-gradient(to right, #68ba50, #469aad);
  }
`;
const Play = styled.div`
  width: 3%;
`;
const Question = styled.p`
  font-size: 15px;
  width: 64%;
  margin-left: 3%;
  @media all and  (max-width: 1280px){
    margin-left: 19%;
  }
`;
const Duration = styled.p``;
const Intro = styled.p``;
const Overlay = styled.div`
  position: absolute;
  top: 10px;
  left: 23px;
  width: 94%;
  height: 93%;
  background-color: #00000999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1280px){
    left: 17px;
  }
  @media all and (max-width: 980px){
    left: 12px;
    top: 7px;
  }
  @media all and (max-width: 768px){
    left: 15px;
  }
  @media all and (max-width:640px){
    left: 9px;
  }
`;
