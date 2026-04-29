import React from 'react';

const ThirdCard = ({matched_f}) => {
    return (
       <div className="col-span-4 row-span-6">
            <div className="card bg-base-100 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl text-center">{matched_f.goal}</h2>
                    <p className='text-center'>Goal Days</p>
                </div>
            </div>
        </div>
       
        
    );
};

export default ThirdCard;