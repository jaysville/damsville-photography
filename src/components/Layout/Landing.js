import styled from "styled-components";

import LandingImg from "../../assets/landing.jpg";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <Style>
      <div>
        <h1>Damsville Photography</h1>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/contact">
            <Button>Book Now</Button>
          </Link>
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
  padding-top: 300px;
  @media (max-width: 650px) {
    background-position: center;
  }

  h1 {
    text-align: center;

    color: #6b323c;
    font-family: "Dancing Script", sans-serif;
    font-size: 40px;
    @media (max-width: 1210px) {
      color: aliceblue;
    }
  }
`;
