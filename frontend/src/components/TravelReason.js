import React from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import './TravelReason.css';
import ReasonIllustration from '../images/Picture3.png'

function TravelReason() {

    const reasons = [
        {
            number: 1,
            reason: 'Variasi destinasi wisata alam yang indah'
        }, 
        {
            number: 2,
            reason: 'Makanan khas yang unik dan enak'
        }, 
        {
            number: 3,
            reason: 'Masyarakat yang ramah'
        }, 
        {
            number: 4,
            reason: 'Akses dan biaya wisata yang terjangkau'
        }, 
    ]

    return(
            <div className='content'> 
                    <div className='content-container' data-aos='fade-up'>
                        <div className='right-reason'>
                            <div className='content-title'>
                                <h1 class='reason-title'>Alasan Pergi ke Bawean!</h1>
                            </div>
                        
                            <div className='text-container'>
                            {
                                reasons.map(rsn =>
                                            <div className='text-content'>
                                                <div className='icon-container'>
                                                    <div className='icon-circle'>
                                                        <div className='icon-number'>
                                                        {rsn.number}
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2>{rsn.reason}</h2>
                                            </div>
                            )}
                            </div>
                        </div>
                        <div className='img-container'>
                            <img src={ReasonIllustration} alt='gambar ilustrasi'/>
                        </div>          
                    </div>
                    
            </div>           
    )
}

export default TravelReason