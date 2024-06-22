import React, { useState } from 'react'
import ContactBack from '../assets/Images/PNG/contact-img.webp'

const Address = () => {
    const [inputText, setInputText] = useState("0xFD1929755F73f974648daD00ab491a7C44a00eeD")
    const backContact = {
        backgroundImage: `url(${ContactBack})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }

    const copy_text = () => {
        let text_copy = document.querySelector(".copy_text");
        let copy_btn = document.querySelector(".copy_btn");
        let value_text = text_copy.value;
        navigator.clipboard.writeText(value_text);
        let alert_box = alert(`The Input Value : ${value_text} is Copied`);
    }

    return (
        <div style={backContact} className='py-media-address -mt-2px position-relative z-2' id='paper'>
            <div className=' position-absolute ellipse_address'></div>
            <div className="container_hero max-w-media">
                <p className='fm fw-600 fs-48 lh-57 text-center text-white fs-main-text-hero' data-aos="zoom-in-down"> <span className='text-clr'>$CLAIR</span> Smart Contract Address</p>
                <div className=' d-flex align-items-center justify-content-center py-media-add-input-box w-100' data-aos="zoom-in-up">
                    <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} className='copy_text fm fw-normal fs-16 lh-24' style={{ color: '#C1C1C1', outline: 'none', width: '100%' }} />
                    <button className='btn_about fm fw-bold fs-16 lh-24 d-flex align-items-center justify-content-center position-relative pos-copy-btn btn_hover copy_btn' onClick={copy_text}>Copy</button>
                </div>
                <div className=" d-flex align-items-center justify-content-center" data-aos="zoom-in-left">
                    <p className='sub-text-address-mx fm fw-normal fs-16 lh-24 text-center mb-0' style={{ color: '#A9A9A9' }}>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
                </div>
            </div>
        </div>
    )
}

export default Address
