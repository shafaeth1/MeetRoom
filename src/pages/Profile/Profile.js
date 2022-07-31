import React from 'react';


const Profile = () => {
    return (
        <div className='px-20 w-full mx-auto'>
            <div className='' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600273759837-a4d4abb62142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVqZXJ8ZW58MHx8MHx8&w=1000&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "600px", height: "1000px" }}>
                <div className='text-white list-none text-xl flex gap-3 p-4'>
                    <li><i class="far fa-angle-double-up"></i></li>
                    <li><i class="far fa-angle-double-up"></i></li>
                </div>
                <div className='grid grid-rows min-h-screen justify-center items-center'>
                    <h2 className='bg-green-500 text-white mx-4'>This is the week thats we can more presentation..</h2>
                    <div className='grid grid-cols-5 gap-2 justify-center place-items-end text-white rounded-2xl font-bold cursor-pointer list-none'>
                        <li className='  py-4 bg-green-300 font-bold rounded-xl px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-bold'><i class="fal fa-microphone font-bold"></i></li>
                        <li className='  bg-green-300 font-bold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 font-bold'><i class="fal fa-video font-bold"></i></li>
                        <li className='  bg-red-500 rounded-xl text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 font-bold'><i class="far fa-phone-alt font-bold"></i></li>
                        <li className='  bg-green-300 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 '><i class="far fa-arrow-circle-up font-bold"></i></li>
                        <li className='  bg-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-4 py-2 '><i class="far fa-ellipsis-v font-bold"></i></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;