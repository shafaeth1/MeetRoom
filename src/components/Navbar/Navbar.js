import React from 'react';

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
                    <li><a>Sign In</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;