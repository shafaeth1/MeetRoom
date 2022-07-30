import React from 'react';
import Slider from '../../components/Slider/Slider';

const GroupCall = () => {
    return (
        <div className="">
            <div className="flex mx-auto h-screen justify-content-center align-items-center z-[-100]">
                <video className="video-container w-full" controls>

                </video>

            </div>
            <Slider></Slider>
        </div>
    );
};

export default GroupCall;