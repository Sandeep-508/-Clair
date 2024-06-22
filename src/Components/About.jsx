import React from 'react'
import about_layer from '../assets/Images/PNG/about-us-bottom-layer.webp'
import dino_about from '../assets/Images/PNG/dino_about.png'

const About = () => {
    return (
        <div className=' pt-media-about bg-black position-relative -mt-2px' id='about'>
            <div className=' position-absolute ellipse_about'></div>
            <div className=' position-absolute wh-dino-about pos-about-back-img z-0'>
                <img src={dino_about} alt="dino image hiding behind the text" className=' w-100 h-100' />
            </div>
            <div className="container_hero d-flex flex-column align-items-center justify-content-center max-w-media z-3 position-relative">
                <p className='fm fw-600 fs-48 lh-57 text-center text-white fs-main-text-hero' data-aos="flip-left">About <span className='text-clr'>$CLAIR</span></p>
                <div className=" d-flex align-items-center justify-content-center">
                    <p className='sub-text-about-mx-1 fm fw-normal fs-16 lh-24 text-center mb-0' data-aos="flip-right" style={{ color: '#A9A9A9' }}>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <p className='sub-text-about-mx-2 fm fw-normal fs-16 lh-24 text-center mb-0 mt-media-about-sub-text' data-aos="flip-left" style={{ color: '#A9A9A9' }}>In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <p className='sub-text-about-mx-3 fm fw-normal fs-16 lh-24 text-center mb-0 mt-media-about-sub-text' data-aos="flip-right" style={{ color: '#A9A9A9' }}>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</p>
                </div>
                <button className='btn_about fm fw-bold fs-16 lh-24 d-flex align-items-center justify-content-center mt-media-btn btn_hover' data-aos="flip-left">Learn More</button>
            </div>
        </div>
    )
}

export default About
