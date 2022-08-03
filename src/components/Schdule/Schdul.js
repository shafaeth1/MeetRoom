import React from 'react';
import user from "../../Assets/Images/user.png"

const Schdul = () => {
    return (
        <div className="mt-3 bg-chat  rounded mx-auto">

            <div className="rounded-lg  rounded-lg mb-2 overflow-y-auto max-h-96 px-3 py-4 ">
                <div className="flex justify-between">
                    <h2 className='text-xl text-white'>Design Daily Zoomla Meeting</h2>
                    <button> <i className=" fad fa-ellipsis-h-alt bg-slate-800 text-xs px-3 py-1 hover:bg-slate-700 rounded font-medium text-white"></i> </button>
                </div>
                <div className="flex my-2">
                    <button> <i className=" fal fa-clock text-gray-200 text-xs  font-small mr-2"></i> </button>
                    <p><small className='text-white'>10:00-11:00</small></p>
                    <div className=" text-white mx-2">|</div>
                    <p><small className='text-white'>start in 8 hours</small></p>
                </div>
                <div className='flex justify-between mt-7'>
                    <div className="flex">
                        <img src={user} alt="Main user" className='w-10 rounded mr-1  text-red-200' />
                        <img src={user} alt="Main user" className='w-10 rounded   text-red-200' />
                        <img src={user} alt="Main user" className='w-10 rounded ml-1 text-red-200' />
                    </div>
                    <div className="flex">
                        <button className="mx-2 bg-slate-800 p-2 rounded text-white hover:bg-slate-700">Id</button>
                        <button className="mx-2 bg-blue-600 p-2 rounded shadow-green-200 hover:bg-blue-500"> Start</button>

                    </div>
                </div>


            </div>
        </div >
    );
};

export default Schdul;