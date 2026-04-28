// import React from 'react';
'use client'
import Image from 'next/image';
import logo from '../../public/logo.png'
import { CiHome,  CiClock2 } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [bgColorHome, setBgColorHome] = useState(false)
    const [bgColorTimeline, setBgColorTimeline] = useState(false)
    const [bgColorStats, setBgColorStats] = useState(false)
    
    return (
       <div className='w-auto flex flex-col md:flex md:flex-row md:justify-between px-5'>
         <div>
            <Image 
            src={logo}
            alt={'logo'}
            ></Image>
        </div>
        <div className='flex gap-3'>
            <Link href={'/home'}><button
            onClick={() => {setBgColorHome(true);
                setBgColorTimeline(false);
                setBgColorStats(false)
            } } className={`btn btn-success flex justify-center items-center ${ bgColorHome? "bg-green-400":"bg-white"}`}><CiHome /> Home</button>
            </Link>
           <Link href={'/timeline'}> <button 
           onClick={() => {setBgColorTimeline(true);
            setBgColorHome(false);
            setBgColorStats(false);
           }

            } className={`btn btn-success flex justify-center items-center ${ bgColorTimeline? "bg-green-400":"bg-white"}`}
           ><CiClock2 />Timeline</button>
           </Link>
            <Link href={'/stats'}>
            <button onClick={() => {setBgColorStats(true);
                setBgColorHome(false);
                setBgColorTimeline(false)
            } } className={`btn btn-success flex justify-center items-center ${ bgColorStats? "bg-green-400":"bg-white"}`}> <BsGraphUp />Stats </button>
            </Link>
        </div>
       </div>

    );
};

export default Navbar;