import Image from 'next/image';
import React from 'react';

const FirstCard = ({matched_f}) => {
    return (
        <div className="col-span-6 row-span-12">
                                          
                <div className="card bg-base-100  shadow-sm ml-5">
                  <figure className="px-10 pt-10">
                    <Image
                    src={matched_f.picture}
                    alt={'Picture of Friend'}
                    width={60}
                    height={60}
                    preload={"eager"}
                    className='rounded-full'></Image>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{matched_f.name}</h2>
                    
                    
                    <p className={`${
                      matched_f.status === "overdue"? `bg-red-500`: matched_f.status === "on-track"? `bg-green-300 `:
                      `bg-yellow-300`} rounded-full w-20 whitespace-nowrap`}>{matched_f.status}</p>
                      <p className='bg-green-300 rounded-full w-15'>{matched_f.tags[0]}</p>
                      <p className="italic text-gray-400">{matched_f.bio} </p>

                    
                  </div>
                </div>
                        
            </div>
    );
};

export default FirstCard;