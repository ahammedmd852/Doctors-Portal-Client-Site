import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='pt-8'>
             <h4 className='text-xl text-secondary text-center font-serif'>Your selected date {format(date, 'PP')}.</h4>
             <p className='text-accent text-center font-sans'>Please select a service</p>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 {
                     services.map(service => <Service
                     key={service._id}
                     setTreatment={setTreatment}
                     service={service}
                     ></Service>)
                 }
             </div>
             {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;