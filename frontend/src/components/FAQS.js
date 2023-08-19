import React , {useState, useEffect} from "react";
import 'aos/dist/aos.css'
import '../App.css';
import './FAQ.css';
import './FAQItem'
import {axios} from './axios';
import Accordion from "./FAQItem";

function FrequentlyAskedQuestions() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios
        .get("/faqs")
        .then(response => {
            console.log("Response:", response)
            setFaqs(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    return(
    <div>
        <div className='faq-container'>
            <div data-aos='fade-up' className='faq-title'>
                <h1 className="faq-title-txt"> Frequently Asked Questions (FAQ)</h1>
            </div>
            <div className='faq-content'>
                <div>
                    <ul>
                        {
                            faqs.map(faq =>
                                <Accordion title={faq.question} content={faq.answer}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )

}

export default FrequentlyAskedQuestions