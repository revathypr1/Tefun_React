import React,{useState} from 'react'
import styled from 'styled-components'
import Logo from "../../assests/images/Logo.svg"
import Menu from "../../assests/images/menu-icon.svg"
import Bg from "../../assests/images/decorator.svg"
import flg from "../../assests/images/india-flag.jpeg"
import arrow from "../../assests/images/down-arrow.svg"
import phone from "../../assests/images/phone.svg"
import cross from "../../assests/images/close.svg"
import '../../App.css';

export default function Header() {
    const[menuIconClick,setMenuIconClick] = useState(false)

  return (
    <div>
        <Divcontainer >
            <Leftdiv>
                <H1>
                    <A>
                        <Image src={Logo} alt="logo"/>
                    </A>
                </H1>
                
            </Leftdiv> 
            <Rightdiv>
                <Divone>
                    <Button onClick={()=>{
                        setMenuIconClick(menuIconClick => !menuIconClick)
                    }} >
                        join now
                    </Button>
                </Divone>
                <Divtwo>
                    <Img src={Menu} alt="icon"/>
                </Divtwo>
            </Rightdiv>
        </Divcontainer>
            <DivNow className={menuIconClick ? 'active' : "" } >
                <LoginDiv>
                    <H2>Login to your account</H2>
                    <H3>Enter your registered phone number</H3>
                    <DivList>
                        <DivTotal>
                            <DivItem>

                                <ImageOne src={flg} lt="imge"/>
                            </DivItem>
                            <DivItemone>
                                <Pic src={arrow} lt="imge"/>
                            </DivItemone>
                        </DivTotal>
                        
                        <DivTwo>
                            <PicOne src={phone} lt="imges"/>
                            <Input type="text"  placeholder="Enter your phone number" />
                        </DivTwo>
                    </DivList>
                    <ButtonDiv>Next</ButtonDiv>
                    <DivContiner>
                        <POne>New to Yiaai?<Span>Create an account</Span></POne>
                    </DivContiner>
                    <P2>Terms of service</P2>
                    <Close onClick={()=>{
                        setMenuIconClick(menuIconClick => !menuIconClick)}}
                         >
                        <PicThree src={cross} alt="images"/>
                    </Close>
                
                </LoginDiv>
            </DivNow>


      

    </div>
  )
}
const Divcontainer=styled.div`width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position:fixed;
    z-index:5;
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    padding: 33px ;`;
const Leftdiv=styled.div``;
const H1=styled.h1``;
const A=styled.a``;
const Image=styled.img`
    display: block;
    width: 90%;`;
const Rightdiv=styled.div`
    display: flex;
    align-items: flex-end;`;
const Divone=styled.div``;
const Button=styled.button`
    
    border-radius:35%;
    display: block;
    color: rgb(255, 255, 255);
    font-size: 16px;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    transition: all 0.5s ease 0s;
    background-size: 200%;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);`;
const Divtwo=styled.div`
    margin-left: 19px;
    /* margin-bottom: 5px; */
    width:39px;`;
    /* width:20%;
    margin-left:12px;`; */
    
const Img=styled.img`
    display: block;
    width: 100%;
`;
const DivNow=styled.div`
    background: #fff;
    
    position: fixed;
    right: -100%;
    z-index: 1000;
    /* padding: 2px 627px; */
    width: 50%;
    height: 100vh;
    transition: all 1 ease;
&.active{
    right: 0px;
    top: 0px;
    transition: all 1 ease;
}
`;
const LoginDiv=styled.div`
    background-image: url(${Bg});
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    overflow-y: scroll;
    z-index: 500;
    /* background: rgb(255, 255, 255); */
    width: 600px;
    padding: 0px 60px;

`;
const H2=styled.h2`
font-size: 25px;
    line-height: 1.4em;
    margin-bottom: 64px;
    margin-top:44%;
    font-weight: 600;
    `;
const H3=styled.h3`
   
    
   margin-top: -84px;

    font-size: 14px;
    font-weight:600;`;
const DivList=styled.div`
   display:flex;
   
    align-items: center;
    justify-content: space-between;`;
const DivTotal=styled.div`

    display: flex;
    justify-content: space-between;
    margin-left: 44px;

`;
const DivItem=styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    overflow: hidden;
    
   
    justify-content: center;
   
`;
const ImageOne=styled.img`
width: 100%;
display: block;

`;
const DivItemone=styled.div`

    width: 18px;
    margin-left: 13px;
    margin-top: 7px;
`;
const Pic=styled.img`
width:100%;
display:block;
`;
const DivTwo=styled.div`

border-color: rgb(47,51,55);
    
    border: 1px solid #000;
    border-radius: 9px;
    padding: 9px 44px;
    `;
  
const PicOne=styled.img `

    margin-right:12px;
    
    
`;
const Input=styled.input`
  
    width: 81%;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 17px;
    padding-left: 5px;
    caret-color: rgb(92, 198, 106);`;

const ButtonDiv=styled.button`
 border-radius:35%;
    display: block;
    color: rgb(255, 255, 255);
    font-size: 16px;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    transition: all 0.5s ease 0s;
    background-size: 200%;
    background: linear-gradient(to right,rgb(99,187,76) 0%,rgb(24,152,175) 51%,rgb(99,187,76) 100%);
   
`;
const DivContiner=styled.div`
margin:0 auto ;
`;
const POne=styled.p``;
const Span=styled.span`
color:green;
text-align:center;`;

const P2=styled.p`
text-align:center;
font-weight: 300;
font-size: 14px;
margin-top: -20px;
    font-weight: 400;
`;
const Close=styled.div`
width: 3%;
    left: 7%;
    position: absolute;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
    left: -3%;

&.active{
    right: 0px;
    top: 0px;
}
`;
const PicThree=styled.img`
width:100%;
display:block`;


