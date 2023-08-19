import React, { useState, useEffect} from 'react';
import './Footer.css';
import { Button } from './Button';
// import { Link } from 'react-router-dom';
import {axios} from './axios';
import Axios from 'axios'
import FooterHeader from '../images/Header 1.png'
import FooterIllustration from '../images/Picture2.png'

function Footer() {
  const [socmeds, setSocmeds] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [formkey, setFormkey] = useState(10);

  const fetchData = () => {
    const socmedsAPI ='https://intense-peak-53882.herokuapp.com/socmeds'
    const getSocmeds = Axios.get(socmedsAPI)
    Axios.all([ getSocmeds]).then(
        Axios.spread((...allData) => {
            const allDataSocmeds =  allData[0].data;
            setSocmeds(allDataSocmeds)
            console.log(allDataSocmeds)
        })
    )
}
  useEffect(() =>{
    fetchData()
}, []);

  function submit(e){
    e.preventDefault();
    axios.post('/feedback',{
      name: feedback.name,
      text: feedback.text
    })
    .then(response =>{
      console.log("Feedback:", response)
    });
    setFormkey(formkey+1);
  }

  return (
          <div>
            <div className='footer-container'>
              <div className='footer-main'>
                <div className='footer-form'>
                  <h3 className='footer-form-heading'>
                    Bagikan Pengalamanmu Berkunjung di Pulau Bawean!
                  </h3>
                  <div className='input-areas'>
                    <form onSubmit={(e) => submit(e)}>
                      <input
                        className='footer-input-name'
                        name='name'
                        type='name'
                        placeholder='Nama'
                      />
                      <br/>
                      <textarea name='text' className='footer-input-text' placeholder='Ceritakan Pengalamanmu!' cols="30" rows="5">
                      </textarea>
                      <br/>
                      <Button buttonStyle='btn--primary'>Kirim</Button>
                    </form>
                  </div>
                </div>
                <div className='footer-illustration'>
                  <img src={FooterIllustration}></img>
                </div>
                {/* <div className='footer-links'>
                  <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                      <h3>Explore</h3>
                      <Link to='/wisata'>Wisata</Link>
                      <Link to='/produk'>Produk</Link>
                      <Link to='/budaya'>Budaya</Link>
                      <Link to='/blog'>Blog</Link>
                      <Link to='/sign-in'>Masuk</Link>
                    </div>
                  </div>
                </div>
                <div className='footer-social-media'>
                    <div class='footer-logo'>
                      <Link to='/' className='navbar-logo footer-logo-txt'>
                      Baweanesia
                      </Link>
                    </div>
                    <div class='social-icons'>
                      <Link
                        class='social-icon-link facebook'
                        to={socmeds.facebook}
                        target='_blank'
                        aria-label='Facebook'
                      >
                        <i class='fab fa-facebook-f' />
                      </Link>
                      <Link
                        class='social-icon-link instagram'
                        to={socmeds.instagram}
                        target='_blank'
                        aria-label='Instagram'
                      >
                        <i class='fab fa-instagram' />
                      </Link>
                      <Link
                        class='social-icon-link youtube'
                        to={socmeds.youtube}
                        target='_blank'
                        aria-label='Youtube'
                      >
                        <i class='fab fa-youtube' />
                      </Link>
                    </div>
                </div> */}
              </div>
                <section class='social-media'>
                  <div class='social-media-wrap'>
                    <img class='website-rights' src={FooterHeader} alt='header'></img>
                    {/* <div class='social-icons'>
                      <Link
                        class='social-icon-link facebook'
                        to={socmeds.facebook}
                        target='_blank'
                        aria-label='Facebook'
                      >
                        <i class='fab fa-facebook-f' />
                      </Link>
                      <Link
                        class='social-icon-link instagram'
                        to={socmeds.instagram}
                        target='_blank'
                        aria-label='Instagram'
                      >
                        <i class='fab fa-instagram' />
                      </Link>
                      <Link
                        class='social-icon-link youtube'
                        to={socmeds.youtube}
                        target='_blank'
                        aria-label='Youtube'
                      >
                        <i class='fab fa-youtube' />
                      </Link>
                    </div> */}
                  </div>
                </section>
              </div>
            </div>
  )
                  }

export default Footer
