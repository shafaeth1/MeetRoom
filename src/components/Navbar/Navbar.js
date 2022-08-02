import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
       
      };
    // const showdate = new Date()
    // const time = showdate.getHours() + ":" + showdate.getMinutes();
    return (
        <header className="px-4 bg-header text-gray-200">
            <div class="navbar sticky">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <i class="fad fa-align-left text-2xl"></i>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/join'>Join</Link></li>
                                <li><Link to='/liveChat'>Live Chat</Link></li>
                                <li><Link to='/support'>Support</Link></li>
                        </ul>
                    </div>
                    <div className="flex display-flex">
                        <Link to="/" class="btn btn-ghost normal-case md:text-xl"><img src='favicon.ico' className='w-1/6'/> MeetRoom</Link>
                    </div>
                </div>
                <div class="navbar-start hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                            <li><Link to='/join'>Join</Link></li>
                            <li><Link to='/liveChat'>Live Chat</Link></li>
                            <li><Link to='/support'>Support</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    {/* <input type="text" placeholder="Search" class="input input-bordered" /> */}
                    <ul class="menu menu-horizontal p-0">
                        <li>{user ? <button  onClick={logout}  className="">Sign Out</button>:<Link to="/signIn">Sign In</Link>}</li>
                    </ul>
                    <label for="my-drawer-2" class="btn btn-ghost lg:hidden">
                        <i class="fad fa-align-right text-2xl"></i>
                    </label>
                </div>
            </div>

        </header>
    );
};

export default Navbar;