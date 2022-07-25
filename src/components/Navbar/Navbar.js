import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div class="navbar px-2 lg:px-6">
                <div class="flex-1">
                    <Link to="/" class="btn btn-ghost normal-case text-xl">MeetRoom</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        <li><a>Join</a></li>
                        <li><a>Support</a></li>
                        <li><a>Sign In</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;