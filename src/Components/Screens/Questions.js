import React, { useState } from "react";
import styled from "styled-components";
import Down from "../../assests/images/down-arrow.svg";
export default function Questions() {
  const [selectedId, setSelectedId] = useState("");
  const [faqLists] = useState([
    {
      id: 1,
      question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
      answer:
        "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
    },
    {
      id: 2,
      question:
        "എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?",
      answer:
        "ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.",
    },
    {
      id: 3,
      question: "എന്താണ് Tefun ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?",
      answer:
        "ലളിതവും രസകരവുമായ ടെക്ക്നോളജി പഠനമാണ് Tefun പ്രോഗ്രാമിലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാകുന്നത്. AI, Robotics, IoT, 3D Printing, Metaverse, web 3.0 എന്നിങ്ങനെ 70-ൽപ്പരം ഭാവിയിലെ ടെക്ക്നോളജി സാധ്യതകളെക്കുറിച്ചാണ് Tefun വിദ്യാർത്ഥികളുടെ മുൻപിലേക്ക് എത്തിക്കുന്നത്. Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.",
    },
    {
      id: 4,
      question: "Tefun പ്രോഗ്രാം നിലവിലെ പഠനത്തെ ബാധിക്കുമോ?",
      answer:
        "അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്.",
    },
    {
      id: 5,
      question:
        "വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?",
      answer:
        "Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
    },
  ]);

  const faqs = () => {
    return faqLists.map((faqlist) => (
      <DivItem
        onClick={() => {
          if (faqlist.id === selectedId) {
            setSelectedId("");
          } else {
            setSelectedId(faqlist.id);
          }
        }}
        className={faqlist.id === selectedId && "active"}
      >
        <Question key={faqlist.id}>
          <P>{faqlist.question}</P>
          <Drop className="drop">
            <img src={Down} alt="Drop-Down" />
          </Drop>
        </Question>
        <Answer className={faqlist.id === selectedId && "answer"}>
          {faqlist.answer}
        </Answer>
      </DivItem>
    ));
  };

  return (
    <div>
      <MainDiv>
        <H1>
          <Small>Frequently</Small>
          Asked Questions
        </H1>
        <DivList>{faqs()}</DivList>
      </MainDiv>
    </div>
  );
}
const MainDiv = styled.div`
  margin-bottom: 20px;
  margin-bottom: 32px;
  font-size: 34px;
  margin-top: 75px;
`;
const H1 = styled.h1`
  color: rgb(45, 45, 45);
  text-align: center;

  font-size: 34px;
`;
const Small = styled.div`
  color: rgb(15, 167, 111);
`;
const DivList = styled.div`
  padding: 51px 101px;
@media all and (max-width: 980px){
  margin-top: 36px;
  padding: 0 0;
}
 
`;
const DivItem = styled.div`
  min-height: 75px;
  border-radius: 2px;
  background-color: rgb(243, 249, 235);
  padding: 0px 30px;
  border-radius: 4px;
  min-height: 60px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 20px;
  justify-content: space-between;

  align-items: center;
`;
const P = styled.p`
  font-size: 17px;
  width: 531px;

  padding: 10px 0px;
  &:last-child {
    margin-bottom: 0%;
  }
  &:hover {
    cursor: pointer;
  }
  &.active .answer {
    display: block;
  }
  &.active .drop {
    transform: rotate(180deg);
  }
  @media all and (max-width: 640px){
    padding:0 0 0 0;
    }

`;
const Span = styled.span`
  display: block;
  transition: all 0.3s ease 0s;
`;
const Img = styled.img`
  padding-left: 120px;
  width: 100px;
  display: block;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
`;

const Drop = styled.div`
  padding: 0 35px 3px 366px;

  @media all and (max-width: 769px){
    padding: 0 0 0 0;
  }
`;
const Answer = styled.p`
  font-size: 18px;
  display: none;
  transition: all 0.3s ease 0s;
  &.answer {
    display: block;
  }
`;
