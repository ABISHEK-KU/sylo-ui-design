import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offerImage1 from "../asset/15589046_Summer_Sale_Background_4.jpg";
import offerImage2 from "../asset/12295629_4902560.jpg";
import offerImage3 from "../asset/1000_F_532167730_wMGTVR2Tl7GSwazHJr6pokScTCI1LOds.jpg";
import offerImage4 from "../asset/6366747_3282164.jpg";
import { isMobile } from "react-device-detect";
import styles from './style/AutoSwiper.module.css';

const images = [
  { id: 1, img: offerImage1 },
  { id: 2, img: offerImage2 },
  { id: 3, img: offerImage3 },
  { id: 4, img: offerImage4 },
];

const AutoSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    speed: 500,
    initialSlide: 0,
    autoplay:true,
    swipe: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    centerMode: true,
    swipeToSlide: true,
    customPaging: (i) => (
      <div
        className={` ${i === activeSlide ? styles.activeDot :styles.customDot}`}
        onClick={() => setActiveSlide(i)}
      />
    ),
    beforeChange: (currentSlide, nextSlide) => {
      setActiveSlide(nextSlide);
    },
  };

  return (
    <div className={styles.autoSwipercontainer}>
      <Slider {...settings}>
        {images.map((e, i) => (
          <div key={i + 1} className={styles.sliderItem}>
            <img
              src={e.img}
              alt={`thumb ${e.id}`}
              className={`${styles.centeredImage} ${styles.roundedImage}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSwiper;
