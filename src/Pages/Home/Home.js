import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import ExceptionalCare from './ExceptionalCare';
import Footer from './Footer';
import Info from './info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCare />
            <MakeAppointment />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;