import React from 'react';
import notificationsBan from "../../Assets/Images/group.png"

const Notification = () => {
    return (
        <div className='px-2'>
            <div class="text-center text-gray-200">
                <div class="flex flex-col lg:flex-row gap-2 items-center">
                   <div className="w-12/12 lg:w-6/12">
                   <img src={notificationsBan} class="w-full rounded shadow-2xl" alt='hero-imgs' />
                   </div>
                    <div className="w-12/12 lg:w-6/12">
                        <h1 class="lg:text-5xl text-xl font-bold mt-2 lg:mt-0">Refer a friend & Get 30% off</h1>
                        <p class="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex flex-col gap-4'>
                <textarea class="textarea textarea-bordered" placeholder="write your text"></textarea>
                    <button type="text" className='btn btn-primary rounded-2xl' >Send Notifications</button>
                </div>
            {/* <div className='my-4 '>
                <h2 className='text-center py-4'>Share with your friend</h2>
                <ul className='flex flex-row gap-5 justify-center items-center list-none text-4xl'>
                    <li className='text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-facebook-f"></i></li>
                    <li className='text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-whatsapp"></i></li>
                    <li className='text-blue-400 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-linkedin"></i></li>
                    <li className='text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-twitter"></i></li>
                </ul>
            </div> */}
            </div>
        </div>
    );
};

export default Notification;