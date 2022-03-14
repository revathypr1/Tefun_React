import logo from './logo.svg';
import './App.css';
import Header from './Components/includes/Header';
import Spotlight from './Components/Screens/Spotlight';
import Gallery from './Components/Screens/Gallery';
import Certificate from './Components/Screens/Certificate';
import Story from './Components/Screens/Story'
import Campus from './Components/Screens/Campus'
import Joins from './Components/Screens/Joins'
import Students from './Components/Screens/Students';
import Mobile from './Components/Screens/Mobile';
import Questions from './Components/Screens/Questions';
import styled from 'styled-components';
import Footer from './Components/Screens/Footer';
import Videos from './Components/Screens/Videos';
import Details from './Components/Screens/Details';
import Landing from './Components/Screens/Landing';
import Hurrypop from './Components/includes/modal/Hurrypop';
import Congrats from './Components/includes/modal/Congrats';
import Locks from './Components/Screens/Locks';
import Tefunexam from './Components/Screens/Tefunexam';
import Chooseprofile from './Components/Screens/Chooseprofile';
import Examstart from './Components/Screens/Examstart';
import Time from './Components/Screens/Time';
import Videolock  from './Components/Screens/Videolock'
import { BrowserRouter as Router,Route } from "react-router-dom"
import MainRouter  from './Components/routes/MainRouter';
import Videoannouced from './Components/Screens/Videoannouced';
import Videodate from './Components/Screens/Videodate'
import Videologout from './Components/Screens/Videologout'
import Welcome from './Components/includes/modal/Welcome';
// import Congrats from './Components/includes/modal/Congrats';
// import Hurrypop from './Components/includes/modal/Hurrypop';
import ScreenHeader from './Components/includes/ScreenHeader';
import LogoutForm from './Components/includes/LogoutForm';

function App() {
  return (
    <>
    <Router>
      <MainRouter/>
    </Router>
    {/* <Details/> */}
    {/* <Welcome/>
    <Videoannouced/>
    <Videodate/>
   <Videologout/> 
   <Hurrypop/>
   <Congrats/> */}
   {/* <Videos/> */}
   {/* <LogoutForm/> */}
   
   
    </>
  )};


export default App;


