import React from "react";
import "./style/BudgetVenues.css";
import cafe from "../asset/cafe.jpg";

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
  },
  {
    id: 3,
    name: "The Dome Cafe",
    location: "HSR Layout",
    distance: "4.2km",
    packages: 8,
    rating: 4.5,
  },
];
function BudgetVenues() {
  return (
    <div className="budgetMain">
      <p className="budgetTitle">Venues on a Budget!</p>
      <div className="budgetListCont">
        {venuesData.map((e, i) => {
          return (
            <div className="budgetCard">
              <div className="imageContainerVenue">
                <img src={cafe} alt="thumb1" className="VenueImage" />
                <button className="venueSelectButton">Sylo Select</button>
                <button className="like-button">
                  <i className='bi bi-heart'></i>
                </button>
              </div>
              <div className="card__content">
                <div className="vertical-text-container">
                  <h1 className="VenueSubTitle">{e.name}</h1>
                  <p className="VenueDetails">
                    <span className="VenueRating">
                      <i className="bi bi-star-fill star"></i> {e.rating}
                    </span>
                    <i className="bi bi-dot"></i>
                    <i className="bi bi-currency-rupee"></i>
                    <i className="bi bi-currency-rupee"></i>
                    <i className="bi bi-dot"></i>
                    <i className="bi bi-dice-1 grade-green"></i>{" "}
                    <i className="bi bi-dice-1 grade-red"></i>
                  </p>
                  <p className="VenueLocation">
                    {e.location} <i className="bi bi-dot"></i> {e.distance}
                  </p>
                  <p className="VenuePackage">{e.packages} packages Available</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BudgetVenues;
