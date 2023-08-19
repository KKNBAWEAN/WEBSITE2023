import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer'
import WisataAlamDetail from '../WisataAlamDetail'

export default function WisataDetail() {

    const { id } = useParams()

    return (
        <>
        <WisataAlamDetail itemId={id} category='wisatacards'/>
        <Footer/>
        </>
        
    )
}
