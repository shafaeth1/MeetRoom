import React from 'react';

const LeftNavbar = () => {
    return (
        <div class="drawer drawer-mobile rounded-md">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col px-2 bg-black border-l-2">
                {/* <!-- Page content here --> */}
                
            </div> 
            {/* end page content */}

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-24 bg-black text-white">
                    <div className="side-logo text-center bg-green-500 py-4 mb-0 lg:mb-12 rounded-full">
                        <i class="fas fa-video text-3x bg-white pr-2 pl-2 py-2 text-green-500 rounded-full"></i>
                    </div>
                    <li><a href="#home"><i class="fal fa-home text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform active:text-green-500"></i></a></li>
                    <li><a href="#home"><i class="fal fa-users text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform focus:text-green-500"></i></a></li>
                    <li><a href="#home"><i class="fal fa-video text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                    <li><a href="#home"><i class="fas fa-calendar-alt text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                    <li><a href="#home"><i class="fal fa-bell text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                    <li><a href="#home"><i class="fal fa-cog text-white text-lg lg:text-3xl hover:text-green-400 hover:translate-x-0.5 transition-transform"></i></a></li>
                </ul>
            </div>
            {/* end leftNavbar content */}
        </div>
    );
};

export default LeftNavbar;