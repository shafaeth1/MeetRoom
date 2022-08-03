import React from 'react';
import user from "../../Assets/Images/user.png"

const Participant = () => {
    return (
        <div className='w-full'>
            <div className='rounded-lg mb-2 py-4 tab-bar overflow-y-auto max-h-96'>

                <div className='flex items-center py-1 my-1 gap-x-2 flex-row-reverse text-right border border-gray-500'>
                    <div className='flex relative'>
                        <img src={user} alt="Main user" className='w-10 h-10 p-1 mr-1' />
                        <i className="fas fa-circle text-green-500 absolute right-1 bottom-6 text-sm"></i>
                    </div>
                    <h2 className='text-md font-medium'>Md. Hasan Mia</h2>
                </div>

                <div className='flex items-center py-1 my-1 gap-x-2 flex-row-reverse text-right border border-gray-500'>
                    <div className='flex relative'>
                        <img src={user} alt="Main user" className='w-10 h-10 p-1 mr-1' />
                        <i className="fas fa-circle text-green-500 absolute right-1 bottom-6 text-sm"></i>
                    </div>
                    <h2 className='text-md font-medium'>Md. Alamin Sarkar</h2>
                </div>

                <div className='flex items-center py-1 my-1 gap-x-2 flex-row-reverse text-right border border-gray-500'>
                    <div className='flex relative'>
                        <img src={user} alt="Main user" className='w-10 h-10 p-1 mr-1' />
                        <i className="fas fa-circle text-green-500 absolute right-1 bottom-6 text-sm"></i>
                    </div>
                    <h2 className='text-md font-medium'>Md. Hossain Sarkar</h2>
                </div>

            </div>
        </div>
    );
};

export default Participant;