// import React from 'react';
'use client'

import { useContext } from "react";
import { dforTimeline } from "../context/NameContext";


const Timeline = () => {
    const {d,setD} = useContext(dforTimeline) 
    console.log('in the timeline', d)
    return (
        <div>
           <div className="TimeLineBar border-2 container w-max-100 mx-auto">
            <h1 className="text-3xl font-bold">Timeline</h1>
                <label className="select">
                    <select>
                        <option>Filter Timeline</option>
                        <option>Meetup</option>
                        <option>Call</option>
                        <option>Text</option>
                    </select>
                </label>

                <div className="min-w-96 w-auto h-auto bg-amber-500">
                  
                    <p>{d[1]}</p>
                    <p>{d[0]}</p>
                </div>
                {/* {setD([])} */}
           </div>
        </div>
    );
};

export default Timeline;