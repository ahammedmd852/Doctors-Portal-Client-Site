import React from 'react';
import InfoCard from './infoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock} />
            <InfoCard bgClass="bg-accent" cardTitle="Visit Our Location" img={marker} />
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone} />
        </div>
    );
};

export default info;