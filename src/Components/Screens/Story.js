import React from "react";
import styled from "styled-components";
import Human from "../../assests/images/person.jpeg";
import Two from "../../assests/images/imagetwo.jpeg";
import Three from "../../assests/images/imagethree.jpeg";
import play from "../../assests/images/play-solid.svg";

export default function () {
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
          <Li>
            <Image src={Human} alt="person" />
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
          <Li>
            <Image src={Two} alt="person" />
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
          <Li>
            <Image src={Three} alt="person" />
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
          <Li>
            <Image src={Human} alt="person" />
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
          <Li>
            <Image src={Two} alt="person" />
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
          <Li>
            <Image src={Three} alt="person" />
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
          <Li>
            <Image src={Human} alt="person" />
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
          <Li>
            <Image src={Two} alt="person" />
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
          <Li>
            <Image src={Three} alt="person" />
            <DivButton className="btton">
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
          <Li>
            <Image src={Human} alt="person" />
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
          <Li>
            <Image src={Two} alt="person" />
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
          <Li>
            <Image src={Three} alt="person" />
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
        </Ul>
      </MainDiv>
    </>
  );
}
const MainDiv = styled.div``;
const H1 = styled.h1`
  font-size: 45px;

  color: rgb(15, 167, 111);
  align-items: center;
  text-align: center;
`;
const H2 = styled.h2`
  align-items: center;
  text-align: center;
  font-size: 37px;
`;
const P = styled.p`
  width: 100%;
  color: rgb(84, 84, 84);
  font-size: 22px;
  text-align: center;
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
const Li = styled.li`
  border-radius: 10px;
  margin: 0px 10px 20px;
  padding: 15px;
  position: relative;
  width: calc(25% - 20px);
  list-style: none;
  position: relative;
  transition-duration: 0.6s;
  &:hover {
    .button {
      bottom: 80px;
      transition-duration: 0.6s;
    }
    .main {
      display: flex;
    }
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
  /* position: absolute;
bottom: 4%; */
  /* left: 18%; */
  background: #fff;
  border-radius: 10px;
  padding: 5px;
  width: 16%;
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const Para = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;
const DivMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  display: none;
  padding: 7px;
`;
const DivButton = styled.div`
  position: absolute;
  bottom: 12px;
  text-align: center;
  left: 51px;
  bottom: 40px;
`;
