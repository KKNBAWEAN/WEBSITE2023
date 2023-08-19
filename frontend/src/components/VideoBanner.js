import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoBanner.css';

function VideoBanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['BG1.png', 'BG2.png', 'BG3.png', 'BG4.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='hero-container'
      style={{
        background: `url(${require(`../images/${images[currentImage]}`).default})`,
      }}
      >
        <h1>Bawean Island</h1>
        <h2>The Hidden Paradise of East Java</h2>
        <p>
          Pulau Bawean adalah pulau kecil yang terletak di Laut Jawa yang secara
          administratif termasuk ke dalam wilayah Kabupaten Gresik, Provinsi
          Jawa Timur. Pulau Bawean memiliki dua kecamatan yaitu Kecamatan Sangkapura dengan
          17 Desa dan Kecamatan Tambak dengan 13 Desa.
        </p>
        <p>
          
        </p>
      </div>
    </div>
  );
}

export default VideoBanner;
