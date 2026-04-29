import React from 'react';
import insta from '../../public/instagram.png'
import facebook from '../../public/facebook.png'
import twitter from '../../public/twitter.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='w-full h-auto min-w-100 min-h-50 bg-[#244D3F] 
        flex flex-col items-center justify-center gap-4'>
            <h1 className='text-white text-3xl m-10'><span className='font-bold text-3xl'>Keen</span>Keeper</h1>
            <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <div className='text-xl'>
                <p className='text-white'>Social Links</p>
                <div className='flex flex-row justify-center gap-2'>
                    <Image
                    src={insta}
                    alt={" Image of the "}
                    width={20}
                    height={20}></Image>
                    <Image
                    src={facebook}
                    alt={" Image of Facebook "}
                    width={20}
                    height={20}></Image>
                    <Image
                    src={twitter}
                    alt={" Image of the "}
                    width={20}
                    height={20}></Image>
                </div>
            </div>
            <div className='w-full flex justify-around gap-4 space-y-10 text-white text-[12px] mt-15 mb-0'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex justify-between gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;