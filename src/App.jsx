import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './pages/Home';
import ServicesAll from './pages/ServicesAll';
import CompanyInfo from './pages/CompanyInfo';
import SolutionsAll from './pages/SolutionsAll';
import ServicesDetails from './pages/ServicesDetails';
import ConsultancyAll from './pages/consultancyAll';
import ConsultancyDetails from './pages/consultancyDetails';
import AddressMap from '@/component/AddressMap';
import SocialLink from '@/component/SocialLink';
import Footer from '@/component/Footer';
import SolutionsDetails from './pages/SolutionsDetails';
import SoftwareDev from './pages/SoftwareDev';
import ContactForm from './pages/ContactForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import Recruitment from './pages/Recruitment';
import RecruitmentDetails from './pages/RecruitmentDetails';
import ScrollToTop from './component/ScrollToTop';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          {/* <Route path='/software-development' element={<SoftwareDev/>} /> */}
          <Route path='/services-all' element = {<ServicesAll/>} />
          <Route path="/services/:id" element={<ServicesDetails/>} />
          <Route path='/company-info' element = {<CompanyInfo/>} />
          <Route path='/solutions-all' element = {<SolutionsAll/>} />
          <Route path='/solutions/:id' element = { <SolutionsDetails/> } />
          <Route path='/consultancy-all' element = { <ConsultancyAll/> } />
          <Route path='/consultancy/:id' element = { <ConsultancyDetails/> } />

          <Route path='/about-us' element ={ <AboutUs/> } />
          <Route path='/recruitment' element ={ <Recruitment/> } />
          <Route path='/RecruitmentDetails/:id' element = { <RecruitmentDetails/> } />
          <Route path='/contact' element = { <ContactForm/> } />
          <Route path='/privacypolicy' element = { <PrivacyPolicy/> } />
        </Routes>
        {/* <AddressMap/> */}
        {/* <SocialLink/> */}
        <Footer/>
      </BrowserRouter>
      
    </>
  );
};