import styled from "styled-components";

import LandingImg from "../../assets/landing.jpg";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
import Img5 from "../../assets/img5.png";

const Portfolio = () => {
  return (
    <Style>
      <div>
        <div>
          <img src={Img1} alt="sample" className="img-fluid" />
          <img src={Img2} className="img-fluid" />
          <img src={Img3} className="img-fluid" />
        </div>
        <div>
          <img src={LandingImg} alt="sample" className="img-fluid" />
          <img src={Img4} className="img-fluid" />
          <img src={Img5} className="img-fluid" />
        </div>
      </div>
    </Style>
  );
};

export default Portfolio;

const Style = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 3000px;
  }
`;
