import React from "react";
import styled from "styled-components";
import Human from "../../assests/images/person.jpeg";
import Two from "../../assests/images/imagetwo.jpeg";
import Three from "../../assests/images/imagethree.jpeg";
import play from "../../assests/images/play-solid.svg";

export default function () {
  const Data = [
    {
      id: "1",
      image: Human,
    },
    {
      id: "2",
      image: Two,
    },
    {
      id: "3",
      image: Three,
    },
    {
      id: "4",
      image: Human,
    },
    {
      id: "5",
      image: Two,
    },
    {
      id: "3",
      image: Three,
    },
    {
      id: "4",
      image: Human,
    },
    {
      id: "5",
      image: Two,
    },
    {
      id: "3",
      image: Three,
    },
    {
      id: "4",
      image: Human,
    },
    {
      id: "5",
      image: Two,
    },
    {
      id: "3",
      image: Three,
    },
  ];
  return (
    <>
      <MainDiv>
        <H1>Tefun</H1>
        <H2>എന്നു പറയുമ്പോൾ</H2>
        <P>
          ടെക്കീസ് ക്ലബിലൂടെ ടെക്ക്നോളജിയിൽ മാറ്റം കൈവരിച്ച ഞങ്ങളുടെ കുട്ടി
          എഞ്ചിനീഴ്സിന് പറയാനുള്ളത്..
        </P>
        <Ul>
          {Data.map((item) => (
            <Li>
              <Overlay></Overlay>
              <Image src={item.image} alt="person" />
              <DivButton className="button">
                <Small className="small">Swathi Menon</Small>
                <Span className="span">8th Jamia Edavana</Span>
                <DivMain className="main">
                  <DivPlay>
                    <Img src={play} alt="images" />
                  </DivPlay>
                  <Para>Watch Story</Para>
                </DivMain>
              </DivButton>
            </Li>
          ))}
        </Ul>
      </MainDiv>
    </>
  );
}
const MainDiv = styled.div`
  padding-bottom: 36px;
`;
const H1 = styled.h1`
  font-size: 45px;
  font-weight: 700;
  color: rgb(15, 167, 111);
  align-items: center;
  text-align: center;
  @media all and (max-width: 420px){
    font-size: 35px;
  }
`;
const H2 = styled.h2`
  align-items: center;
  text-align: center;
  font-size: 37px;
  font-weight: 600;
`;
const P = styled.p`
  width: 50%;
  color: rgb(84, 84, 84);
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 38px;
  @media all and (max-width: 768px) {
    width: 91%;
  }
  @media all and (max-width: 640px) {
    width: 101%;
    font-size: 18px;
  }
`;
const Ul = styled.ul`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  @media all and (max-width: 1280px) {
    width: 72%;
  }
  @media all and (max-width: 980px) {
    width: 80%;
  }
  @media all and (max-width: 640px) {
    width: 96%;
  }
  @media all and (max-width: 420px) {
    width: 100%;
  }
`;
const Overlay = styled.div`
  width: 89%;
  height: 92%;
  position: absolute;
  background: linear-gradient(0deg, rgba(0 0 0 / 34%), rgba(0 0 0 /49%));
  top: 16px;
  left: 14px;
  border-radius: 7px;
  @media all and (max-width: 1280px) {
  width: 86%;
height: 89%;
  }

  @media all and (max-width: 420px) {
    width: 85%;
    height: 87%;
  }
  /* @media all and (max-width: 360px) {
    width: 88%;
  height: 92%;
  } */
  @media all and (max-width: 980px) {
  width: 89%;
height: 92%;
  }
  @media all and (max-width: 768px) {
    width: 87%;
height: 90%;

  }
  @media all and (max-width: 640px) {
  width: 83%;
height: 88%;
  }
  @media all and (max-width:360px){
    width: 88%;
height: 92%;
  }
    
 
`;
const Li = styled.li`
  /* position: relative; */
  border-radius: 10px;
  margin: 0px 10px 20px;
  padding: 15px;
  position: relative;
  width: calc(25% - 20px);
  list-style: none;
  position: relative;
  transition-duration: 0.6s;
  position: relative;
  &:hover {
    .button {
      bottom: 80px;
      transition-duration: 0.6s;
      left: 10px;
    }
    .main {
      display: flex;
    }
  }

  @media all and (max-width: 1280px) {
    width: calc(28% - -25px);
    margin: 0;
    width: 26%;

  }

  @media all and (max-width: 1080px) {
    width: calc(24% - -40px);
    width: 29%;
  }
  @media all and (max-width: 980px) {
    width: 44%;
  }
  @media all and (max-width: 420px) {
    width: 50%;
  }
@media all and (max-width: 360px){
  width: 79%;
margin: 0 auto;
}
  


`;
const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 7px;
`;
const Small = styled.h5`
  display: block;

  text-align: center;
  color: #fff;
  font-weight: 700;

  color: #fff;
  font-size: 23px;

  @media all and (max-width: 1280px) {
    font-size: 15px;
  }
  @media all and (max-width: 980px) {
    font-size: 14px;
  }
`;
const Span = styled.h3`
  display: block;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
`;
const DivPlay = styled.div`
  /* width:8%; */
  color: grey;
  /* margin: 0 auto; */

  /* display: flex; */
  color: grey;
  position: absolute;

  background: #fff;
  border-radius: 10px;
  padding: 5px;
  width: 16%;
  margin-left: 15px;
  @media all and (max-width: 360px){
    width: 12%;
margin-left: 6px;
  }
  @media all and (max-width: 420px){
    width: 14%;
  }
`;


const Img = styled.img`
  display: block;
  width: 100%;
`;
const Para = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: grey;
  margin: 0 auto;
  @media all and (max-width: 420px){
  font-size: 12px;
  }
`;
const DivMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  display: none;
  padding: 7px;
  @media all and (max-width: 768px){
    width: 134px;
  }
`;
const DivButton = styled.div`
  position: absolute;
  bottom: 12px;
  text-align: center;
  left: 51px;
  bottom: 40px;

  @media all and (max-width: 980px) {
    width: 50%;
  }
  @media all and (max-width: 420px) {
    width: 75%;
  }
`;
