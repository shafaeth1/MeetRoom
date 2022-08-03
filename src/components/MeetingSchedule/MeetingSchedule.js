import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Link } from 'react-router-dom';

const MeetingSchedule = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());

    return (
        <div class="card w-full mx-auto shadow-xl">
            <div class="card-body">
                <div class="card-actions flex justify-between lg:justify-end">
                    <Link to="/room" class="btn rounded btn-sm">Cancel
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </Link>
                    <button class="btn rounded btn-sm">Save </button>
                </div>
                <div className='card-actions justify-center lg:justify-start'>
                    <h1 className='text-lg lg:text-3xl text-gray-200 font-bold text-center lg:text-left'>Schedule Meeting</h1>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-x-2'>
                    <div className='w-12/12 lg:w-6/12'>
                        <div className='rounded-lg my-4 flex justify-center lg:justify-start'>
                            {/* <p className='p-2 text-gray-200 font-semibold'>Select a data</p> */}
                            <DayPicker
                                mode="single"
                                required
                                selected={selectedDay}
                                onSelect={setSelectedDay}
                                className="text-gray-200 border border-gray-500 p-2 rounded-md text-2xl"
                            />
                        </div>
                    </div>
                    
                    <div className='w-12/12 lg:w-6/12'>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text font-semibold text-gray-200">Meeting Purpose</span>
                            </label>
                            <input type="text" value='' className="input input-bordered w-full" placeholder='Type here..' />
                        </div>
                        <div class="form-control w-full pb-2">
                            <label class="label">
                                <span class="label-text font-semibold text-gray-200">Select Your Time Zone</span>
                            </label>
                            <select class="select select-bordered">
                                <option selected>GWT</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>

                        <p className='font-semibold pb-2 text-gray-200'>Select meeting time</p>
                        <div className='flex items-center'>
                            <div className='pr-4'>
                                <select class="select select-bordered">
                                    <option selected>12:00</option>
                                    <option>1:00</option>
                                    <option>2:00</option>
                                    <option>6:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                </select>
                            </div>
                            <p className='pr-4'>To</p>
                            <div>
                                <select class="select select-bordered">
                                    <option selected>12:00</option>
                                    <option>1:00</option>
                                    <option>2:00</option>
                                    <option>6:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold text-gray-200">Meeting Date</span>
                                </label>
                                <input type="text" value={format(selectedDay, 'PP')} class="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MeetingSchedule;