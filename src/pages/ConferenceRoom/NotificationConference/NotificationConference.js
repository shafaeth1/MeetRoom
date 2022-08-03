import React from 'react';
import Notification from '../../../components/Notification/Notification';

const NotificationConference = () => {
    return (
        <div className="flex justify-center gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-9/12">
                <Notification></Notification>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="md:w-12/12 lg:w-3/12">
                
            </div>
        </div>
    );
};

export default NotificationConference;