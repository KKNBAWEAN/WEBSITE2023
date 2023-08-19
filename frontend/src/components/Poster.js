import React, { useState } from "react";
import Modal from "react-modal";
import "./Poster.css";
import Im1 from "../images/POSTER/img-0.jpg";
import Im2 from "../images/POSTER/img-1.jpg";
import Im3 from "../images/POSTER/img-2.jpg";
import Im4 from "../images/POSTER/img-3.jpg";
import Im5 from "../images/POSTER/img-4.jpg";
import Im6 from "../images/POSTER/img-5.jpg";

function Poster() {
  const [selectedImage, setSelectedImage] = useState(null);

  const posters = [
    {
      id: 1,
    image: Im1,
    title: "Poster Pemanfaatan Gadget",
    description: "Penggunaan Gadget dan Media Sosial yang Tepat pada Anak.",
    },
    {
      id: 2,
      image: Im2,
      title: "Calendar of Event",
      description: "Kalender kegiatan-kegiatan yang dilaksanakan di Pulau Bawean",
    },
    {
        id: 3,
        image: Im3,
        title: "Kelada dan Segudang Potensi",
        description: "Leaflet terkait pengolahan kelapa.",
      },
      {
        id: 4,
        image: Im4,
        title: "Sertivikasi Halal",
        description: "Leaflet terkait pengajuan sertifikasi halal bagi produk olahan yang dihasilkan UMKM Desa Kepuhlegundi",
      },
      {
        id: 5,
        image: Im5,
        title: "Pengolahan VCO",
        description: "Leaflet tahap-tahapan pengolahan VCO melalui berbagai metode yang berbeda.",
      },
      {
        id: 6,
        image: Im6,
        title: "Pemilahan Sampah",
        description: "Edukasi pemilahan sampah ke tiga golongan yang berbeda.",
      },

  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="poster-container">
      <h1 data-aos='flip-right'>POSTER</h1> {/* Moved header to the top */}
      <div className="posters-wrapper">
        {posters.map((poster) => (
          <div className="poster-item" key={poster.id} data-aos='flip-right'>
            <img
              className="poster-image"
              src={poster.image}
              alt={`Poster ${poster.id}`}
              onClick={() => openModal(poster.image)}
            />
            <div className="poster-details">
              <h3 className="poster-title">{poster.title}</h3>
              <p className="poster-description">{poster.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Poster Image"
        className="modal"
        overlayClassName="overlay"
      >
        <img
          className="modal-image"
          src={selectedImage}
          alt="Selected Poster"
        />
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Poster;
