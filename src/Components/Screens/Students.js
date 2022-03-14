import React from 'react'
import styled from 'styled-components'
import Join from "../../assests/images/join-img.png"

export default function Students() {
  return (
    <MainDiv>
        <DivItem>
            <H1>How</H1>
            <H2> Students can Join </H2>
        </DivItem>
        <DivList>
            <LeftDiv>
                <Ul>
                    <Li>
                        <H3><B>Talrop</B>-ന്റെ Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ (yia.ai) ഓൺലൈനായി Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാം.</H3>
                        <Small class="first">
                            "01"
                        </Small>
                    </Li>
                    <Li>
                        <H3>വിദ്യാർത്ഥികൾക്ക് ലോഗിൻ ചെയ്ത് Tefun പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം.</H3>
                        <Small class="first">
                            "02"
                        </Small>
                    </Li>
                    <Li>
                        <H3>Virtual സ്കൂളിങ്ങിലൂടെ വിദ്യാർത്ഥികൾക്ക് ഇഷ്ടമുള്ള സമയത്ത് ഇഷ്ട മുള്ള സ്ഥലത്തുവെച്ചു ക്ലാസ്സുകൾ കാണാൻ സാധിക്കും..</H3>
                        <Small class="first">
                            "03"
                        </Small>
                    </Li>
                    <Li>
                        <H3>
                            പ്രോഗ്രാം പൂർത്തിയാക്കിയതിനുശേഷം സ്കൂൾ മുഖാന്തരം..</H3>
                        <Small class="first">
                            "04"
                        </Small>
                    </Li>
                   
                </Ul>
            </LeftDiv>
            <RightDiv>
                <ImageDiv>
                    <Img src={Join} alt="images"/>
                </ImageDiv>
            </RightDiv>
        </DivList>
    </MainDiv>
  )
}

const MainDiv=styled.div`
padding: 50px 59px;
`;
const DivItem=styled.div``;
const H1=styled.h1`
color: rgb(15, 167, 111); ;
`;
const H2=styled.h2`
color: #000;
font-size:40px;`;
const DivList=styled.div`
    margin-top: 30px;
    display: flex;
    position: relative;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const LeftDiv=styled.div`
    width: 52%;
    padding-left: 3%;`;
const Ul =styled.ul`
width: 100%;
&::before{
        content: "";
        position: absolute;
        z-index: -1;
        width: 1px;
        height: 75%;
        border-left: 2px dotted #5aa870;
        left: 2%;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }
`;
const Li=styled.li`
margin-bottom: 20px;
    padding: 15px 15px 15px 35px;
    display: flex;
    
    justify-content: center;
   
    align-items: center;
    width: 80%;
    height: 130px;
    border-radius: 20px;
    position: relative;
    background: rgb(254, 247, 236);
`;
const H3=styled.h3`
   
   font-size: 16px;
    font-weight: 500;
    color: grey;

`;
const Small=styled.small`
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 3px solid rgb(15, 167, 111);
    position: absolute;
    left: -33px;
`;
const B=styled.b`
font-weight: 700;
`;
const RightDiv=styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 40%;
    `;
const ImageDiv=styled.div`
top: 113px;
width: 95%;
`;
const Img=styled.img`
width:100%;
display:block;`;

