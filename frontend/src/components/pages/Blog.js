import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import ImageBanner from '../ImageBanner.js';
import PosterCards from '../PosterCards.js';
import Poster from '../Poster.js';
import Footer from '../Footer';


function Blog() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <>
    <ImageBanner/>
    <Poster/>
    <Footer/>
    </>
  );
}

export default Blog;
