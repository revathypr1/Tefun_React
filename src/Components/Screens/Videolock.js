import React, { useState } from "react";
import styled from "styled-components";
import screen from "../../assests/images/screenshot.png";
import small from "../../assests/images/small.svg";
import Ig from "../../assests/images/640.svg";
import Drop from "../../assests/images/down-arrow.svg";
import PlayImage from "../../assests/images/play-lock.svg";

export default function Videos() {
  const [selectedId, setSelectedId] = useState("");
  const [subheadSelectedId, setSubheadSelectedId] = useState(1);
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
            <PicThree src={Drop} alt="Arrow" />
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
      <MainDiv>
        <DivLeft>
          <DivImage>
            <Img src={screen} alt="images" />
            <Overlay>
              <DivContain>
                <DivLock>
                  <Lock src={PlayImage}  alt="images"/>
                </DivLock>
                <DivParagraph>
                  <Heading>This video is Locked</Heading>
                  <Sentence>
                    To unlock this video,please Complete your previous videos
                  </Sentence>
                  <Button>Go to Lessons</Button>
                </DivParagraph>
            </DivContain>
            </Overlay>
          </DivImage>
          <DivItem>
            <DivItemOne>
              <H1>Technology Fundamentals</H1>
              <H2>Introduction</H2>
            </DivItemOne>
            <DivItemTwo>
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
    </div>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const DivLeft = styled.div`
  width: 70%;
`;
const DivImage = styled.div`
  width: 85%;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  top: 10px;
  left: 16px;
  width: 94%;
  height: 93%;
  background-color: #00000999;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const P = styled.p`
  color: rgb(255, 255, 255);
  font-size: 18px;
  padding-left: 22px;
`;
const DivPic = styled.div`
  width: 85%;
`;
const Pic = styled.img`
  width: 100%;
  display: block;
`;
const DivPicone = styled.div`
  width: 85%;
  margin-top: 22px;
  height: 108px;
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
`;
const Duration = styled.p``;
const Intro = styled.p``;
// const PicThree=styled.img`
//     width: 100%;
//     display: block;
// `;

const DivLock = styled.div`
  width: 100%;
  display: block;
`;
const Lock = styled.img`
width: 15%;
margin-left:157px;

`;
const DivParagraph = styled.div``;
const Heading = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;

const Sentence = styled.p`
  font-size: 15px;
  color: #ffffff82;
  width: 80%;
  text-align: center;
`;
const Button = styled.button`
  background: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  width: 150px;
  height: 40px;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 auto;
  margin-top: 18px;
  display: block;
    margin-left: 79px;
  text-align: center;
  padding: 12px;
`;
const DivContain=styled.div``;
