import React from 'react';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import Calendar from 'react-calendar';
import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';

const Hero = () => {
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
        <div className='p-10 bg-slate-900'>
            <div className="flex">
                <div className="card w-3/6 bg-base-100 shadow-xl image-full mr-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <Clock value={value} />
                        <h2 className="card-title">{date}</h2>
                    </div>
                </div>
                <div className="card w-90 bg-green-100 text-black-content ml-5 ">
                    <h1 className="card-title m-auto"><Calendar onChange={onChange} value={value2} /></h1>
                </div>
            </div>
            <div className="grid grid-cols-4 pt-20 ml-0 w-5/6">
                <div className="card w-64 bg-primary text-primary-content ml-0">
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 className="card-title">New Meeting</h2>
                        <p>set up new meeting</p>
                    </div>
                </div>
                <div className="card w-64 bg-orange-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 className="card-title">Join Meeting</h2>
                        <p>Via invitation link</p>
                    </div>
                </div>
                <div className="card w-64 bg-lime-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 className="card-title">Schedule</h2>
                        <p>plan your meeting</p>
                    </div>
                </div>
                <div className="card w-64 bg-amber-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 className="card-title">Share Screen</h2>
                        <p>show your interface</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;