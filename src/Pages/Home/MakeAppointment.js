import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center p-4' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-170px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-primary text-xl uppercase font-bold py-4'>Appointment</h2>
                <h1 className='text-3xl text-white font-serif py-2'>Make an appointment Today</h1>
                <p className='text-white py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, earum voluptatem at cum ducimus a laboriosam nobis voluptas commodi sequi labore beatae, reiciendis temporibus ad! Hic nihil corporis nam similique.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;