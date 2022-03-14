import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Play from "../../assests/images/grey-and-play.svg"
import Mobile from "../../assests/images/mobile-app.png"

export default function() {
  return (
    <div>
        <MainDiv>
            <ListLeft>
                <H3>
                Download Our Mobile App to Make it Easier
                </H3>
                <P>
                Tefun-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ yia.ai മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                </P>
                <ImgDiv to ="/">
                    <Image src={Play} alt="image"/>
                    <Image src={Play} alt="image"/>

                </ImgDiv>
            </ListLeft>
            <ListRight >
                
                    <Img src={Mobile} alt="images"/>
                
            </ListRight>
        </MainDiv>
    </div>
  )
}

const MainDiv=styled.div`
    padding: 52px 131px;
display: flex;
position: relative;
background-color: rgb(243, 249, 235);
    border-radius: 20px;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

    @media all and (max-width:1280px){
        flex-wrap: wrap;
    } 
    
`;
const ListLeft=styled.div`
width: 50%;
@media all and (max-width: 980px){
    width: 100%;
}
`;
const H3=styled.h3`
font-size:30px;
font-weight: 500;
width: 46%;
margin-bottom: 29px;
font-size: 26px;
    font-weight: 700;
    width: 56%;

    @media all and (max-width: 1080px){
        width: 62%;
    }
    @media all and (max-width: 980px){
     width: 50%;
    }
    @media all and (max-width: 786px){
     width: 67%;
    }
    @media all and (max-width: 786px){
     width: 113%;
    }

`;
const P=styled.p`
color:grey;
font-size:18px;
margin-bottom: 22px;
@media all and (max-width: 786px){
  font-size: 14px;
    }

`;
const ListPlay=styled.div``;
const ImgDiv=styled(Link)`
width:32%;
display:flex;
justify-content:space-between;`;
const Image=styled.img`
width:100%;
display:block;
margin-left: 20px;
`;
const ListRight=styled.div`
width: 45%;
    position: absolute;
    right: 0;
    bottom: -25%;
    
    /* @media all and (max-width: 980px){
        width: 100%;
        position: ;
        bottom: 0;
    } */
    @media all and (max-width: 980px){
     position: static;
     margin: 0 auto;
    width: 100%;
    margin-top: 20px;
    }
    `;
const PicDiv=styled.div`
width:100px;`;
const Img =styled.img`
display: block;
width: 100%;


`;
