import React from "react";
import Campus from "./Campus";
import Certificate from "./Certificate";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Joins from "./Joins";
import Mobile from "./Mobile";
import Questions from "./Questions";
import Spotlight from "./Spotlight";
import Story from "./Story";
import Students from "./Students";
import styled from "styled-components";

export default function ({menuIconClick, setMenuIconClick}) {
  return (
    <div className="main">
      <Wrapper>
          <Spotlight menuIconClick={menuIconClick} setMenuIconClick={setMenuIconClick}/>
          <Story />
          <Campus />
          <Gallery />
          <Certificate />
          <Joins />
          <Students />
          <Mobile />
          <Questions />
      </Wrapper>
      <Footer />
    </div>
  );
}

const Wrapper = styled.div`
  /* width: 90%; */
  margin: 0 auto;
  max-width: 1280px;
  margin-top: 150px;
  overflow-x: hidden;
`;
