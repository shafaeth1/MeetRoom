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
    return (
        <header>
            <div class="navbar border-b-2">
                <div class="flex-1">
                    <Link to="/" class="btn btn-ghost normal-case md:text-xl">MeetRoom</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0 md:text-xl">
                        <li><Link to='/join'>Join</Link></li>
                        <li><a href='support#'>Support</a></li>
                        <li>{user ? <button  onClick={logout}  className="">Sign Out</button>
:<Link to="/login">Sign In</Link>}</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;