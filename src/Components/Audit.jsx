import React from 'react'
import audit from '../assets/Images/PNG/audit-back-img.webp'
import audit_col_img from '../assets/Images/PNG/Audit_col_img.webp'
import audit_slide_1 from '../assets/Images/PNG/audit-slide-img-1.webp'
import audit_slide_2 from '../assets/Images/PNG/audit-slide-img-2.webp'
import audit_slide_3 from '../assets/Images/PNG/audit-slide-img-3.webp'
import audit_slide_4 from '../assets/Images/PNG/audit-slide-img-4.webp'
import audit_slide_5 from '../assets/Images/PNG/audit-slide-img-5.webp'
import audit_slide_6 from '../assets/Images/PNG/audit-slide-img-6.webp'
import audit_shield_1 from '../assets/Images/PNG/audit-shiled-1.webp'
import audit_shield_2 from '../assets/Images/PNG/audit-img-shield-2.webp'

const Audit = () => {
    const AuditBack = {
        backgroundImage: `url(${audit})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }
    const scrollbars = {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
    }
    return (
        <div className='py-audit -mt-2px position-relative' style={AuditBack} id='audit'>
            <div className=' position-absolute ellipse_audit'></div>
            <div className=' position-absolute ellipse_audit_bottom'></div>
            <div className='container_hero d-flex flex-column align-items-center justify-content-center'>
                <div className="d-flex align-items-center justify-content-lg-end justify-content-center w-100">
                    <div className='row w-100 justify-content-between' style={{ maxWidth: '900px' }}>
                        <div className='col-lg-5 position-relative d-flex align-items-lg-start align-items-center justify-content-lg-start justify-content-center' data-aos="zoom-y-out">
                            <div className=' position-absolute z-0 pos-shield-1' style={{ width: '663px', height: '457px' }}>
                                <img src={audit_shield_1} alt="shield image" className=' w-100 h-100' />
                            </div>
                            <div className='wh-audit-col mb-3 mb-lg-0'>
                                <img src={audit_col_img} alt="security sign" className=' w-100 h-100' />
                            </div>
                        </div>
                        <div className='col-lg-7 d-flex align-items-lg-start align-items-center justify-content-center flex-column' data-aos="zoom-y-out">
                            <p className='fm fw-normal fs-20 lh-30 mb-0 text-lg-start text-center' style={{ color: '#C1C1C1' }}>Rest easy knowing that $CLAIR is G</p>
                            <p className='fm fw-600 fs-32 lh-48 text-clr my-2 text-lg-start text-center'>Fully Audited and 100% Secure.</p>
                            <p className='fm fw-normal fs-20 lh-30 mb-media-total-token text-lg-start text-center' style={{ color: '#C1C1C1' }}>Zero Room for Rug Pulls: Invest with Confidence.</p>
                            <button className='btn_audit fm fw-bold fs-16 lh-24 d-flex align-items-center justify-content-center btn_hover'>Audit</button>
                        </div>
                    </div>
                </div>
                <div className='green_line'></div>
                <div className="d-flex align-items-center justify-content-lg-end justify-content-center w-100">
                    <div className='row w-100 justify-content-between' style={{ maxWidth: '1020px' }}>
                        <div className='col-lg-6 z-2 d-flex align-items-lg-start align-items-center justify-content-center flex-column' data-aos="zoom-in">
                            <p className='fm fw-600 fs-32 lh-48 mb-3 text-lg-start text-center' style={{ color: '#C1C1C1' }}>Listing on <span className='text-clr'>Major Exchanges</span></p>
                            <p className='fm fw-normal fs-20 lh-30 mb-media-total-token text-lg-start text-center text-lg-start text-center' style={{ color: '#C1C1C1', maxWidth: '475px' }}>Baby Sinclair’s Team is in action to secure the $CLAIR listing on major exchanges. Exciting milestones ahead.</p>
                        </div>
                        <div className='col-lg-6 d-flex align-items-lg-start align-items-center justify-content-center flex-column position-relative' data-aos="zoom-out">
                            <div className=' position-absolute z-0'>
                                <img src={audit_shield_2} alt="shield image 2" className='w-100 h-100' />
                            </div>
                            <div className='audit-slider-box z-3'>
                                <div className='overflow_box d-flex align-items-center justify-content-start overflow-x-auto' style={{ gap: '32px', ...scrollbars }}>
                                    <div className='wh-audit-boxes'>
                                        <img src={audit_slide_1} alt="stock exchange companies" className=' w-100 h-100' />
                                    </div>
                                    <div className='wh-audit-boxes'>
                                        <img src={audit_slide_2} alt="stock exchange companies" className=' w-100 h-100' />
                                    </div>
                                    <div className='wh-audit-boxes'>
                                        <img src={audit_slide_3} alt="stock exchange companies" className=' w-100 h-100' />
                                    </div>
                                    <div className='wh-audit-boxes'>
                                        <img src={audit_slide_4} alt="stock exchange companies" className=' w-100 h-100' />
                                    </div>
                                    <div className='wh-audit-boxes'>
                                        <img src={audit_slide_5} alt="stock exchange companies" className=' w-100 h-100' />
                                    </div>
                                    <div className='wh-audit-boxes'>
                                        <img src={audit_slide_6} alt="stock exchange companies" className=' w-100 h-100' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-start gap-3 w-100'>
                                    <div className='audit-box-line-1'></div>
                                    <div className='audit-box-line-2'></div>
                                    <div className='audit-box-line-3'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Audit
