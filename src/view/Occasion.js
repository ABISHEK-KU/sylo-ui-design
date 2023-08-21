import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BirthDay from "../asset/birthday.jpg";
import Anniversary from "../asset/Anniversary.jpg";
import BrideToBe from "../asset/bride.jpg";
import Promotion from '../asset/promotion.jpg';
import Baby from '../asset/baby.jpg';
import Graduation from '../asset/graduation.jpg'
import Breakup from '../asset/heart.jpg'
import Farewell from "../asset/farwell.jpg";
import { isMobile } from 'react-device-detect';
import styles from './style/Occasion.module.css';
import styled from 'styled-components';

const CustomSlider = styled(Slider)`
  .slick-track {
    width:100% !important;
  }
  .slick-slide{
    margin-left:12px;
    margin-right:12px;
  }
`;

const Occasion = () => {
  
  const images = [
    { id: 1, img: BirthDay, title: 'Birthdays' },
    { id: 2, img: Anniversary, title: 'Anniversary' },
    { id: 3, img: BrideToBe, title: 'Bride to Be' },
    { id: 4, img: Promotion, title: 'Promotion' },
    { id: 5, img: Baby, title: 'Baby shower' },
    { id: 6, img: Graduation, title: 'Graduation' },
    { id: 7, img: Breakup, title: 'Break Up' },
    { id: 8, img: Farewell, title: 'Farewell' },
  ];

  const settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipe: true,
    slidesToShow: isMobile ? 4: 4,
    slidesToScroll: isMobile ? 4: 4, 
    centerMode: true,
    row: 2,
    slidesPerRow: 2,
  };

  return (
    <div>
      <div className={styles.occasionMain}>
        <b>Abishek, What's Your Occasion</b>
      </div>
      <div className={styles.occasionSlider}>
        <CustomSlider {...settings}>
          {images.map((e, i) => (
            <div key={i + 1} className={styles[`occasion-item`]}>
              <img
                src={e.img}
                alt={`thumb ${e.id}`}
                className={`${styles['occasion-centered-image']} ${styles['occasion-rounded-image']}`}
              />
              <p className={styles.occasionTitle}>{e.title}</p>
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

export default Occasion;
