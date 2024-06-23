import React from 'react'
import hammer from '../assets/Images/PNG/roadmap_phases_bottom_img.png'
import roadmap_bg_img from '../assets/Images/PNG/roadmap_background_img.png'

const Roadmap = () => {
    const roadmap_bg = {
        backgroundImage: `url(${roadmap_bg_img})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }
    return (
        <div className='bg-black py-media-roadmap back_img_roadmap -mt-2px position-relative' style={roadmap_bg} id='road'>
            <div className=' position-absolute ellipse_roadmap'></div>
            <div className=' position-absolute ellipse_roadmap_bottom'></div>
            <div className="container_hero pb-media-roadmap position-relative z-3">
                <p className='fm fw-600 fs-48 lh-57 text-center' style={{ color: '#F1F1F1' }}>Roadmap</p>
                <div className='row mt-media-row-road position-relative z-3'>
                    <div className='col-lg-4 col-md-6 d-flex align-items-lg-start align-items-center justify-content-lg-start justify-content-center'>
                        <div className='road_box mt-first-box position-relative' data-aos="flip-left">
                            <div className=' position-absolute btm_img_pos'>
                                <img src={hammer} alt="a hammer like figure" className=' w-100 h-100' />
                            </div>
                            <p className='fm fw-semibold fs-32 lh-48 text-white'>Phase 1</p>
                            <div className='d-flex align-items-center justify-content-start gap-3'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Team Recruitment</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Social Media</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Audit Smart Contract</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Whitepaper</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Presale Launch</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Community Growth</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>AI Avatars Release</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 d-flex align-items-lg-start align-items-center justify-content-center'>
                        <div className='road_box mt-second-box road-box-pd-2 position-relative' data-aos="flip-right">
                            <div className=' position-absolute btm_img_pos'>
                                <img src={hammer} alt="a hammer like figure" className=' w-100 h-100' />
                            </div>
                            <p className='fm fw-semibold fs-32 lh-48 text-white'>Phase 2</p>
                            <div className='d-flex align-items-center justify-content-start gap-3'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Official Launch</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Burns 5%</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Major DEX & CEX Listings</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Coinmarketcap</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>CoinGecko</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Influencers Marketing</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>More AI Avatars Release</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4  d-flex align-items-lg-start align-items-center justify-content-lg-end justify-content-center'>
                        <div className='road_box road-box-pd-3 position-relative' data-aos="flip-left">
                            <div className=' position-absolute btm_img_pos'>
                                <img src={hammer} alt="a hammer like figure" className=' w-100 h-100' />
                            </div>
                            <p className='fm fw-semibold fs-32 lh-48 text-white'>Phase 3</p>
                            <div className='d-flex align-items-center justify-content-start gap-3'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Burns (5% quarterly)</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Rewards Program</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Multiple Partnerships</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>Create your own AI Avatar Voiceover.</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3 mt-2'>
                                <div className='dot'></div>
                                <p className='fm fw-normal fs-16 lh-24 mb-0' style={{ color: '#C1C1C1' }}>AI Metaverse Avatar Play-to-Earn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
