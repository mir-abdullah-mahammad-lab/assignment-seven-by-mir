// import React from 'react';

import FifthCard from "@/GridComponents/FifthCard";
import FirstCard from "@/GridComponents/FirstCard";
import FourthCard from "@/GridComponents/FourthCard";
import SecondCard from "@/GridComponents/SecondCard";
import SeventhCard from "@/GridComponents/SeventhCard";
import SixthCard from "@/GridComponents/SixthCard";
import ThirdCard from "@/GridComponents/ThirdCard";
import Image from "next/image";

const frnd = async ({params}) => {
    const {frnd} = await params;
    console.log(frnd, 'id', typeof(frnd))

    const data = await fetch('http://localhost:3000/friends.json')
    const friends = await data.json()
    console.log(friends, "alll friend array ")
    const matched_f = friends.find(fn => fn.id === Number(frnd))
    console.log(matched_f)
    return (
        <div className="grid grid-cols-18 grid-row-18 gap-2 p-10">
            <FirstCard matched_f={matched_f}></FirstCard>
            <SecondCard matched_f={matched_f}></SecondCard>
            <ThirdCard matched_f={matched_f}></ThirdCard>
            <FourthCard matched_f={matched_f}></FourthCard>
            <FifthCard></FifthCard>
            <SixthCard></SixthCard>
            <SeventhCard></SeventhCard>
            
           
            
        </div>
    );
};

export default frnd;