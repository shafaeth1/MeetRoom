import React from 'react';
import Notification from '../components/Notification/Notification';
import Video from '../components/Video/Video';
import Home from '../pages/Home/Home';

const Alamin = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className='bg-green-800 text-white p-4 text-lg font-semibold'>Md. Alamin Sarkar</h1>
                <p className='text-gray-200 bg-green-700 p-2'>Contribute on this project</p>
            </div>
            {/* ============Working Component========== */}
            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 border p-2 w-full'>
                    <h1 className='text-center py-2 font-semibold text-green-600'>Working Now</h1>
                    <Notification/>
                </div>
            </div>

            {/* ==========Finished Component======= */}
            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>Create Home Pages</h1>
                    <Home></Home>
                </div>
                {/* end col */}
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>Desgin Video Component</h1>
                    <Video></Video>
                </div>
                {/* end col */}
            </div>
            {/* end row */}

            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>Single Calling Style</h1>
                    {/* <SingleCall/> */}
                </div>
                {/* end col */}
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>Group Calling Style</h1>
                    {/* <GroupCall/> */}
                </div>
                {/* end col */}
            </div>
            {/* end row */}
            
        </section>
    );
};

export default Alamin;