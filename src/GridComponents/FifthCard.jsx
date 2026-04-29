import React from 'react';

const FifthCard = () => {
    return (
      
            <div className="col-span-12 row-span-6">
            <div className="flex flex-row justify-between items-center card bg-base-100 card-sm shadow-sm">
                <div className="card-body p-10">
                    <h2 className="text-left text-xl">Relationship Goal</h2>
                    <p className='text-left text-xl'>Connect every <span>30 days</span></p>
                </div>
                <div><button className="btn btn-sm">Edit</button></div>
            </div>
        </div>
       
    );
};

export default FifthCard;