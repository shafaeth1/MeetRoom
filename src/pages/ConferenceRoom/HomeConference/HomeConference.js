import React from 'react';
// import Hero from '../../../components/Hero/Hero';
import { useEffect, useState } from 'react';

import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';

import Hero from '../../../components/Hero/Hero';

const HomeConference = () => {
    const [value, setValue] = useState(new Date());
    const [value2, onChange] = useState(new Date());
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
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