import React from 'react';
import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';

const VideoConference = () => {
    return (
        <section className='py-2 lg:py-8 bg-green-400'>
            <div className='w-full px-2 lg:px-8'>
                <LeftNavbar></LeftNavbar>
            </div>
            {/* End Left Sidebar */}
        </section>
    );
};

export default VideoConference;