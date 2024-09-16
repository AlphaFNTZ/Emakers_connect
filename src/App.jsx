import React, { useEffect, useState } from "react";
import { createGlobalStyle, styled } from "styled-components";
import Logo_NavBar from "../public/assets/Logo_NavBar.png";
import Screen_1 from "./Screens/Screen1";
import Screen_2 from "./Screens/Screen2";
import Screen_3 from "./Screens/Screen3";
import Screen_4 from "./Screens/Screen4";
import Screen_5 from "./Screens/Screen5";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    color: #ffffff;
    scroll-behavior: smooth; /* Ensure smooth scrolling */
  }
`;

// Container with scroll-snap-type for smooth scrolling
const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  z-index: 1;
`;

// Navbar
const NavBar = styled.div`
  position: fixed;
  top: ${(props) => (props.isVisible ? "0" : "-100px")};
  left: 0;
  height: 100px;
  width: 100%;
  background-color: white;
  z-index: 10;
  transition: top 0.5s ease;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: 100%;
  width: 190px;
  justify-content: center;
`;

// App Component
function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const page = Math.round(scrollY / window.innerHeight) + 1;
      setShowNavBar(page > 1);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <NavBar isVisible={showNavBar}>
        <Logo>
          <img src={Logo_NavBar} alt="" />
        </Logo>
      </NavBar>
      <Container>
        <Screen_1 id="screen1" />
        <Screen_2 id="screen2" />
        <Screen_3 id="screen3" />
        <Screen_4 id="screen4" />
        <Screen_5 id="screen5" />
      </Container>
    </>
  );
}

export default App;
