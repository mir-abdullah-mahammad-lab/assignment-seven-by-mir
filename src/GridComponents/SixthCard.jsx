'use client'
import { dforTimeline } from '@/app/context/NameContext';
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';



const SixthCard = ({name}) => {
    const {d, setD} = useContext(dforTimeline)
    console.log('collectname', d)
   
  
    return (
        

             <div className='flex flex-col gap-3 lg:col-start-7 col-end-19 row-start-13 row-end-19 '>
            <p className='text-[#244d3f]'>Quick Check-In</p>

            <div className='flex flex-col gap-3 lg:flex lg:flex-row lg:justify-between'>
                <button 
                onClick={()=> setD([...d,name, 'call'])}
                className=''>
                        <div className='call'>
                    <div className="card bg-base-100 min-w-50 w-auto h-auto card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl flex justify-center"><span><FiPhoneCall></FiPhoneCall></span></h2>
                    <p className='text-center'>Call</p>
                </div>
                   </div>
                </div>

                </button>
                
                
             <button
             onClick={()=> setD([...d, name, 'text'])}>
                   
                <div className='text'>
                    <div className="card bg-base-100 min-w-50 w-auto h-auto card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl flex justify-center"><span><MdOutlineTextsms/></span></h2>
                    <p className='text-center'>Text</p>
                </div>
            </div>
                </div>


             </button>

             <button
             onClick={()=> setD([...d, name, 'video'])}>
                 <div className='video'>
                    <div className="card bg-base-100 min-w-50 w-auto h-auto card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="text-2xl flex justify-center"><span><IoVideocamOutline></IoVideocamOutline> </span></h2>
                    <p className='text-center'>Video</p>
                </div>
            </div>
                </div>
             </button>



               
            </div>
               
            

        </div>



      
       
    );
};

export default SixthCard;