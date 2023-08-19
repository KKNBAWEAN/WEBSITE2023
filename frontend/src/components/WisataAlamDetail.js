import React, {useState, useEffect} from "react";
import {axios} from "./axios";
import './WisataAlamDetail.css'
import BackIcon from '../images/icons8-back-50.png'
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default function WisataAlamDetail({itemId, category}) {
    const [wisataDetail, setWisataDetail] = useState();
    const [isLoad, setLoad] = useState(false);

    useEffect(() =>{
        axios
        .get('/' + category + '/' +itemId)
        .then(response => {
            console.log("Response:", response)
            setWisataDetail(response.data)
            setLoad(true)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    });

    return (
        <>
        <div className="wisata-detail-container">
        {
            isLoad &&
            <div>
                <div className="wisata-detail-header">
                    <Link to={category === 'wisatacards' ? '/wisata' : '/produk'}>
                        <img src={BackIcon} className='back-btn' alt="back-btn"></img>
                    </Link>
                    <h1 className="wisata-detail-title">{wisataDetail.name}</h1>
                    <h3 className="wisata-detail-location">{wisataDetail.location}</h3>
                </div>
                <div className="wisata-detail-content">
                    <div className="left-wisata-detail">
                        <img className='wisata-detail-img' src={wisataDetail.link.split('|')[1]} alt={'gambar '+ wisataDetail.name}></img>
                    </div>
                    <div className="right-wisata-detail">
                        <p className="wisata-detail-desc">{wisataDetail.desc}</p>
                        <Button buttonStyle='btn--primary'>
                            <a href={wisataDetail.link.split('|')[0]}>See location</a>
                        </Button>
                    </div>
                </div>
            </div>
        }
        </div>
        </>
        
    )
}
