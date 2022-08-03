
import React from 'react';
import user from "../../Assets/Images/user.png"
import Schdul from '../Schdule/Schdul';


const Chat = () => {
    return (
        <div className='w-full'>
            <div className='rounded-lg mb-2 overflow-y-auto max-h-96'>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border mr-1 rounded-full' />
                    <div>
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 flex-row-reverse text-right pr-1'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border ml-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>You</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 flex-row-reverse text-right pr-1'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border ml-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>You</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 justify-start'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border mr-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>Uwe Werner</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

                <div className='flex items-center py-1 flex-row-reverse text-right pr-1'>
                    <img src={user} alt="Main user" className='w-12 h-12 p-1 border ml-1 rounded-full' />
                    <div >
                        <h2 className='text-md font-medium'>You</h2>
                        <p className='text-sm bg-gray-600 p-1 rounded'>Guys did i join late?</p>
                    </div>
                </div>

            </div>


            <div className='flex items-center gap-2 bg-green-600 rounded p-2 mt-4'>
                <button><i className="far fa-image text-3xl text-gray-200"></i></button>
                <input type="text" placeholder="Type here" class="p-2 rounded-md border-none w-full px-2" />
                <button> <i className="far fa-paper-plane text-2xl font-medium"></i> </button>
            </div>


            {/* next part */}
            <Schdul></Schdul>

        </div>


    )
};

export default Chat;