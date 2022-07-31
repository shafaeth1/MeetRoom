import React from 'react';
import { AiOutlinePushpin } from "react-icons/ai"
import { FaCreativeCommons } from "react-icons/fa"
import { BsRecordCircle, BsPlus } from "react-icons/bs"
import { IoPeopleOutline } from "react-icons/io5"


const Video = () => {
    return (
        <div className='bg-slate-500'>
            <div className='px-10 py-20 bg-dark-500 w-full mx-auto'>
                <div className='flex list-none items-center text-white'>
                    <h2 className='text-xl text-white'>Discuss About Our New Projects</h2>
                    <div className='flex items-center rounded px-2 ml-6 bg-green-600'>
                        <li><IoPeopleOutline /></li>
                        <li className='px-3'>37+ </li>
                    </div>
                </div>
                <div className='text-white flex justify-between my-4'>
                    <div className='flex list-none items-center'>
                        <li className='bg-red-500 rounded-full'><BsRecordCircle /></li>
                        <li className='px-2'>REQ : 00.02.36s </li>
                    </div>
                    <div className='flex list-none items-center text-white'>
                        <li className='bg-green-500 rounded-full cursor-pointer'><BsPlus /></li>
                        <li className='px-2'>Add user to the class</li>
                    </div>
                </div>
                <div className='rounded-xl bg-green-200'>

                    <div className='text-white list-none text-xl flex gap-3 justify-start  p-4'>
                        <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-1 py-1 '><FaCreativeCommons /></li>
                        <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-1 py-1 '><AiOutlinePushpin /></li>

                    </div>
                    <div className='grid grid-rows min-h-screen justify-center items-center'>
                        <h2 className='bg-green-300 text-white px-2'>This is the week thats we can more presentation..</h2>
                        <div className='grid grid-cols-5 gap-2 justify-center place-items-end text-white rounded-2xl font-bold cursor-pointer list-none'>
                            <li className='py-4 bg-green-400 rounded-xl px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><i class="fal fa-microphone font-bold"></i></li>
                            <li className='bg-green-400 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 font-bold'><i class="fal fa-video font-bold"></i></li>
                            <li className='bg-red-500 rounded-xl text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2'><i class="far fa-phone-alt font-bold"></i></li>
                            <li className='bg-green-400 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 '><i class="far fa-arrow-circle-up font-bold"></i></li>
                            <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-4 py-2 '><i class="far fa-ellipsis-v font-bold"></i></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;