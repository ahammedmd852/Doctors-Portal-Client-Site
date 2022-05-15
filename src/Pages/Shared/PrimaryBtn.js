import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary uppercase">{children}</button>
        </div>
    );
};

export default PrimaryBtn;