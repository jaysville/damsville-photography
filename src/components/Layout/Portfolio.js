import styled from "styled-components";

import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
import Img5 from "../../assets/img5.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Portfolio = () => {
  const itemData = [Img1, Img2, Img3, Img4, Img5];
  return (
    <Style>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {itemData.map((item) => {
          return (
            <SwiperSlide>
              <img src={item} className="img-fluid" alt="banner" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Style>
  );
};

export default Portfolio;

const Style = styled.section`
  display: flex;
  background-color: #f8f3e0;
  flex-direction: column;
  align-items: center;
`;
