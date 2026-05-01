// import React from 'react';

import FifthCard from "@/GridComponents/FifthCard";
import FirstCard from "@/GridComponents/FirstCard";
import FourthCard from "@/GridComponents/FourthCard";
import SecondCard from "@/GridComponents/SecondCard";
import SeventhCard from "@/GridComponents/SeventhCard";
import SixthCard from "@/GridComponents/SixthCard";
import ThirdCard from "@/GridComponents/ThirdCard";




const frnd = async ({params}) => {
    const {frnd} = await params;
    const data = await fetch('http://localhost:3000/friends.json')
    const friends = await data.json()
    const matched_f = friends.find(fn => fn.id === Number(frnd))
    // console.log(matched_f)
    return (
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-18 lg:grid-row-18 lg:gap-2 lg:p-10">
            <FirstCard matched_f={matched_f}></FirstCard>
            <SecondCard matched_f={matched_f}></SecondCard>
            <ThirdCard matched_f={matched_f}></ThirdCard>
            <FourthCard matched_f={matched_f}></FourthCard>
            <FifthCard></FifthCard>
            <SixthCard name={matched_f.name}></SixthCard>
            <SeventhCard></SeventhCard>
            
           
            
        </div>
    );
};

export default frnd;