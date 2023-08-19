import React from 'react'
import './StoryMap.css';

export default function StoryMap() {
  return(
    <div className='SM_content'> 
            <div className='SM_content-container' data-aos='fade-up'>
                <div className='SM_right-reason'>
                    <div className='SM_content-title'>
                        <h1 class='SM_reason-title'>Penasaran Dengan Wisata di Pulau Bawean?</h1>
                    </div>
                
                    <div className='SM_text-container'>                  
                      <p>Mari wisata virtual bersama kami!</p>

                      <a href='https://storymaps.arcgis.com/stories/3542d8161af348258cb4334fb7309f41' rel="noreferrer" target='_blank'>
                        <button className="custom-button">STORY MAP</button>
                      </a>  
                      <p><br></br><br></br></p>
                    </div>
            

              


                </div>
                <div className='SM_img-container'>
                    <iframe
                    src="https://storymaps.arcgis.com/stories/3542d8161af348258cb4334fb7309f41" 
                    title="Story Map Pulau Bawean"
                    height= "100%"
                    width= "100%"
                    ></iframe>
                </div>          
            </div>
            
    </div>           
)
}




