import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom'
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">MyReview</Link></li>
                    {admin && <>
                        <li><Link to="dashboard/users">AllUser</Link></li>

                        <li><Link to="dashboard/addMembers">Add Member</Link></li>
                        <li><Link to="dashboard/manageMembers">Manage Member </Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;