import React, { useState } from "react";
import '../App.css';
import './ProdukCards.css';
import Popup from './Popup';
import { Button } from './Button';
import SearchBar from "./SearchBar";
import Im1 from "../images/OLAHAN/img1.png";
import Im2 from "../images/OLAHAN/img2.jpg";
import Im3 from "../images/OLAHAN/img3.png";
import Im4 from "../images/OLAHAN/img4.png";

const produkcards = [
    {
      id: 1,
      name: "Koncok-Koncok",
      label: "Label 1",
      img: Im1,
      location: "Warung Cik Bibim",
      price: "Rp 25.000/kg",
      desc: "Ini deskripsi koncok koncok",
      link: "-"
    },
    {
      id: 2,
      name: "Kerupuk Bibir Merah",
      label: "Label 2",
      img: Im2,
      location: "Desa Kepuhteluk",
      price: "Rp 10.000",
      desc: "Ini deskripsi kerupuk bibir merah",
      link: "-"
    },
    {
        id: 3,
        name: "Keripik Gadung",
        label: "Label 3",
        img: Im3,
        location: "Desa Kepuhlegundi",
        price: "Rp 10.000",
        desc: "Ini Deskripsi Gadung",
        link: "-"
    },
    {
        id: 4,
        name: "Ikan Apel-Apel",
        label: "Label 4",
        img: Im4,
        location: "Desa Kepuglegundi",
        price: "Rp 25.000",
        desc: "Ini Deskripsi Apel-Apel",
        link: "-"
    },
        
    
    // More product cards...
  ];
  

function ProdukCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  const togglePopup = (index) => {
    setIsOpen(!isOpen);
    setPopupIndex(index);
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filterCards = (produkcards, query) => {
    if (!query) {
      return produkcards;
    }

    return produkcards.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const filteredCards = filterCards(produkcards, searchQuery.toLocaleLowerCase());


  return (
    <div className='wisata-container'>
      <h1 data-aos='fade-up'>Produk Pulau Bawean!</h1>
      <div className='wisata-card-container'>
        <div className='wisata-card-wrapper'>
          <div className='searchbox' data-aos='fade-up'>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Cari Produk..." />
          </div>
          <ul data-aos="fade-up" className='wisata-card'>
            {filteredCards.map((props, index) => (
              <li key={props.id} onClick={() => togglePopup(index)} data-aos='fade-up' className='wisata-cards-item'>
                <div className='wisata-card-link'>
                  <figure className='wisata-card-pic-wrap' data-category={props.label}>
                    <img
                      className='wisata-card-img'
                      alt='Travel Image'
                      src={props.img}
                    />
                  </figure>
                  <div className='wisata-card-info'>
                    <h5 className='wisata-card-name'>{props.name}</h5>
                    <h6 className='wisata-card-location'>{props.location}</h6>
                    <h5 className='wisata-card-price'>{props.price}</h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {isOpen && (
            <Popup
              content={
                <>
                  <div className='wisata-popup-name'>{filteredCards[popupIndex].name}</div>
                  <img className='wisata-popup-image' src={filteredCards[popupIndex].img} alt={filteredCards[popupIndex].name} />
                  <div className='wisata-popup-desc'>{filteredCards[popupIndex].desc}</div>
                  <div className='wisata-popup-price'>{filteredCards[popupIndex].price}</div>
                  <div className='wisata-popup-location'>{filteredCards[popupIndex].location}</div>
                  <div className='gmaps-link'>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                      <a href={filteredCards[popupIndex].link} target='_blank' rel='noopener noreferrer' className='btns'>Hubungi Toko</a>
                    </Button>
                  </div>
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

export default ProdukCards;
