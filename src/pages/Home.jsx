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
import AboutUs from '@/component/AboutUs';
import Advantage from '@/component/Advantage';
import InfoRecruit from '@/component/InfoRecruit';

const Home = () => {
    
    return (
        <>
            
            <Hero/>
            <Services/>
            <AboutUs/>
            <Solutions/>
            <InfoRecruit/>

            
        </>
    );
};

export default Home;