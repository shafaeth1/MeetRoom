import React from 'react';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const RoomHome = () => {
    const [value, setValue] = useState(new Date());
    const current = new Date();
    const dayName = current.toString().split(' ')[0];
    const monthName = current.toString().split(' ')[1];
    const date = `${dayName}, ${current.getDate()} ${monthName} ${current.getFullYear()}`;

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (

        <div className='w-full mx-auto cursor-pointer'>
            <div className="flex flex-col lg:flex-row gap-2">
                <div className="card w-12/12 lg:w-8/12 bg-base-100 shadow-xl h-full" style={{ backgroundImage: 'url(https://placeimg.com/400/225/arch)', backgroundSize: 'cover' }}>
                    <div className="card-body bg-clock text-gray-300">
                        <div className="flex flex-col md:flex-row justify-center lg:justify-between mx-auto">
                            <Clock value={value}/>
                            <h2 className="card-title text-md lg:text-4xl p-2">{date}</h2>
                        </div>
                    </div>
                </div>

                {/* ======Single Video Calling===== */}
                <div className="card w-12/12 lg:w-4/12 bg-primary text-primary-content">
                    <div className="card-body">
                        <div className="flex justify-start gap-1">
                            <div><i className="fal fa-video font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i></div>
                            <button class="choiceButton" onClick={() => window.location.replace("/CreateRoom")}>
                                Get Started
                             </button>
                        </div>
                        <h2 className="text-lg font-semibold">Single call</h2>
                        <p className='text-sm'>Start Calling</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 py-2">
                 {/* ======Group Video Calling===== */}
                <div className="card w-12/12 lg:w-6/12 bg-orange-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="flex justify-start">
                            <div>
                            <i className="fas fa-video-plus font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i>
                            </div>
                            <button class="choiceButton" onClick={() => window.location.replace("/CreateRoomGroup")}>
                                Get Started
                            </button>
                        </div>
                        <h2 className="text-lg font-semibold">Group Call</h2>
                        <p className='text-sm'>Start Group Calling</p>
                    </div>
                </div>

                 {/* ======Chatting Option===== */}
                <div className="card w-12/12 lg:w-6/12 bg-lime-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="flex justify-start">
                            <div>
                                <i className="fas fa-sms font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i>
                            </div>
                            <button class="choiceButton" onClick={() => window.location.replace("/ChatModes")}>
                                Get Started
                            </button>
                        </div>
                        <h2 className="text-lg font-semibold">Online Chat</h2>
                        <p className='text-sm'>Start Just Chatting</p>
                    </div>
                </div>

                 {/* ======Live BroadCast===== */}
                <div className="card w-12/12 lg:w-6/12 bg-amber-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="flex justify-start">
                            <div>
                                <i className="far fa-signal-stream font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i>
                            </div>
                            <button class="choiceButton" onClick={() => window.location.replace("/CreateRoomBroadcast")}>
                                Get Started
                            </button>
                        </div>
                        <h2 className="text-lg font-semibold">Online Chat</h2>
                        <p className='text-sm'>Start Just Chatting</p>

                    </div>
                </div>

                {/* ======Schedule Option===== */}
                <div className="card w-12/12 lg:w-6/12 bg-lime-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <i className="fal fa-calendar-alt font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i>
                        </div>
                        <Link to="/conference/schedule" className="text-lg font-semibold">Schedule</Link>
                        <p className='text-sm'>plan your meeting</p>

                    </div>
                </div>

                 {/* ======Share Screen===== */}
                <div className="card w-12/12 lg:w-6/12 bg-amber-500 text-primary-content ml-0">
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <i className="fal fa-desktop font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i>
                        </div>
                        <h2 className="text-lg font-semibold">Share Screen</h2>
                        <p className='text-sm'>show your interface</p>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default RoomHome;