import React from 'react';

const Video = () => {
    return (
        <div className=''>
            <div className='card w-96 mx-auto' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600273759837-a4d4abb62142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVqZXJ8ZW58MHx8MHx8&w=1000&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='card-body flex flex-col h-screen'>
                    <h2 className='bg-green-600 text-white'>This is the week thats we can more presentation..</h2>
                    <ul className='flex flex-row justify-evenly gap-3 text-white rounded-2xl font-bold cursor-pointer'>
                        <li className='self-end py-4 bg-green-300 rounded-xl px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-bold'><i class="fal fa-microphone font-bold"></i></li>
                        <li className='self-end bg-green-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 font-bold'><i class="fal fa-video font-bold"></i></li>
                        <li className='self-end bg-red-500 rounded-xl text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 font-bold'><i class="far fa-phone-alt font-bold"></i></li>
                        <li className='self-end bg-green-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 '><i class="far fa-arrow-circle-up font-bold"></i></li>
                        <li className='self-end bg-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-4 py-2 '><i class="far fa-ellipsis-v font-bold"></i></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Video;