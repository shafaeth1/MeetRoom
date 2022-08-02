import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ChatTab from '../../../components/ChatTab/ChatTab';
import LeftNavbar from '../../../components/LeftNavbar/LeftNavbar';
import Video from '../../../components/Video/Video';

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
            </div>
        </div>
    );
};

export default VideoConference;