import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ExceptionalCare = () => {
    return (
        <div class="hero min-h-screen my-20">
            <div class="hero-content flex-col lg:flex-row">
                <img width={'455px'} height={'575px'} className='p-12' src={treatment} />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;