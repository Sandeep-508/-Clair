import React from 'react'
import About from './Components/About';
import Token from './Components/Token';
import Address from './Components/Address';
import Tokenomics from './Components/Tokenomics';
import Audit from './Components/Audit';
import Faq from './Components/Faq';
import Social from './Components/Social';
import Roadmap from './Components/Roadmap';

const Main = () => {
    return (
        <div className=' overflow-hidden'>
            <Token />
            <About />
            <Address />
            <Tokenomics />
            <Audit />
            <Roadmap />
            <Faq />
            <Social />
        </div>
    )
}

export default Main
