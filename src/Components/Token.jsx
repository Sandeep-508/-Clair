import React from 'react'
import line_lg from '../assets/Images/PNG/line_lg.webp'
import sub_token_1 from '../assets/Images/PNG/dollar_token_img.webp'
import sub_token_2 from '../assets/Images/PNG/t-token-img.webp'
import sub_token_3 from '../assets/Images/PNG/etherium-img.webp'
import sub_token_4 from '../assets/Images/PNG/token-box-token.webp'
import token_stocks from '../assets/Images/PNG/stocks_buyer.webp'
import token_bg from '../assets/Images/PNG/token_background.webp'
import range from '../assets/Images/PNG/Group 48095474.webp'
import clock_img from '../assets/Images/PNG/token_clock_img.webp'
import dot_token_img from '../assets/Images/PNG/dots_token_sec.webp'

const Token = () => {
    const token_box = {
        backgroundImage: `url(${token_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className=' bg-black pt-5 -mt-2px pb-3'>
            <div className=' container_hero' id='scrollDownBtn'>
                <div className='token_box mx-auto' style={token_box}>
                    <div className=' row justify-content-between'>
                        <div className=' col-lg-5 d-flex align-items-center justify-content-center' data-aos="fade-right">
                            <div className='col-box-token w-100'>
                                <div className=' d-flex align-items-center justify-content-center gap-media-token-line-lg'>
                                    <div className=' d-flex flex-column align-items-start'>
                                        <p className=' mb-1 fm fw-normal fs-16 lh-24' style={{ color: '#C1C1C1' }}>1 $Clair</p>
                                        <p className=' mb-0 text-clr fm fw-bold fs-16 lh-24'>0.00387 $</p>
                                    </div>
                                    <div className='wh-line-lg'><img src={line_lg} alt="a line having linear gradient" className=' w-100 h-100' /></div>
                                    <div className=' d-flex flex-column align-items-start'>
                                        <p className=' mb-1 fm fw-normal fs-16 lh-24' style={{ color: '#C1C1C1' }}>Raised Amount</p>
                                        <p className=' mb-0 text-clr fm fw-bold fs-16 lh-24'>332,123$</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center justify-content-center gap-3'>
                                    <span className='sub-box-token'>
                                        <img src={sub_token_1} alt="dollar sign" className=' w-100 h-100' />
                                    </span>
                                    <span className='sub-box-token'>
                                        <img src={sub_token_2} alt="dollar sign" className=' w-100 h-100' />
                                    </span>
                                    <span className='sub-box-token'>
                                        <img src={sub_token_3} alt="dollar sign" className=' w-100 h-100' />
                                    </span>
                                    <span className='sub-box-token'>
                                        <img src={sub_token_4} alt="dollar sign" className=' w-100 h-100' />
                                    </span>
                                </div>
                                <button className='btn_token fm fw-bold fs-16 lh-24 d-flex align-items-center justify-content-center btn_hover'>Buy Now</button>
                            </div>
                        </div>
                        <div className=' col-lg-7 pt-lg-0 pt-4 d-flex align-items-start justify-content-start' data-aos="fade-left">
                            <div className=' d-flex align-items-start justify-content-start wh-img-stocks flex-column'>
                                <div className="d-flex align-items--center justify-content-between w-100">
                                    <div className=' d-flex flex-column align-items-start justify-content-start'>
                                        <p className='mb-1 fm fw-normal fs-16 lh-24' style={{ color: "#C1C1C1" }}>Tokens are Sold</p>
                                        <p className='mb-0 fm fw-bold fs-16 lh-24 text-clr'>98,212,738</p>
                                    </div>
                                    <div className=' d-flex flex-column align-items-start justify-content-start'>
                                        <p className='mb-1 fm fw-normal fs-16 lh-24' style={{ color: "#C1C1C1" }}>Tokens are Sold</p>
                                        <p className='mb-0 fm fw-bold fs-16 lh-24 text-clr'>98,212,738</p>
                                    </div>
                                </div>
                                <div className=' position-relative' style={{ top: '-15px' }}>
                                    <img src={range} alt="range of money" className=' w-100 h-100' />
                                </div>
                                <p className=' fm fw-normal fs-14 lh-21' style={{ color: '#A9A9A9' }}>Purchase $Clair fast until the price increase.</p>
                                <div className=' d-flex align-items-center justify-content-center'>
                                    <span className='wh-token-clock-img'>
                                        <img src={clock_img} alt="image of a clock" className=' w-100 h-100' />
                                    </span>
                                    <p className='fm fw-normal fs-16 lh-24 text-nowrap mb-0' style={{ color: '#F1F1F1', paddingLeft: '10px', paddingRight: '32px' }}>Price <br />
                                        increase in</p>
                                    <div className=' d-flex align-items-center justify-content-center'>
                                        <div className=' d-flex flex-column align-items-center justify-content-center'>
                                            <p className='fm fw-normal fs-14 lh-21 mb-0' style={{ color: "#A9A9A9" }}>Days</p>
                                            <div className='time_box fm fww-normal fs-24 lh-36' style={{ background: "#FFF62433", color: '#F1F1F1' }}>00</div>
                                        </div>
                                        <div className='fs-40 text-center d-flex align-items-center justify-content-center px-2 pt-2' style={{ color: '#87855B' }}>:</div>
                                        <div className=' d-flex flex-column align-items-center justify-content-center'>
                                            <p className='fm fw-normal fs-14 lh-21 mb-0' style={{ color: "#A9A9A9" }}>Hours</p>
                                            <div className='time_box fm fww-normal fs-24 lh-36' style={{ background: "#FFF62433", color: '#F1F1F1' }}>12</div>
                                        </div>
                                        <div className='fs-40 text-center d-flex align-items-center justify-content-center px-2 pt-2' style={{ color: '#87855B' }}>:</div>
                                        <div className=' d-flex flex-column align-items-center justify-content-center'>
                                            <p className='fm fw-normal fs-14 lh-21 mb-0' style={{ color: "#A9A9A9" }}>Mins</p>
                                            <div className='time_box fm fww-normal fs-24 lh-36' style={{ background: "#FFF62433", color: '#F1F1F1' }}>46</div>
                                        </div>
                                        <div className='fs-40 text-center d-flex align-items-center justify-content-center px-2 pt-2' style={{ color: '#87855B' }}>:</div>
                                        <div className=' d-flex flex-column align-items-center justify-content-center'>
                                            <p className='fm fw-normal fs-14 lh-21 mb-0' style={{ color: "#A9A9A9" }}>Secs</p>
                                            <div className='time_box fm fww-normal fs-24 lh-36' style={{ background: "#FFF62433", color: '#F1F1F1' }}>19</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token
