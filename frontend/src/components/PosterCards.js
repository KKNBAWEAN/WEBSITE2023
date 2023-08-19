import React, { useState } from "react";
import "../App.css";
import "./PosterCards.css";
import Popup from "./Popup";
import SearchBar from "./SearchBar";
import posterData from "./Poster_data"; // Import the poster data array

function PosterCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  const togglePopup = (index) => {
    setIsOpen(!isOpen);
    setPopupIndex(index);
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filterCards = (posterData, query) => {
    if (!query) {
      return posterData;
    }

    return posterData.filter((poster) => {
      const posterName = poster.name.toLowerCase();
      return posterName.includes(query);
    });
  };

  const filteredCards = filterCards(posterData, searchQuery.toLocaleLowerCase());

  return (
    <div className="poster-container">
      <h1 data-aos="fade-up">Posters Collection!</h1>
      <div className="poster-card-container">
        <div className="poster-card-wrapper">
          <div className="searchbox" data-aos="fade-up">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              placeholder="Search Posters..."
            />
          </div>
          <div className="poster-card-grid" data-aos="fade-up">
            {filteredCards.map((poster, index) => (
              <div
                key={poster.id}
                onClick={() => togglePopup(index)}
                className="poster-card"
              >
                <img
                  className="poster-card-img"
                  alt="Poster"
                  src={poster.img}
                />
                <h3 className="poster-card-name">{poster.name}</h3>
              </div>
            ))}
          </div>
          {isOpen && (
            <Popup
              content={
                <>
                  <div className="poster-popup-name">
                    {filteredCards[popupIndex].name}
                  </div>
                  <img
                    className="poster-popup-image"
                    src={filteredCards[popupIndex].img}
                    alt={filteredCards[popupIndex].name}
                  />
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PosterCards;
