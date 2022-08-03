
import React from 'react';
import user from "../../Assets/Images/user.png"
import Schedule from '../Schedule/Schedule';


const Chat = () => {
    return (
        <div className='w-full'>
            <div className='rounded-lg mb-2 tab-bar overflow-y-auto max-h-96'>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                    <div>
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 flex-row-reverse text-right pr-1'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 ml-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>You</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 flex-row-reverse text-right pr-1'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 ml-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>You</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 flex-row-reverse text-right pr-1'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 ml-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>You</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

            </div>


            <div className='flex items-center gap-2 bg-green-600 rounded p-2 mt-4'>
                <button><i className="far fa-image text-3xl text-gray-200"></i></button>
                <input type="text" placeholder="Type here" className="p-2 rounded-md border border-gray-500-none w-full px-2" />
                <button> <i className="far fa-paper-plane text-2xl font-medium"></i> </button>
            </div>            
        </div>


    )
};

export default Chat;