import React, { useState, useRef } from "react";
import "./style/CustomerReel.css";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../asset/istockphoto-1467967773-640_adpp_is.mp4";
import video2 from "../asset/mixkit-young-man-missing-a-bowling-shot-49117-medium.mp4";

function CustomerReel() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const settings = {
    dots: true,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    swipe: true,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: isMobile ? 2 : 4,
    centerMode: true,
    swipeToSlide: true,
  };

  const toggleVideo = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isVideoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="customerReelCont">
      <p className="customerReelHeader">
        See what our <span className="highlightText">customer</span> say!
      </p>
      <Slider {...settings} className="reelSlider">
        {[video1, video2].map((e, i) => {
          return (
            <div className="reel-container" key={i}>
              <div className="video-wrapper">
                <video ref={videoRef} className="video-player" loop muted>
                  <source src={e} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button className="play-button" onClick={toggleVideo}>
                  <i className={`bi bi-${isVideoPlaying ? "pause" : "play-fill"}`}></i>
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CustomerReel;
