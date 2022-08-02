import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';

const VideoConference = () => {
    return (
        <section className='py-2 lg:py-8 bg-green-400'>
            <div className="flex justify-between px-2 md:hidden">
                <div className="flex display-flex">
                    <Link to="/" className="flex items-center lg:pl-6 gap-1 normal-case md:text-xl font-semibold"><img src='favicon.ico' alt='Logo' className='w-1/6 text-left'/> MeetRoom</Link>
                </div>
                <label for="my-drawer-2" className="btn btn-ghost ml-2 border">
                    <i className="fad fa-align-left text-2xl"></i>
                </label>
            </div>
            <div className='w-full px-2 lg:px-8'>
                <LeftNavbar></LeftNavbar>
            </div>
            {/* End Left Sidebar */}
        </section>
    );
};

export default VideoConference;