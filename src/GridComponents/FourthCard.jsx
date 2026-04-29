import React from 'react';

const FourthCard = ({matched_f}) => {
    return (
        <div className="col-span-4 row-span-6">
            <div className="card bg-base-100 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl text-center">{matched_f.next_due_date}</h2>
                    <p className='text-center'>Next Due</p>
                </div>
            </div>
        </div>
    );
};

export default FourthCard;