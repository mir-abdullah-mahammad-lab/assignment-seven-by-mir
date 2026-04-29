import React from 'react';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { IoIosArchive } from "react-icons/io";
const SeventhCard = () => {
    return (
        <div className='col-span-6 row-span-6 space-y-2'>



            <div className="card min-w-96 w-auto h-auto bg-base-100 card-xs shadow-sm">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex min-w-38 w-auto h-auto items-center justify-center'>
                <p className='text-xl'><HiOutlineBellSnooze></HiOutlineBellSnooze></p>
                <p className='whitespace-nowrap text-2xl'> Snooze 2 weeks</p>
            </div>
                    </div>
            </div>
            
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                    <div className="card-body flex items-center justify-center">
              <div className='flex w-40 items-center justify-center'><span className='text-xl'><IoIosArchive></IoIosArchive></span><p className='text-2xl'>Archive</p></div>
                    </div>
            </div>

            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                    <div className="card-body flex items-center justify-center">
               <div className='flex w-40 items-center justify-center'>
                <span className='text-xl'><MdDelete></MdDelete></span>
                <p className='text-xl'>Delete</p></div>
        </div>
                    
            </div>











            
     </div>
           

           
    );
};

export default SeventhCard;