import styled from "styled-components";
import Landing from "./components/Layout/Landing";
import Portfolio from "./components/Layout/Portfolio";
// import { Routes, Route } from "react-router-dom";
import SideNav from "./components/Layout/SideNav";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prevState) => !prevState);
  };

  return (
    // <Routes></Routes>
    <Container>
      {showSideNav && <SideNav onToggleSideNav={toggleSideNav} />}
      <Landing onToggleSideNav={toggleSideNav} />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: auto 30px;
`;
