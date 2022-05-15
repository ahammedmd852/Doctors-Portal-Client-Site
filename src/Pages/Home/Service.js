import React from 'react';

const Service = ({ service }) => {
    return (
        <div class="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img width={'115px'} height={'115px'} src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-serif">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Service;