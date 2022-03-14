import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../includes/Header";
import Congrats from "../includes/modal/Congrats";
import ScreenHeader from "../includes/ScreenHeader";

import Chooseprofile from "../Screens/Chooseprofile";
import Cover from "../Screens/Cover";
import Details from "../Screens/Details";
import Examstart from "../Screens/Examstart";
import Landing from "../Screens/Landing";

import Locks from "../Screens/Locks";

import Tefunexam from "../Screens/Tefunexam";
import Videoannouced from "../Screens/Videoannouced";
import Videodate from "../Screens/Videodate";
import Videolock from "../Screens/Videolock";
import Videologout from "../Screens/Videologout";
import Videos from "../Screens/Videolock";

export default function AppRouter() {
  const [menuIconClick, setMenuIconClick] = useState(false);

  console.log("in app router");
  return (
    <div>
      {/* <ScreenHeader /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Header
              menuIconClick={menuIconClick}
              setMenuIconClick={setMenuIconClick}
            />
          }
        >
          <Route
            path="/"
            element={
              <Cover
                menuIconClick={menuIconClick}
                setMenuIconClick={setMenuIconClick}
              />
            }
          />

          <Route path="/congrats" element={<Congrats />} />
        </Route>
        <Route
          path="/"
          element={
            <ScreenHeader
              menuIconClick={menuIconClick}
              setMenuIconClick={setMenuIconClick}
            />
          }
        >
        <Route path="/details" element={<Details />} />
        <Route path="/Chooseprofile" element={<Chooseprofile />} />
        <Route path="/exam-start" element={<Examstart />} />
        <Route path="/Locks" element={<Locks />} />
        <Route path="/tefun-exam" element={<Tefunexam />} />
        <Route path="/video-annouced" element={<Videoannouced />} />
        <Route path="/video-date" element={<Videodate />} />
        <Route path="/video-lock" element={<Videolock />} />
        <Route path="/video-log" element={<Videologout />} />
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/video" element={<Videos/>}/>

        </Route>
      </Routes>
    </div>
  );
}
