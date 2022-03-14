import React from "react";
import styled from "styled-components";
import Log from "../../assests/images/logo-grey.svg";
import Instagram from "../../assests/images/instagram-color.svg";
import Facebook from "../../assests/images/facebook.svg";
import Twitter from "../../assests/images/twitter.svg";
import Linkedin from "../../assests/images/linkedin.svg";
import YouTube from "../../assests/images/youtube.svg";
import Insta from "../../assests/images/instagram-color.svg";
import you from "../../assests/images/youtube-color.svg";
import twit from "../../assests/images/twitter-color.svg";
import Lin from "../../assests/images/linkedin-color.svg";
import fac from "../../assests/images/facebook-color.svg";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <MainDiv>
        <ListDiv>
          <Image src={Log} alt="" />
        </ListDiv>
        <ListOne>
          <Ul>
            <Li>
              <PicDiv to="/https://www.instagram.com/">
                <Pic2 className="gray" src={Instagram} alt="images" />
                <Pic className="color" src={Insta} alt="images" />
              </PicDiv>
              <PicDiv to="/https://in.linkedin.com/">
                <Pic2 className="gray" src={Linkedin} alt="images" />
                <Pic className="color" src={Lin} alt="images" />
              </PicDiv>
              <PicDiv to ="/https://www.facebook.com/">
                <Pic2 className="gray" src={Facebook} alt="images" />
                <Pic className="color" src={fac} alt="images" />
              </PicDiv>
              <PicDiv to ="/https://www.youtube.com/">
                <Pic2 className="gray" src={YouTube} alt="images" />
                <Pic className="color" src={you} alt="images" />
              </PicDiv>
            </Li>
          </Ul>
          {/* 
          <Pic2 src={Twitter} alt="images" />
          <Pic2 src={Facebook} alt="images" />
          <Pic2 src={Linkedin} alt="images" />
          <Pic2 src={YouTube} alt="images" />
          <Pic src={Insta} alt="images" />
          <Pic src={fac} alt="images" />
          <Pic src={twit} alt="images" />
          <Pic src={you} alt="images" />
          <Pic src={Lin} alt="images" /> */}
        </ListOne>
        <ListTwo>
          <A href="tel:974698853">91974609958</A>
          <A>yiaai@talrop.com</A>
        </ListTwo>
        <ListThree>
          <P to ="/https://www.talrop.com/">© 2022, Talrop Private Limited</P>
          <Small>Terms of service</Small>
          <Small>Privacy Policy</Small>
        </ListThree>
      </MainDiv>
    </div>
  );
}

const MainDiv = styled.div`
  margin: 0 auto;
  background-color: rgb(30, 30, 30);
  padding: 100px 0px 50px;

  /* @media all and (max-width:2800px){
    width: 90%;
  } */
`;
const ListDiv = styled.div`
  width: 11%;
  margin: 0 auto;
  margin-bottom: 28px;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const ListOne = styled.div`
  margin: 0 auto;
  /* align-items: baseline; */
  width: 11%;
  justify-content: space-between;
  margin: 0 auto;
  width: 14%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: flex;
@media all and (max-width: 420px){
  margin-left: 93px;
}
`;
const Pic = styled.img`
  margin-top: 10px;
  display: none;
  width: 100%;
  margin-left: 10px;
  color: grey;
  object-fit: contain;
  height: 30px;
`;
const Pic2 = styled.img`
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 26px;
  margin-left: 10px;
  color: grey;
  filter: grayscale(1);
  object-fit: contain;
`;
const ListTwo = styled.div`
  margin: 0 auto;

  text-align: center;
  margin-top: 16px;
`;
const A = styled.a`
  color: grey;
  margin-left: 11px;
`;
const ListThree = styled.div`
  display: flex;
  justify-content: space-between;
  width: 39%;
  margin: 0 auto;

  @media all and (max-width: 1280px){
    width:49%;
  }
  @media all and (max-width: 980px){
    width:66%;
  }
  @media all and (max-width: 980px){
  flex-wrap: wrap;
  }
`;
const P = styled(Link)`
  color: grey;
  margin-top: 18px;

  margin-left: -9px;
@media all and (max-width: 360px){
  width: 55%;
  margin-left: 0;
  margin: 0 auto;
}
 
`;
const Small = styled.a`
  color: grey;
  margin-top: 22px;

  @media all and (max-width: 360px){
  
  margin: 0 auto;
  margin-top: 9px;
}
`;
const Ul = styled.div``;
const Li = styled.div`
  display: flex;


`;
const PicDiv = styled(Link)`
  margin-left: 5px;
  width: 30px;
  cursor: pointer;
  &:hover .gray {
    display: none;
  }
  &:hover .color {
    display: block;
    transition: all ease 0.2s;
  }
`;
