import React from 'react'
import styled from 'styled-components'
import Log from "../../assests/images/logo-grey.svg"
import Instagram from "../../assests/images/instagram-color.svg"
import Facebook from "../../assests/images/facebook.svg"
import Twitter from "../../assests/images/twitter.svg"
import Linkedin from "../../assests/images/linkedin.svg"
import YouTube from "../../assests/images/youtube.svg"


export default function 
() {
  return (
    <div>
        <MainDiv>
            <ListDiv>
                <Image src={Log} alt=""/>
            </ListDiv>
            <ListOne>
                <Pic src={Instagram} alt="images"/>
                <Pic src={Facebook} alt="images"/>
                <Pic src={Twitter} alt="images"/>
                <Pic src={Linkedin} alt="images"/>
                <Pic src={YouTube} alt="images"/>
            </ListOne>
            <ListTwo>
                <A>918589998744</A>
                <A>yiaai@talrop.com</A>
            </ListTwo>
            <ListThree>
                <P>© 2022, Talrop Private Limited</P>
                <Small>Terms of service</Small>
                <Small>Privacy Policy</Small>
            </ListThree>
        </MainDiv>
    </div>
  )
}

const MainDiv=styled.div`
margin: 0 auto;
background-color: rgb(30, 30, 30);
    padding: 100px 0px 50px;
`;
const ListDiv=styled.div`
    width: 11%;
    margin: 0 auto;
    margin-bottom: 28px;
`;
const Image=styled.img`
width: 100%;
display: block;
`;
const ListOne=styled.div`
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
    `;
const Pic=styled.img`
margin-top:10px;
display:block;
width:100%;
margin-left: 10px;
color: grey;
`;
const ListTwo=styled.div`
margin:0 auto;

text-align: center;
margin-top: 16px;
`;
const A=styled.a`
color:grey;
margin-left: 11px;

`;
const ListThree=styled.div`
display:flex;
justify-content:space-between;
width: 39%;
    margin: 0 auto;
    `;
const P=styled.p`
color:grey;
margin-top:18px;

margin-left: -9px;
`;
const Small=styled.a`
color:grey;
margin-top:22px`;
