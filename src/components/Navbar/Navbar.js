import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='border border-b-2 px-0 lg:px-6'>
            <div class="navbar">
                <div class="flex-1">
                    <Link to="/" class="btn btn-ghost normal-case text-xl">MeetRoom</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        <li><Link to='/join'>Join</Link></li>
                        <li><a href='support#'>Support</a></li>
                        <li><Link to="/signIn">Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;