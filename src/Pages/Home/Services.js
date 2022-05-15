import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            Description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            Description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            Description: '',
            img: whitening
        }
    ]
    return (
        <div>
            <div className='text-center my-24'>
                <h2 className='text-primary uppercase text-lg font-bold'>Our Services</h2>
                <h2 className='text-4xl font-serif text-slate-700'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;