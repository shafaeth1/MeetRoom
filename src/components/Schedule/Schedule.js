import React from 'react';
import user from "../../Assets/Images/user.png"

const Schedule = () => {
    return (
        <div className="bg-chat">
            

                <div className='border border-gray-500 p-2'>
                    <div className="flex justify-between">
                        <h2 className='text-xl text-white'>RoomMate: Student Meeting</h2>
                        <button> <i className=" fad fa-ellipsis-h-alt bg-slate-800 text-xs px-3 py-1 hover:bg-slate-700 rounded font-medium text-white"></i> </button>
                    </div>
                    <div className="flex my-2">
                        <button> <i className=" fal fa-clock text-gray-200 text-xs font-small mr-2"></i> </button>
                        <p><small className='text-white'>10:00-11:00</small></p>
                        <div className=" text-white mx-2">|</div>
                        <p><small className='text-white'>start in 8 hours</small></p>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <div className="flex gap-2">
                            <img src={user} alt="Main user" className='w-8 h-8 border border-gray-300 rounded-full' />
                            <img src={user} alt="Main user" className='w-8 h-8 border border-gray-300 rounded-full' />
                            <img src={user} alt="Main user" className='w-8 h-8 border border-gray-300 rounded-full' />
                        </div>
                        <div className="flex">
                            <button className="mr-1 bg-slate-800 py-1 px-2 rounded text-white hover:bg-slate-700">Id</button>
                            <button className="ml-1 bg-green-600 py-1 px-2 rounded shadow-green-200 hover:bg-blue-500"> Start</button>
                        </div>
                    </div>
                </div>

                
           
        </div >
    );
};

export default Schedule;