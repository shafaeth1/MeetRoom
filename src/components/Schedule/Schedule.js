import React from 'react';
import { connect } from 'react-redux';
import user from "../../assets/images/user.png"
import useSchedules from '../../hooks/useSchedules';

const Schedule = ({roomID}) => {
    const {schedules} =  useSchedules()
    // const {_id ,meetingPurpose,timeZone,startTime,endTime}= schedule


    return (
        <div className="bg-chat">
            {
                schedules?.slice(0, 4).reverse().map((item) =>
                    <div className='border border-gray-500 p-2 my-2'>
                        <div className="flex justify-between">
                            <h2 className='text-xl text-white'>{item.meetingPurpose}</h2>
                            <button> <i className=" fad fa-ellipsis-h-alt bg-slate-800 text-xs px-3 py-1 hover:bg-slate-700 rounded font-medium text-white"></i> </button>
                        </div>
                        <div className="flex my-2">
                            <button> <i className=" fal fa-clock text-gray-200 text-xs font-small mr-2"></i> </button>
                            <p><small className='text-white'></small></p>
                            <div className=" text-white mx-2">|</div>
                            <p><small className='text-white'>Start Time : {item.startTime}</small></p>
                            <p><small className='text-white pl-2'>End Time : {item.endTime}</small></p>
                        </div>

                        <div className='flex justify-between mt-2'>
                            <div className="flex gap-2">
                                <img src={user} alt="Main user" className='w-8 h-8 border border-gray-300 rounded-full' />
                                <img src={user} alt="Main user" className='w-8 h-8 border border-gray-300 rounded-full' />
                                <img src={user} alt="Main user" className='w-8 h-8 border border-gray-300 rounded-full' />
                            </div>
                            <div className="flex">
                                <button className="mr-1 py-1 px-2 rounded text-white hover:bg-slate-700">{roomID && ''}</button>
                                <button className="ml-1 bg-green-600 py-1 px-2 rounded shadow-green-200 text-gray-200 hover:bg-blue-500"> Start</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    );
};

const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
};

export default connect(mapStoreStateToProps)(Schedule);