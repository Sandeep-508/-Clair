import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import faqBack from '../assets/Images/PNG/faq_back_images.webp'
import { UpArrow } from '../icon'


const Faq = () => {
    const faqBackImg = {
        backgroundImage: `url(${faqBack})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    }
    const open_accordion = () => {
        const d_text = document.querySelector(".d-text");
        const accordions = document.querySelectorAll(".accordion-items");

        accordions.forEach(p => {
            const accordion_head = p.querySelector(".accordion-head");
            accordion_head.addEventListener("click", () => {
                p.classList.toggle("active-accordion");
            });
        });
    }
    return (
        <div className='bg-black py-faq -mt-2px position-relative' style={faqBackImg}>
            <div className=' position-absolute ellipse_faq'></div>
            <p className='fm fw-600 fs-48 lh-57 text-center text-white mb-media-text' style={{ marginBottom: '60px' }}>Frequently Asked <span className='text-clr'>Question</span></p>
            <div className="container_hero max-w-faq d-flex align-items-center justify-content-center">
                <Accordion defaultActiveKey="0" className='' flush>
                    <Accordion.Item eventKey="0" data-aos="flip-up">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>WHAT IS $CLAIR?</Accordion.Header>
                        <Accordion.Body>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" data-aos="flip-down">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>Arcu in pellentesque sit odio.</Accordion.Header>
                        <Accordion.Body className='fm fw-400 fs-16 lh-24'>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" data-aos="flip-up">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                        <Accordion.Body className='fm fw-400 fs-16 lh-24'>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" data-aos="flip-down">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>Metus augue dictumst sit amet.</Accordion.Header>
                        <Accordion.Body className='fm fw-400 fs-16 lh-24'>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" data-aos="flip-up">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                        <Accordion.Body className='fm fw-400 fs-16 lh-24'>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" data-aos="flip-down">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                        <Accordion.Body className='fm fw-400 fs-16 lh-24'>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" data-aos="flip-up">
                        <Accordion.Header style={{ color: '#A9A9A9' }} className='fm fw-600 fs-16 lh-24'>Elementum at dui varius consequat fringilla.</Accordion.Header>
                        <Accordion.Body className='fm fw-400 fs-16 lh-24'>
                            <p className='fm fw-400 fs-16 lh-24 mb-0' style={{ maxWidth: '510px' }}> Built on the Ethereum blockchain and powered by the most advanced
                                AI technology, Baby Sinclair has the potential to make millions.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Faq