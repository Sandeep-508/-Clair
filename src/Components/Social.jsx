import React from 'react'
import social_box_img from '../assets/Images/PNG/social_section_box_back.webp'
import dis from '../assets/Images/PNG/discord_link.webp'
import twitter from '../assets/Images/PNG/twitter_link.webp'
import tele from '../assets/Images/PNG/tele_lnk.webp'
import dino_social_back from '../assets/Images/PNG/dino.webp'

const Social = () => {
    const backBox = {
        backgroundImage: `url(${social_box_img})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className='bg-black py-media-social -mt-2px position-relative'>
            <div className=' position-absolute ellipse_social'></div>
            <div className=' position-absolute dino-img-social-adj'>
                <img src={dino_social_back} alt="dino image in the background" className=' w-100 h-100' />
            </div>
            <div className='container_hero d-flex align-items-center justify-content-center'>
                <div className='social_box w-100' style={backBox}>
                    <p className='fm fw-600 fs-48 lh-57 text-center text-white fs-main-text-hero' data-aos="zoom-in"> Our<span className='text-clr'> Social</span></p>
                    <p className='fm fw-normal fs-16 lh-24 text-center mb-media-total-token' style={{ color: '#A9A9A9' }} data-aos="zoom-out">Join us on social media for exclusive giveaways and stay connected!</p>
                    <p className='text-clr fm fw-normal fs-20 lh-150 text-center mb-media-total-token fs-media-token-sub-text' data-aos="zoom-in">“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <a href='#' className='box_link' data-aos="zoom-in">
                            <img src={dis} alt="discord link" className=' w-100 h-100' />
                        </a>
                        <a href='#' className='box_link' style={{ padding: '7px' }} data-aos="zoom-out">
                            <img src={twitter} alt="twitter link" className=' w-100 h-100' />
                        </a>
                        <a href='#' className='box_link' data-aos="zoom-in">
                            <img src={tele} alt="telegram link" className=' w-100 h-100' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social
