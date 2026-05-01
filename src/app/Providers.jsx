'use client'
import { TimelineProvider } from "./context/NameContext"
import React from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <TimelineProvider>
                {children}
            </TimelineProvider>
        </div>
    );
};

export default Providers;