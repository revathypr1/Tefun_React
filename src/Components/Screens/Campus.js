import React from "react";
import styled from "styled-components";
import College from "../../assests/images/jamiya.png";

export default function () {
  return (
    <div>
      <CampusDiv>
        <Section class="wrapper" />
        <H1>
          Associated <Small>Campuses</Small>
        </H1>
        <P>
          Various institutions have joined hands with us, to train their
          students and improve their employability skills, along with moulding
          them to be future entrepreneurs.
        </P>
        <DivMain>
          <Ul>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art $ science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
            <Li>
              <CampusPic src={College} alt="Campus" />
              <H4>Jamia nadwiaya art & science college</H4>
              <Span>Malappuram</Span>
            </Li>
          </Ul>
        </DivMain>
        <Para>
          And <Num>300</Num>more campus All our kerala
        </Para>
      </CampusDiv>
    </div>
  );
}
const CampusDiv = styled.div`
  border-radius: 35px;
  overflow: hidden;
  background-color: rgb(243, 249, 235);
`;
const Section = styled.div``;
const H1 = styled.h1`
  font-size: 45px;
  margin-bottom: -24px;
  color: rgb(15, 167, 111);
  align-items: center;
  text-align: center;
`;
const Small = styled.small`
  color: black;
  font-size: 40px;
`;
const P = styled.p`
  width: 55%;
  color: grey;
  font-size: 15px;
  text-align: center;
  align-items: center;
  margin: 56px auto;
`;
const DivMain = styled.div``;
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
  padding: 8px;
  position: relative;
  width: calc(16% - 59px);
  list-style: none;
`;
const CampusPic = styled.img`
  width: 30%;
`;
const H4 = styled.h4`
  color: grey;
  font-size: 14px;
`;
const Span = styled.span`
  color: rgb(15, 167, 111);
  font-size: 15px;
  display: block;
`;
const Para = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 51px;
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
`;
const Num = styled.span`
  color: rgb(15, 167, 111);
  font-size: 18px;
  font-weight: 300;
`;
