import React from 'react';

function Affiliate({ item, onClick }) {
    return (
        <div className="p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-150 rounded-lg" onClick={onClick}>
            <img src={item.company} alt="Affiliate" className="w-full h-full object-cover" />
        </div>
    );
}

export default Affiliate;
