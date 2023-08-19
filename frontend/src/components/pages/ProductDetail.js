import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer'
import WisataAlamDetail from '../WisataAlamDetail'

export default function ProductDetail() {

    const { id } = useParams()

    return (
        <>
        <WisataAlamDetail itemId={id} category='productcards'/>
        <Footer/>
        </>
        
    )
}
