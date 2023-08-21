
import React from "react";
import "./style/Venues.css";
import cafeImg from "../asset/cafe1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";

const venuesData = [
  {
    id: 1,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
  {
    id: 2,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },{
    id: 3,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },{
    id: 4,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },{
    id: 5,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
  {
    id: 6,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
  {
    id: 7,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
  {
    id: 8,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
  {
    id: 9,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
];

function Venues() {

  const settings = {
    dots: false,
    initialSlide: 0,
    swipe: true,
    infinite: true,
    speed: 500,
    arrow: true,
    slidesToShow:isMobile?2:7,
    slidesToScroll: 1,
    prevArrow: <i className="bi bi-arrow-left-circle slider-arrow left-arrow"></i>,
    nextArrow: <i className="bi bi-arrow-right-circle slider-arrow right-arrow"></i>,
  };

  return (
    <div className="venuesContainer">
      <p className="venuesTitle">
        <span className="bi bi-star-fill star"></span> Most Popular Venues{" "}
        <span className="bi bi-star-fill star"></span>
      </p>
      <div className="carousel-container">
        <Slider {...settings}>
          {venuesData.map((venue) => (
            <div className="card" key={venue.id}>
              <div className="card_img">
                <img src={cafeImg} alt={`thumb ${venue.id}`} className="cafeImage" />
              </div>
              <div className="card__content">
                <div className="vertical-text-container">
                  <h1 className="VenueSubTitle">{venue.name}</h1>
                  <p className="VenueLocation">
                    {venue.location} <i className="bi bi-dot"></i> {venue.distance}
                  </p>
                  <p className="VenuePackage">{venue.packages} packages Available</p>
                  <p className="VenueDetails">
                    <span className="VenueRating">
                      <i className="bi bi-star-fill star"></i> {venue.rating}
                    </span>
                    <i className="bi bi-dot"></i>
                    <i className="bi bi-currency-rupee"></i>
                    <i className="bi bi-currency-rupee"></i>
                    <i className="bi bi-dot"></i>
                    <i className="bi bi-dice-1 grade-green"></i>{" "}
                    <i className="bi bi-dice-1 grade-red"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
}

export default Venues;
