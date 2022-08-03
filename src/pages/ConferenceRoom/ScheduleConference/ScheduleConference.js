import React from 'react';
import MeetingSchedule from '../../../components/MeetingSchedule/MeetingSchedule'

const ScheduleConference = () => {
    return (
        <div className="flex justify-center gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-9/12">
                <MeetingSchedule/>
            </div>
            {/* ========Right Sidebar ========*/}
            <div className="md:w-12/12 lg:w-3/12">
                
            </div>
        </div>
    );
};

export default ScheduleConference;