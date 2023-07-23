import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/Contact";
import PortfolioPage from "./Pages/Portfolio";
import About from "./Pages/About";
import SideNav from "./components/Layout/SideNav";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prevState) => !prevState);
  };

  return (
    <Container>
      {showSideNav && <SideNav onToggleSideNav={toggleSideNav} />}
      <Header onToggleSideNav={toggleSideNav} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: auto 30px;
`;
