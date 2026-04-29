import React from 'react';

const SecondCard = ({matched_f}) => {
    return (
         <div className="col-span-4 row-span-6">
                <div className="card bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                                <h2 className="text-2xl text-center">{matched_f.days_since_contact}</h2>
                                <p className='text-center'>Days Since Contact</p>
                        </div>
                </div>
            </div>
    );
};

export default SecondCard;