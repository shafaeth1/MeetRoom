import React from 'react';
import Schedule from '../../components/Schedule/Schedule'

const Hossain = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className='bg-green-800 text-white p-4 text-lg font-semibold'>Md. Hossain</h1>
                <p className='text-gray-200 bg-green-700 p-2'>Contribute on this project</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 md:w-12/12 border p-2'>
                    <h1>Your first Col code</h1>
                    <Schedule />
                </div>
                {/* end col */}
                <div className='w-12/12 md:w-6/12 border p-2'>
                    <h1>your Second Col Code</h1>
                </div>
                {/* end col */}
            </div>
            {/* end row */}

            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 md:w-6/12 border p-2'>
                    <h1>Your first Col code</h1>
                </div>
                {/* end col */}
                <div className='w-12/12 md:w-6/12 border p-2'>
                    <h1>your Second Col Code</h1>
                </div>
                {/* end col */}
            </div>
            {/* end row */}
            
        </section>
    );
};

export default Hossain;