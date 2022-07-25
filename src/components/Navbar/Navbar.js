import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div class="navbar ">
                <div class="flex-1">
                    <Link to="/" class="btn btn-ghost normal-case text-xl">MeetRoom</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        <li><a href='join#'>Join</a></li>
                        <li><a href='support#'>Support</a></li>
                        <li><Link to="/signIn">Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;