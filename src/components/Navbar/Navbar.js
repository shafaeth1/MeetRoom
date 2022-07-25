import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar ">
            <div class="flex-1">
                <a href='#' class="btn btn-ghost normal-case text-xl">MeetRoom</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0 text-xl">
                    <li><a>Join</a></li>
                    <li><a>Support</a></li>
                    <li><Link to="/signIn">Sign In</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;