import React from 'react';
import Video from '../Video/Video';
import Slider from '../Slider/Slider';

const LeftNavbar = () => {
    return (
        <div className="drawer drawer-mobile rounded-md">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-4 bg-slate-900 lg:border-l-2">
                {/* =======Main Body======= */}
                <div className="flex justify-center gap-1 flex-col lg:flex-row">
					<div className="md:w-12/12 lg:w-8/12">
                        <Video></Video>
                        <Slider></Slider>
					</div>
                    {/* ========Right Sidebar ========*/}
					<div className="md:w-12/12 lg:w-4/12">
                       <h1>Chat</h1>
            
                    </div>
                </div>
                
            </div> 
            {/* end page content */}

            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-24 bg-black text-white">
                    <div className="side-logo text-center bg-green-500 py-4 mb-0 lg:mb-12 rounded-full">
                        <i className="fas fa-video text-3x bg-white pr-2 pl-2 py-2 text-green-500 rounded-full"></i>
                    </div>
                    <li><a href="#home"><i className="fal fa-home text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform active:text-green-500"></i></a></li>
                    <li><a href="#home"><i className="fal fa-users text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform focus:text-green-500"></i></a></li>
                    <li><a href="#home"><i className="fal fa-video text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                    <li><a href="#home"><i className="fas fa-calendar-alt text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                    <li><a href="#home"><i className="fal fa-bell text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                    <li><a href="#home"><i className="fal fa-cog text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                </ul>
            </div>
            {/* end leftNavbar content */}
        </div>
    );
};

export default LeftNavbar;