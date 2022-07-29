import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const showdate = new Date()
    const time = showdate.getHours() + ":" + showdate.getMinutes();

    return (
        <header className="px-4">
            <div class="navbar border-b-2">
                <div class="flex-1">
                    <Link to="/" class="btn btn-ghost normal-case md:text-xl">MeetRoom</Link>
                </div>
                <div class="flex flex-column justify-content-center align-items-center">
                    <span className="text-xl font-bold px-10">{time}</span>
                    <ul class="menu menu-horizontal p-0 md:text-xl">
                        <li><Link to='/join'>Join</Link></li>
                        <li><Link to='/support'>Support</Link></li>
                        <li><Link to="/signIn">Sign In</Link></li>

                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;