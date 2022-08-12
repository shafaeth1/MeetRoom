import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import logo from '../../assets/images/logo.png'

const ConferenceRoom = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    return (
        <section className='bg-green-400' style={{maxWidth: {width}, maxHeight:{height}}}>
            <div className="flex justify-between px-2 md:hidden text-gray-900">
                <div className="flex display-flex">
                    <Link to="/" className="flex items-center lg:pl-6 gap-1 normal-case md:text-xl font-semibold"><img src={logo} alt='Logo' className='w-1/6 text-left'/> MeetRoom</Link>
                </div>
                <label for="my-drawer-2" className="btn btn-ghost ml-2 border">
                    <i className="fad fa-align-left text-2xl"></i>
                </label>
            </div>
            <div className='p-0'>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col p-4 bg-slate-900 lg:border-l border-gray-500 body">
                        {/* =======Main Body======= */}
                        <Outlet></Outlet> 
                    </div> 
                    {/* end page content */}

                    {/* =======Left Navbar======= */}
                    <LeftNavbar></LeftNavbar>

                </div>
            </div>
        </section>

    );
};

export default ConferenceRoom;