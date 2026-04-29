import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const SixthCard = () => {
    return (
        <div className='col-start-7 col-end-19 row-start-13 row-end-19 '>
            <p className='text-[#244d3f]'>Quick Check-In</p>

            <div className='flex justify-between'>
                <div className='call'>
                    <div className="card bg-base-100 w-50 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl flex justify-center"><span><FiPhoneCall></FiPhoneCall></span></h2>
                    <p className='text-center'>Call</p>
                </div>
            </div>
                </div>
                <div className='text'>
                    <div className="card bg-base-100 w-50 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl flex justify-center"><span><MdOutlineTextsms/></span></h2>
                    <p className='text-center'>Text</p>
                </div>
            </div>
                </div>
                <div className='video'>
                    <div className="card bg-base-100 w-50 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl flex justify-center"><span><IoVideocamOutline></IoVideocamOutline> </span></h2>
                    <p className='text-center'>Video</p>
                </div>
            </div>
                </div>
            </div>

        </div>
    );
};

export default SixthCard;