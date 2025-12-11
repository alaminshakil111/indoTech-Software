import React from 'react';


// import from local
import Hero from '@/component/Hero';
import Services from '@/component/Services';
import AdvanceTech from '@/component/AdvanceTech';
import Solutions from '@/component/Solutions';
import AddressMap from '@/component/AddressMap';
import SocialLink from '@/component/SocialLink';
import Footer from '@/component/Footer';
import Software from '@/component/Software';
import InfiniteCarousel from '@/component/InfiniteCarousel';
import OurConcepts from '@/component/OurConcepts';
import Advantage from '@/component/Advantage';

const Home = () => {
    
    return (
        <>
            
            <Hero/>
            <Services/>
            {/* <Advantage/> */}
            <OurConcepts/>
            <AdvanceTech/>
            <Solutions/>
            <InfiniteCarousel/>

            
            
        </>
    );
};

export default Home;