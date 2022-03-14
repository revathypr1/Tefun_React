import React from "react";
import styled from "styled-components";
import Back from "../../assests/images/back.svg";
import book from "../../assests/images/book.svg";
import cap from "../../assests/images/cap.svg";
import school from "../../assests/images/school.svg";
import Logout from "../../assests/images/logout.svg";

export default function ({ menuIconClick, setMenuIconClick }) {
  return (
    <div>
      <SlideBar >
        <DivSpace className={ menuIconClick ? "active" : "" } >
          <DivLog>
            <LeftList>
              <Down src={Back} alt="images" />
            </LeftList>
            <Right>
              <Title>profile</Title>
            </Right>
          </DivLog>
          <Center>
            <DivCirlce>
              <Accout>M</Accout>
            </DivCirlce>
            <Heading>Mark Anderson</Heading>
            <Phone href="tel:974698853"> (+91 9746098853)</Phone>
          </Center>
          <DivTotal>
            <Total>
              <DivCollege>
                <College src={school} alt="images" />
              </DivCollege>
              <Divname>
                <Small>campus</Small>
                <Sentence>Jamia Nathiya arts & science college</Sentence>
              </Divname>
            </Total>
            <Total>
              <DivCollege>
                <College src={book} alt="images" />
              </DivCollege>
              <Divname>
                <Small>class</Small>
                <Sentence>IV</Sentence>
              </Divname>
            </Total>
            <Total>
              <DivCollege>
                <College src={cap} alt-="images" />
              </DivCollege>
              <Divname>
                <Small>Divistion</Small>
                <Sentence>B</Sentence>
              </Divname>
            </Total>
          </DivTotal>

          <DivOut>
            <ListOne>
              <One src={Logout} alt="images" />
              <Lock>Logout</Lock>
            </ListOne>
          </DivOut>
        </DivSpace>
      </SlideBar>
      <Wrapper></Wrapper>
    </div>
  );
}
const Wrapper = styled.div``;

const SlideBar = styled.div`
  margin: 130px auto;
  /* padding: 10% 0 0 0; */
  position: relative;
`;
const DivSpace = styled.div`
  position: absolute;
  right: -1000px;
  z-index: 57;
  width: 326px;
  height: 626px;
  background: #fff;
  &.active{
    right: 0;
  }
`;
const DivLog = styled.div`
  display: flex;
  margin: 0 auto;
  width: 20%;
  margin-bottom: 30px;
  margin-top: 30px;
`;
const LeftList = styled.div`
  width: 27%;
`;
const Down = styled.img`
  width: 100%;
  display: block;
  margin-left: -35px;
`;
const Right = styled.div`
  width: 50%;
`;
const Title = styled.h3`
  margin-right: 103px;
  font-size: 20px;
`;
const Center = styled.div`
  text-align: center;
`;
const DivCirlce = styled.div`
  background: #56b45c;

  width: 14%;
  margin: 0 auto;
  border-radius: 51%;
  padding: 1%;
`;
const Accout = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #ffff;
`;
const Heading = styled.h1`
  font-size: 18px;
  margin-top: 10px;
`;
const Phone = styled.a`
  font-size: 12px;
  color: #60b194;
`;
const DivTotal = styled.ul`
  margin-bottom: 40px;
`;
const Total = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  width: 80%;
  border: 1px solid #f8faf5;
  background: #f8faf5;
  margin-bottom: 10px;
  border-radius: 7px;
`;
const DivCollege = styled.div`
  width: 9%;
`;
const College = styled.img`
  width: 100%;
  display: block;
`;
const Divname = styled.div`
  margin-left: 20px;
`;
const Small = styled.small`
  font-size: 12px;
  color: #8f9699;
`;
const Sentence = styled.p`
  font-size: 13px;
`;
const DivOut = styled.div`
  margin-bottom: 40px;
`;
const ListOne = styled.div`
  width: 4%;
  display: flex;
  margin: 0 auto;
`;
const One = styled.img`
  width: 100%;
  display: block;
  margin-left: 10px;
`;
const Lock = styled.p`
  font-size: 16px;
  color: red;
  margin-left: 10px;
`;
