import React from 'react';
import Notifications from "../../Assets/Images/group.png"

const Notification = () => {
    return (
        <div>
            <h2 className='text-center text-2xl py-4'>Notification Page </h2>
            <div class="px-52 hero min-h-screen text-center">
                <div class="hero-content flex-col lg:flex-col-reverse">
                    <img src={Notifications} class="max-w-md rounded-lg shadow-2xl" alt='hero-imgs' />
                    <div>
                        <h1 class="text-5xl font-bold">Refer a friend & Get 30% off</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
            <div className='my-10 z-50  max-w-md mx-auto'>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder="Link will be display here" class="input input-bordered input-info w-full max-w-sm mx-auto" />
                    <button type="text" className='btn btn-primary rounded-2xl' >Copy the link</button>
                </div>
                <div className='my-4 '>
                    <h2 className='text-center py-4'>Share with your friend</h2>
                    <ul className='flex flex-row gap-5 justify-center items-center list-none text-4xl'>
                        <li className='text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-facebook-f"></i></li>
                        <li className='text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-whatsapp"></i></li>
                        <li className='text-blue-400 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-linkedin"></i></li>
                        <li className='text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-300'><i class="fab fa-twitter"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notification;