import React from 'react';
import SignUp from '../Register/SignUp';

const Nibras = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className='bg-green-800 text-white p-4 text-lg font-semibold'>Nibras</h1>
                <p className='text-gray-200 bg-green-700 p-2'>REgister authentication</p>
                <SignUp></SignUp>
            </div>
            {/* ============Working Component========== */}
            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 border p-2 w-full'>
                    <h1 className='text-center py-2 font-semibold text-green-600'>Working Now</h1>
                </div>
            </div>

            {/* ==========Finished Component======= */}
            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>Your first Col code</h1>
                </div>
                {/* end col */}
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>your Second Col Code</h1>
                </div>
                {/* end col */}
            </div>
            {/* end row */}

            <div className='flex flex-col lg:flex-row gap-4 p-4'>
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>Your first Col code</h1>
                </div>
                {/* end col */}
                <div className='w-12/12 md:w-6/12 border p-2 overflow-y-scroll max-h-96'>
                    <h1 className='text-center py-2 border-b-2 font-semibold text-green-600'>your Second Col Code</h1>
                </div>
                {/* end col */}
            </div>
            {/* end row */}

        </section>
    );
};

export default Nibras;