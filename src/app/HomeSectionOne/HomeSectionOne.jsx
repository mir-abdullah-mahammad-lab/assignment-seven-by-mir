import React from 'react';

const HomeSectionOne = () => {
    return (
        <div className='flex flex-col space-y-4'>
            <h1 className='text-3xl font-bold text-center'>Friends to keep close in your life</h1>
            <p className='text-[12px] text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
                    <div className='text-center m-5'>
                        <button className="btn bg-[#244d3f] text-white"> + Add a Friend</button>
                    </div>
        </div>
    );
};

export default HomeSectionOne;