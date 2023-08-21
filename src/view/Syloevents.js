import React from "react";
import "./style/Syloevents.css";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Syloevents() {
  const cardData = [
    {
      id: 1,
      title1: "Birthday",
      color1: {
        background:
          "linear-gradient(135deg, rgb(169, 180, 236) 55%, rgb(255, 221, 119) 72%)",
      },
      title2: "Farewell",
      color2: {
        background:
          "linear-gradient(135deg, hsla(48, 100%, 86%, 1) 55%, hsla(53, 91%, 87%, 1) 61%)",
      },
    },
    {
      id: 2,
      title1: "Anniversary",
      color1: {
        background: "linear-gradient(135deg, hsla(0, 0%, 91%, 1) 55%, hsla(0, 0%, 98%, 1) 72%)",
      },
      title2: "Graduation",
      color2: {
        background:"linear-gradient(135deg, hsla(186, 71%, 77%, 1) 28%, hsla(152, 82%, 59%, 1) 55%)",
      },
    },
    {
      id: 3,
      title1: "Promotion",
      color1: {
        background:" linear-gradient(135deg, hsla(121, 88%, 78%, 1) 55%, hsla(55, 71%, 77%, 1) 72%)",
      },
      title2: "Wedding",
      color2: {
        background:
          " linear-gradient(135deg, hsla(16, 90%, 74%, 1) 28%, hsla(16, 86%, 72%, 1) 51%)",
      },
    },
    {
      id: 4,
      title1: "Birde To Be",
      color1: {background:" linear-gradient(135deg, hsla(151, 51%, 84%, 1) 55%, hsla(244, 91%, 87%, 1) 61%)",},
      title2: "Baby Shower",
      color2: {
        background:
          "linear-gradient(135deg, hsla(186, 100%, 69%, 1) 28%, hsla(217, 100%, 80%, 1) 51%);",
      },
    },
  ];

  const settings = {
    dots: true,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    swipe: true,
    slidesToShow: isMobile ? 3: 4,
    slidesToScroll: isMobile ? 3 :4,
    centerMode: true,
    swipeToSlide: true,
  };

  return (
    <div className="syloMainCont">
      <div className="horizontalCont">
        <div className="horizontalText">
          <span className="arrowIcon leftArrow">
            <i className="bi bi-caret-left-fill"></i>
          </span>
          <p className="syloTitle">SYLO Select</p>
          <p className="syloCelebration">Exclusive Celebration Plans</p>
          <span className="arrowIcon rightArrow">
            <i className="bi bi-caret-right-fill"></i>
          </span>
        </div>
        <Slider {...settings} className="sliderheight">
          {cardData.map((e, i) => (
            <div key={e.id} className="eventCardContainer">
              <div className="cardMain">
                <div className="eventCard" style={e.color1}>
                  <p className="eventTitle">{e.title1}</p>
                  <button className="eventButton">Get this Package</button>
                </div>
              </div>
              <div className="cardMain">
                <div className="eventCard" style={e.color2}>
                  <p className="eventTitle">{e.title2}</p>
                  <button className="eventButton">Get this Package</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Syloevents;
