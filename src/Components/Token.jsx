import React from 'react'
import line_lg from '../assets/Images/PNG/line_lg.webp'
import sub_token_1 from '../assets/Images/PNG/dollar_token_img.webp'
import sub_token_2 from '../assets/Images/PNG/t-token-img.webp'
import sub_token_3 from '../assets/Images/PNG/etherium-img.webp'
import sub_token_4 from '../assets/Images/PNG/token-box-token.webp'
import token_stocks from '../assets/Images/PNG/stocks_buyer.webp'
import token_bg from '../assets/Images/PNG/token_background.webp'

const Token = () => {
    const token_box = {
        backgroundImage: `url(${token_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className=' bg-black pt-5 -mt-2px' id='scrollDownBtn'>
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
                    <div className=' col-lg-7 pt-lg-0 pt-4 d-flex align-items-center justify-content-center' data-aos="fade-left">
                        <div className=' d-flex align-items-center justify-content-center wh-img-stocks'>
                            <img src={token_stocks} alt="complete token image" className=' w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token
