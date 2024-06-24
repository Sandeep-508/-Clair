import React from 'react'
import arrow from '../assets/Images/PNG/forward-arrow.webp'
import token_image from '../assets/Images/PNG/tokenomics_image.webp'
import partner_1 from '../assets/Images/PNG/wolf-token-img.webp'
import partner_2 from '../assets/Images/PNG/alien-image-token.webp'
import plus_sign from '../assets/Images/PNG/+_sign.webp'

const Tokenomics = () => {
    const for_arrow = {
        width: '36px',
        height: '20px',
    }
    const plus = {
        width: '32px',
        height: '32px',
    }
    return (
        <div className=' bg-black -mt-2px position-relative py-tokenomics' id='token'>
            <div className=' position-absolute ellipse_tokenomics'></div>
            <div className="container_hero max-w-lg">
                <div className="row justify-content-between flex-lg-row flex-column-reverse">
                    <div className="col-lg-5 d-flex align-items-lg-start align-items-center justify-content-center flex-column pt-lg-0 pt-3" data-aos="flip-up">
                        <p className='fm fw-600 fs-48 lh-57 text-start fs-main-text-hero' style={{ color: '#F1F1F1' }}>Tokenomics</p>
                        <div className=' d-flex align-items-start justify-content-start gap-3 pt-3 pb-4'>
                            <p className='fm fw-normal fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>Baby Sinclair</p>
                            <button className='clair-btn text-clr fw-normal fs-24 lh-36 fm d-flex align-items-center justify-content-center'>$Clair</button>
                        </div>
                        <p className='fm fw-semibold fs-16 lh-24 mb-1' style={{ color: '#C1C1C1' }}>Total Tokens</p>
                        <p className='fm fw-600 fs-40 lh-48 text-clr mb-media-total-token mb-media-total-token fs-main-text-token'>100,000,000,000</p>
                        <div className=' d-flex flex-column align-items-start justify-content-start gap-media-title max-w-token-pts'>
                            <div className='d-flex align-items-center justify-content-center gap-media-title'>
                                <div className='for-arrow d-flex align-items-center justify-content-center' style={for_arrow}>
                                    <img src={arrow} alt="forward arrow" style={for_arrow} />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='fm fw-semibold fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>1%</p>
                                </div>
                                <div className='d-flex align-items-end justify-content-end' style={{ height: '36px' }}>
                                    <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Presale</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-media-title'>
                                <div className='for-arrow d-flex align-items-center justify-content-center' style={for_arrow}>
                                    <img src={arrow} alt="forward arrow" style={for_arrow} />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='fm fw-semibold fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>3%</p>
                                </div>
                                <div className='d-flex align-items-end justify-content-end' style={{ height: '36px' }}>
                                    <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Marketing</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-media-title'>
                                <div className='for-arrow d-flex align-items-center justify-content-center' style={for_arrow}>
                                    <img src={arrow} alt="forward arrow" style={for_arrow} />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='fm fw-semibold fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>5%</p>
                                </div>
                                <div className='d-flex align-items-end justify-content-end' style={{ height: '36px' }}>
                                    <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Team - locked for 24 months</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-media-title'>
                                <div className='for-arrow d-flex align-items-center justify-content-center' style={for_arrow}>
                                    <img src={arrow} alt="forward arrow" style={for_arrow} />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='fm fw-semibold fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>10%</p>
                                </div>
                                <div className='d-flex align-items-end justify-content-end' style={{ height: '36px' }}>
                                    <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Investors - locked for 24 months</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-media-title'>
                                <div className='for-arrow d-flex align-items-center justify-content-center' style={for_arrow}>
                                    <img src={arrow} alt="forward arrow" style={for_arrow} />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='fm fw-semibold fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>21%</p>
                                </div>
                                <div className='d-flex align-items-end justify-content-end' style={{ height: '36px' }}>
                                    <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Exchange listings & liquidity</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-media-title'>
                                <div className='for-arrow d-flex align-items-center justify-content-center' style={for_arrow}>
                                    <img src={arrow} alt="forward arrow" style={for_arrow} />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='fm fw-semibold fs-24 lh-36 mb-0' style={{ color: '#C1C1C1' }}>60%</p>
                                </div>
                                <div className='d-flex align-items-end justify-content-end' style={{ height: '36px' }}>
                                    <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Rewards and burns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center' data-aos="flip-down">
                        <div style={{ width: '491px', height: '565px' }} className='wh-change-tokenomics'>
                            <img src={token_image} alt="graph chart" className=' w-100 h-100 wh-media-tokenomics' />
                        </div>
                    </div>
                </div>
                <div className='tokennomics_box'>
                    <div className='row'>
                        <div className='col-lg-5 d-flex align-items-lg-start align-items-center justify-content-lg-start justify-content-center' data-aos="flip-left">
                            <div className='photo-grid d-flex align-items-center justify-content-center gap-4'>
                                <div className='partner'>
                                    <img src={partner_1} x alt="random partners pics" className=' w-100 h-100' />
                                </div>
                                <div style={plus}>
                                    <img src={plus_sign} alt="plus sign" className='w-100 h-100' />
                                </div>
                                <div className='partner'>
                                    <img src={partner_2} alt="random partners pics" className=' w-100 h-100' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 d-flex align-items-lg-start align-items-center justify-content-center flex-column px-0 pt-lg-0 pt-3' data-aos="flip-right">
                            <p className='fm fw-600 fs-20 lh-30 mb-0 text-lg-start text-center' style={{ color: '#F1F1F1' }}>Baby Sinclair Stands Strong with the Shiba Inu Community</p>
                            <p className='fm fw-normal fs-16 lh-24 mb-0 mt-2 text-lg-start text-center' style={{ color: '#C1C1C1' }}>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
