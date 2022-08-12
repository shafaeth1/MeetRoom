import React from 'react';
// import Slider from 'react-slick';
import ChatTab from '../../../components/ChatTab/ChatTab';
import Video from '../../../components/Video/Video';
import Slider from '../../../components/Slider/Slider';
import Schedule from '../../../components/Schedule/Schedule';

const VideoConference = () => {
    return (
        <div className="flex justify-center gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-8/12">
                <Video></Video>
                <Slider></Slider>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="md:w-12/12 lg:w-4/12">
                <ChatTab></ChatTab>
                {/*====== Next Schedule===== */}
                <div className="mt-2">
                    <h2 className='text-gray-300 font-semibold py-1 pl-3'>Next Schedule is:</h2>
                    <div className="rounded-lg first-letter:mb-2 overflow-y-auto max-h-40 px-3 py-2 tab-bar">
                    <Schedule></Schedule>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoConference;