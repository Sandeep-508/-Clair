import React, { useState } from 'react';
import header_bgimg from '../assets/Images/PNG/header-back-img.webp';
import title_img from '../assets/Images/PNG/title-img.webp'
import language_png from '../assets/Images/PNG/language_selector.webp'
import drop_down from '../assets/Images/SVG/arrow_down.svg'
import kart from '../assets/Images/SVG/shopping_kart.svg'
import cartoon from '../assets/Images/PNG/hero_bottom_img.webp'
import layer_hero from '../assets/Images/PNG/bottom-layer.webp'
import scrollDown from '../assets/Images/PNG/scroll_down_btn.png'
import ellipse_header from '../assets/Images/PNG/ellipse_header.png'

const headerImg = {
    // in jsx we can't use any - and _ 
    backgroundImage: `url(${header_bgimg})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}


const Header = () => {

    const [navMenu, setnavMenu] = useState(false);
    const toggleActive = () => {
        setnavMenu(!navMenu);
        let body = document.body;
        if (!navMenu) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }

    const removeActive = () => {
        setnavMenu(false);
        let body = document.body;
        body.style.overflow = "auto";
    }

    return (
        <header style={headerImg} className=' d-flex flex-column position-relative -mt-2px'>
            <div className=' position-absolute bottom-0 ellipse_header'></div>
            <a href='#scrollDownBtn' className=' position-absolute wh-scrollDown bg-black' style={{ opacity: '70%' }}>
                <img src={scrollDown} alt="scroll down button" className=' w-100 h-100' />
            </a>
            <nav className=' d-flex align-items-center py-4 navbar_style'>
                <div className="d-flex align-items-center justify-content-between container_hero w-100">
                    <a href='#' className=' d-flex align-items-center justify-content-center gap-media-title'>
                        <span className='title_image_wh'>
                            <img src={title_img} alt="random image" className=' w-100 h-100' />
                        </span>
                        <p className='fm fw-600 fs-32 lh-48 text-clr mb-0'>$CLAIR</p>
                    </a>
                    <div className='menuicon d-flex align-items-center justify-content-between flex-column' onClick={toggleActive}>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                    <div className={`d-flex align-items-center justify-content-center gap-media-nav max-lg-view ${navMenu ? "show" : ""}`}>
                        <div className=' d-flex align-items-center justify-content-center gap-media-nav-link d-prop-max-lg-view'>
                            <a href="#about" className='fm fw-semibold fs-16 lh-24 navLink' onClick={removeActive}>About</a>
                            <a href="#token" className='fm fw-semibold fs-16 lh-24 navLink' onClick={removeActive}>Tokenomics</a>
                            <a href="#audit" className='fm fw-semibold fs-16 lh-24 navLink' onClick={removeActive}>Audit</a>
                            <a href="#road" className='fm fw-semibold fs-16 lh-24 navLink' onClick={removeActive}>Roadmap</a>
                            <a href="#paper" className='fm fw-semibold fs-16 lh-24 navLink' onClick={removeActive}>WhitePaper</a>
                        </div>
                        <div className=' d-flex align-items-center justify-content-center gap-3 cursor'>
                            <span className='lang_png'>
                                <img src={language_png} alt="random image" className='w-100 h-100' />
                            </span>
                            <span>
                                <img src={drop_down} alt="random image" />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container_hero w-100 d-flex flex-column align-items-center justify-content-center pt-media-hero-cont flex-grow-1'>
                <p className='fm fw-bold fs-60 lh-72 text-white fs-main-text-hero text-center'>Presale is <span className='text-clr'>Live</span></p>
                <p className='hero-sec-sub-text fm fw-normal fs-16 lh-24 text-center' style={{ color: '#D9D9D9' }}>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</p>
                <button className=' d-flex align-items-center btns fm fw-bold fs-16 lh-24 text-black text-nowrap btn_hover'>Buy $Clair <span>
                    <img src={kart} alt="kart image" /></span></button>
                <div className=' position-relative z-2'>
                    <img src={cartoon} alt="cartoon image" className=' w-100 h-100' />
                </div>
            </div>
            <div className=' position-absolute w-100 -bottom-18 start-0 z-0'>
                <img src={layer_hero} alt="a triangular layer in the bottom of the hero section" className=' w-100' />
            </div>
        </header>
    )
};

export default Header;