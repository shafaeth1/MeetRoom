import React from 'react';
import Hero from '../../../components/Hero/Hero';
import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';

const HomeConference = () => {
    return (
        <div className="flex justify-center gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-9/12">
                <Hero></Hero>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="md:w-12/12 lg:w-3/12">
                
            </div>
        </div>
    );
};

export default HomeConference;