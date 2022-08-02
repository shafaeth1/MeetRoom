import React from 'react';
import user from "../../Assets/Images/user.png"
import type from "../../components/Chat/keyboard-solid.svg"
import send from "../../components/Chat/paper-plane-solid.svg"
import img from "../../components/Chat/images-solid.svg"


const Chat = () => {
    return (
        <div className=' m-5 lg:w-2/5 sm:w1/5 mx-auto '>

            <div className='rounded-lg  bg-chat p-10'>
                <div className='flex items-center justify-start ml-5 mt-5'>

                    <img src={user} alt="Main user" className='w-12 rounded-full' />

                    <div >
                        <h2 className='text-lg font-semibold'>Sara</h2>
                        <p className='rounded mt-2 bg-blue-200 p-2'>Guys did i join late?</p>
                    </div>
                </div>
                <div className='flex items-center justify-start ml-5 mt-5'>

                    <img src={user} alt="Main user" className='w-12 rounded-full' />

                    <div >
                        <h2 className='text-lg font-semibold'>Sara</h2>
                        <p className='rounded p-2 mt-2 bg-blue-200'>Guys did i join late?</p>
                    </div>
                </div>
                <div className='flex items-center justify-end mr-5 mt-5'>

                    <img src={user} alt="Main user" className='w-12 rounded-full' />

                    <div >
                        <h2 className='text-lg font-semibold'>Sara</h2>
                        <p className='rounded p-2 mt-2 bg-blue-200'>Guys did i join late?</p>
                    </div>
                </div>
                <div className='flex items-center justify-start ml-5 mt-5'>

                    <img src={user} alt="Main user" className='w-12 rounded-full' />

                    <div >
                        <h2 className='text-lg font-semibold'>Sara</h2>
                        <p className='rounded p-2 mt-2 bg-blue-200'>Guys did i join late?</p>
                    </div>
                </div>
                <div className='flex items-center justify-start ml-5 mt-5'>

                    <img src={type} alt="Main user" className='w-10 rounded-full' />

                    <div >

                        <p className='ml-5'> Something is typing..</p>
                    </div>
                </div>
                <div className='flex   ml-5 mt-5 bg-green-500 rounded p-4'>
                    <img src={img} alt="Main user" className='w-10 rounded-full mx-5 text-red-200' />
                    <div class="divider divider-horizontal"></div>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <button className='mx-5 bg-blue-200 p-3 rounded-full'><img src={send} alt="Main user" className='w-10 rounded-full ' /></button>
                </div>
            </div>


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



    )
};

export default Chat;