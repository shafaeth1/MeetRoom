import React from 'react';
import notificationsBan from "../../assets/images/group.png"

const Notification = () => {
    return (
        <div className='px-2'>
            <div className="text-center text-gray-200">
                <div className="flex flex-col lg:flex-row gap-2 items-center">
                   <div className="w-12/12 lg:w-6/12">
                   <img src={notificationsBan} className="w-full rounded shadow-2xl" alt='hero-imgs' />
                   </div>
                    <div className="w-12/12 lg:w-6/12">
                        <h1 className="lg:text-4xl text-2xl font-semibold">Send a push notifications</h1>
                        <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex flex-col gap-4'>
                    <textarea className="textarea textarea-bordered" placeholder="Type your messege" rows={5}></textarea>
                    <button type="text" className='btn bg-green-600 rounded-md' >Send Notification</button>
                </div>
            {/* <div className='my-4 '>
                <h2 className='text-center py-4'>Share with your friend</h2>
                <ul className='flex flex-row gap-5 justify-center items-center list-none text-4xl'>
                    <li className='text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i className="fab fa-facebook-f"></i></li>
                    <li className='text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i className="fab fa-whatsapp"></i></li>
                    <li className='text-blue-400 transition ease-in-out delay-150 hover:scale-110 duration-300'><i className="fab fa-linkedin"></i></li>
                    <li className='text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i className="fab fa-twitter"></i></li>
                </ul>
            </div> */}
            </div>
        </div>
    );
};

export default Notification;