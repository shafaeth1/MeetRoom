import React from 'react';

const Hero = () => {
    return (
        <div className='p-10 bg-green-500'>
            <div className="flex">
                <div class="card w-3/6 bg-base-100 shadow-xl image-full mr-4">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">10:10 pm</h2>
                        <p>Monday, August 1st 2022</p>

                    </div>
                </div>
                <div class="card w-96 bg-green-100 text-black-content ml-10">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 py-5 ml-0 w-5/6">
                <div class="card w-64 bg-primary text-primary-content ml-0">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 class="card-title">New Meeting</h2>
                        <p>set up new meeting</p>
                    </div>
                </div>
                <div class="card w-64 bg-orange-500 text-primary-content ml-0">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 class="card-title">Join Meeting</h2>
                        <p>Via invitation link</p>
                    </div>
                </div>
                <div class="card w-64 bg-lime-500 text-primary-content m-auto">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 class="card-title">Schedule</h2>
                        <p>plan your meeting</p>
                    </div>
                </div>
                <div class="card w-64 bg-amber-500 text-primary-content m-auto">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <i className="fal fa-video font-bold "></i>
                        </div>
                        <h2 class="card-title">Share Screen</h2>
                        <p>show your interface</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;