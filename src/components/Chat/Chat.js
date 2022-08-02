import React from 'react';
import user from "../../Assets/Images/user.png"

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

<<<<<<< HEAD

            <div className="rounded-lg  bg-green-200 p-10">
                <div className="flex justify-between">
                    <h2>lfahfk</h2>
                    <img src={img} alt="Main user" className='w-10 rounded-full mx-5 text-red-200' />
                </div>
                <div className="flex ">
                    <img src={img} alt="Main user" className='w-10 rounded-full  text-red-200' />
                    <p><small>10:00-11:00</small></p>
                    <div class="divider divider-horizontal"></div>
                    <p><small>start in 8 hours</small></p>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className="flex">
                        <img src={img} alt="Main user" className='w-10 rounded-full  text-red-200' />
                        <img src={img} alt="Main user" className='w-10 rounded-full  text-red-200' />
                        <img src={img} alt="Main user" className='w-10 rounded-full  text-red-200' />
                    </div>
                    <div className="flex">
                        <button className="mx-2 bg-chat p-2 rounded text-white">Id</button>
                        <button className="mx-2 bg-primary p-2 rounded"> Start</button>

                    </div>
                </div>


            </div>
        </div >
=======
            <div className='flex items-center gap-2 bg-green-600 rounded p-2 mt-4'>
                <button><i className="far fa-image text-3xl text-gray-200"></i></button>
                <input type="text" placeholder="Type here" class="p-2 rounded-md border-none w-full px-2" />
                <button> <i className="far fa-paper-plane text-2xl font-medium"></i> </button>
            </div>
>>>>>>> 8106e09216af72d0786ff5fb8d261d9cea2628ef



    )
};

export default Chat;