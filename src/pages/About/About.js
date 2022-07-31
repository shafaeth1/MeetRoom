import React from 'react';
import Team from '../../components/Team/Team';

const About = () => {
    return (
        <main className='px-2 lg:px-6 min-h-screen'>
            <section>
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-12">
                        <div className="w-full md:w-5/12 lg:w-5/12">
                            <img className='w-full' src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="meetrom" loading="lazy"/>
                        </div>
                        <div className="w-full md:w-7/12 lg:w-7/12 lg:pt-2">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">MeetRoom</h2>
                            <p className="mt-4 text-gray-600"> MeetRoom is an online video conferencing platform that powers all of your communication needs, including meetings, chat, fileshare and online events.</p>
                            <p className="mt-4 text-gray-600"> Upcomming new brand as a video conferencing world. This application will be unique and available for everyone with all features.Our application also will be available for android and ios in future.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End about us */}

            <section className='team py-4 pl-0 lg:pl-8'>
                <Team></Team>
            </section>
        </main>
    );
};

export default About;