import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());

    return (
        <div class="card w-10/12 mx-auto mt- bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="card-actions justify-end">
                    <button class="btn rounded btn-sm">Cancel
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button class="btn rounded btn-sm">Save </button>
                </div>
                <div className='card-actions justify-start'>
                    <h1 className='text-3xl font-bold'>Schedule Meeting</h1>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <div className='border-2 border-black rounded-lg mt-4 w-80'>
                            <p className='pl-4 pt-2 font-semibold'>Select a data</p>
                            <DayPicker
                                mode="single"
                                required
                                selected={selectedDay}
                                onSelect={setSelectedDay}
                            />
                        </div>
                    </div>
                    <div className=''>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-semibold">Meeting Purpose</span>
                            </label>
                            <input type="text" value='' className="input input-bordered w-full max-w-xs" placeholder='Writing...' />
                        </div>
                        <div class="form-control w-full max-w-xs pb-2">
                            <label class="label">
                                <span class="label-text font-semibold">Select Your Time Zone</span>
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

                        <p className=' font-semibold pb-2'>Select meeting time</p>
                        <div className='flex'>
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
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-semibold">Meeting Date</span>
                                </label>
                                <input type="text" value={format(selectedDay, 'PP')} class="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Schedule;