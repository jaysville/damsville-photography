import styled from "styled-components";
import Header from "../Header";
import LandingImg from "../../assets/landing.jpg";
import { Button } from "../UI/Button";

const Landing = (props) => {
  return (
    <Style>
      <Header onToggleSideNav={props.onToggleSideNav} />
      <div className="mt-5">
        <h1>Damsville Photography</h1>
        <div className="d-flex justify-content-center mt-5">
          <Button>Book Now</Button>
        </div>
      </div>
    </Style>
  );
};

export default Landing;

const Style = styled.div`
  background-image: url(${LandingImg});
  height: 770px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(0.1px);

  @media (max-width: 650px) {
    background-position: center;
  }

  h1 {
    text-align: center;
    margin-top: 150px;
    color: #6b323c;
    font-family: "Dancing Script", sans-serif;
    font-size: 40px;
    @media (max-width: 1210px) {
      color: aliceblue;
    }
  }
`;
