import React from 'react';
// import Hero from '../../../components/Hero/Hero';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';

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
                <div className='w-full mx-auto cursor-pointer'>
                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="card w-12/12 lg:w-8/12 bg-base-100 shadow-xl h-full" style={{backgroundImage: 'url(https://placeimg.com/400/225/arch)'}}>
                            <div className="card-body bg-clock text-gray-300">
                                <div className="flex justify-between">
                                    <Clock value={value} />
                                    <h2 className="card-title">{date}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card w-12/12 lg:w-4/12 bg-primary text-primary-content">
                            <div className="card-body">
                                <div className="flex justify-start">
                                    <i className="fal fa-video font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i>
                                </div>
                                <h2 className="text-lg font-semibold">New Meeting</h2>
                                <p className='text-sm'>Start meeting</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2 py-2">
                        <div className="card w-12/12 lg:w-6/12 bg-orange-500 text-primary-content ml-0">
                            <div className="card-body">
                                <div className="flex justify-start">
                                    <i className="fal fa-plus-square font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i>
                                </div>
                                <h2 className="text-lg font-semibold">Join Meeting</h2>
                                <p className='text-sm'>Via invitation link</p>
                            </div>
                        </div>
                        <div className="card w-12/12 lg:w-6/12 bg-lime-500 text-primary-content ml-0">
                            <div className="card-body">
                                <div className="card-actions justify-start">
                                    <i className="fal fa-calendar-alt font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i>
                                </div>
                                <h2 className="text-lg font-semibold">Schedule</h2>
                                <p className='text-sm'>plan your meeting</p>
                                
                            </div>
                        </div>
                        <div className="card w-12/12 lg:w-6/12 bg-amber-500 text-primary-content ml-0">
                            <div className="card-body">
                                <div className="card-actions justify-start">
                                    <i className="fal fa-desktop font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i>
                                </div>
                                <h2 className="text-lg font-semibold">Share Screen</h2>
                                <p className='text-sm'>show your interface</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="md:w-12/12 lg:w-3/12">
                
            </div>
        </div>
    );
};

export default HomeConference;