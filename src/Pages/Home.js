import styled from "styled-components";
import Landing from "../components/Layout/Landing";
import Portfolio from "../components/Layout/Portfolio";

const Home = () => {
  return (
    <Style>
      <Landing />
      <Portfolio />
    </Style>
  );
};

export default Home;

const Style = styled.div``;
