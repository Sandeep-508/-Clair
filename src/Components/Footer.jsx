import React, { useEffect, useState } from 'react'
import footer_bg from '../assets/Images/PNG/footer-webp-img.webp'
import footer_top_layer from '../assets/Images/PNG/footer-top.webp'

const Footer = () => {
    const footer_back_img = {
        backgroundImage: `url(${footer_bg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }

    const [visible, setvisible] = useState(false);

    const toggle = () => {

        const scrolltop = document.documentElement.scrollTop;
        if (scrolltop > 400) {
            setvisible(true)
        }
        else if (scrolltop <= 400) {
            setvisible(false)
        }
    }

    const scroll_top = () => {
        window.scrollTo({
            top: 0,
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggle);
        return () => {
            window.removeEventListener("scroll", toggle);
        }
    }, []);

    return (
        <div className='bg-black -mt-2px position-relative' style={footer_back_img}>
            <div className=' position-absolute top-0 start-0 w-100'>
                <img src={footer_top_layer} alt="layer on the top with linear graident" className=' w-100' style={{ height: '200px' }} />
            </div>
            <div className='scroll_top cursor' onClick={scroll_top} style={{ display: visible ? "grid" : "none" }}>
                <svg className=' w-100 h-100' style={{ transform: 'rotate(180deg)' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0006 10.9409L9.53062 8.46979L8.46973 9.53021L12.0006 13.0626L15.5315 9.53021L14.4706 8.46979L12.0006 10.9409Z" fill="#DA0C1D" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0006 14.9409L9.53062 12.4698L8.46973 13.5302L12.0006 17.0626L15.5315 13.5302L14.4706 12.4698L12.0006 14.9409Z" fill="#DA0C1D" />
                </svg>
            </div>
            <div className="container_hero position-relative z-3">
                <div className=' d-flex align-items-center justify-content-center'>
                    <a href='#' className='fm fw-semibold fs-60 lh-150 text-clr text-center fs-main-text-hero' style={{ marginBottom: '20px' }}>$CLAIR</a>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='fm fw-normal fs-16 lh-24 text-center mb-media-footer' style={{ color: '#A9A9A9', maxWidth: '626px' }}>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
                        and Baby Sinclair is wielding it with style. The bad players better watch out;
                        the crypto defender is here, armed with memes and ready to act.</p>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='overflow-x-auto d-flex align-items-center justify-content-start gap-media-nav-link' style={{ width: '768px', marginBottom: '40px' }}>
                        <a href="#" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Home</a>
                        <a href="#token" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Tokenomics</a>
                        <a href="#audit" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Audit</a>
                        <a href="#road" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Roadmap</a>
                        <a href="#paper" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>WhitePaper</a>
                        <a href="#" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Privacy</a>
                        <a href="#" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Cookies</a>
                        <a href="#" className='fm fw-semibold fs-16 lh-24 footer-link' style={{ color: '#D9D9D9' }}>Disclaimer</a>
                    </div>
                </div>
                <div className='footer_line'></div><br />
            </div>
        </div>
    )
}

export default Footer
