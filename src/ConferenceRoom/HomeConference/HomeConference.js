import React from 'react';
import RoomHome from '../../components/RoomHome/RoomHome';
import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';
const HomeConference = () => {
    return (

        <div className="flex justify-center lg:items-center mt-auto mb-auto gap-1 flex-col lg:flex-row">
            <div className="md:w-12/12 lg:w-12/12">
                <RoomHome></RoomHome>
            </div>
            {/* ========Right Sidebar ========*/}
            {/* <div className="md:w-12/12 lg:w-3/12">
            </div> */}
        </div>
    );
};

export default HomeConference;