import React from 'react';
import Users from '../../../components/Users/Users';
import ChatTab from '../../../components/ChatTab/ChatTab'

const UserConference = () => {
    return (
        <div className="flex justify-center gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-8/12">
                <Users></Users>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="md:w-12/12 lg:w-4/12">
                <ChatTab></ChatTab>
            </div>
        </div>
    );
};

export default UserConference;