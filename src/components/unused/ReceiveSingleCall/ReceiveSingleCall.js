import React from 'react';

const ReceiveSingleCall = () => {
    return (
        <div className="my-20 text-center">
            <div className="card w-96 mx-auto bg-base-100 shadow-2xl">
                <h2 className="text-2xl"> Receive Calling Page</h2>
                <div className="card-body flex flex-row justify-content-space-between align-items-center">
                    <div className=' flex-1 text-8xl'>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className='flex-1 text-green-700 text-4xl mt-8'>
                        <p>00:00</p>
                    </div>
                    <div className='flex-1 text-8xl'>
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <div className="card-body flex flex-row justify-content-space-between align-items-center my-8 ">
                    <div className=' flex-1 text-green-700 text-4xl'>
                        <i className="far fa-microphone"></i>
                    </div>
                    <div className='flex-1 text-pink-700 text-4xl'>
                        <i className="far fa-video"></i>
                    </div>
                    <div className='flex-1 text-red-700 text-4xl'>
                        <i className="fal fa-phone-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiveSingleCall;