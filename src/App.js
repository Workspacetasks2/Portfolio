import React from 'react'
import Header from './Component/Header/Header';
import Knowledge from './Component/Knowledge/Knowledge';
import About from './Component/About/About';
import Projects from './Component/Projects/Projects';
import Services from './Component/Services/Services';
import "./Component/Style/Style.css";
import Home from './Component/Home/Home';
import MyExp from './Component/Experience/MyExp';
import Footer from "./Component/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ReactNavbar from 'overlay-navbar/dist/lib/ReactNavbar';
import "overlay-navbar/dist/lib/ReactNavbar.min.css"
import Wattsapp from './Component/Wattsapp';
const App = () => {
  return (
    <>
      <Router>
        <main className='main d-lg-none'>
          <ReactNavbar
            logo="assets/image/Haseeb_Pic.png"
            burgerColor="#00a3ff"
            navColor1="#080c13"
            burgerColorHover="#17161d"
            logoWidth="50%"
            logoHoverColor="crimson"
            link1Size="1.5rem"
            link1Color="#b0b0b0"
            link1Padding="1vmax"
            link1ColorHover="crimson"
            nav2justifyContent="flex-end"
            link1Margin="1vmax"
            link2Margin="0"
            link3Margin="0"
            link4Margin="1vmax"
            nav3justifyContent="flex-start"
            link1Text="Who I'm"
            link1Family="sans-serif"
            link2Text="Products"
            link3Text="Services"
            link4Text="Knowledge"
            link1Url="#s-about"
            profileIconMargin="0.5vmax"
            searchIconColor="#121212"
            cartIconColor="#121212"
            profileIconColor="#121212"
            searchIconColorHover="crimson"
            cartIconColorHover="crimson"
            profileIconColorHover="crimson"
          />
        </main>
        <Wattsapp />
        <Header />
        <Home />
        <About />
        <div className='d-lg-none'>
          <MyExp />
        </div>
        <Projects />
        <Services />
        <Knowledge />
        <Footer />
      </Router>
    </>
  )
}

export default App;
