import React, { useState } from 'react';

const ReservationsAccordion = ({ title, onClick }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="box">
            <header
                className="accordion-header"
                onClick={() => {
                    setIsActive(!isActive);
                    onClick(); 
                }}
                style={{ cursor: 'pointer' }}
            >
                <h2 className="title is-4">{title}</h2>
            </header>
        </div>
    );
};

export default ReservationsAccordion;
