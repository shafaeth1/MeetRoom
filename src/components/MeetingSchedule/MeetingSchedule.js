import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MeetingSchedule = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());

    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url =`http://localhost:5000/schedule`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
          
        })


    };


    return (
        <div class="card w-full mx-auto shadow-xl">
            <div class="card-body">
                <div class="card-actions flex justify-between lg:justify-end">
                    <Link to="/room" class="btn rounded btn-sm">Cancel
                    </Link>

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
                                className="text-gray-200 border border-gray-500 p-2 rounded-md text-2xl mt-8"
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto ml-4'>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text font-semibold text-gray-200">Meeting Purpose</span>
                            </label>
                            <input className="input input-bordered w-full" {...register("meetingPurpose")} />
                        </div>
                        <div class="form-control w-full pb-2">
                            <label class="label">
                                <span class="label-text font-semibold text-gray-200">Select Your Time Zone</span>
                            </label>
                            <select class="select select-bordered" {...register("timeZone")}>
                            <option selected="Landone">Landon</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Newwork">Newwork</option>
                            <option value="Sidne">Sidne</option>
                            <option value="Dille">Dille</option>
                        </select>
                        </div>

                        <p className='font-semibold pb-2 text-gray-200'>Select meeting time</p>
                        <div className='flex items-center'>
                            <div className='pr-4'>
                            <select placeholder='Date' id="countries"  class="select select-bordered"  {...register("startTime")}    >
                                <option selected="10.00 AM">10.00 AM</option>
                                <option value="02.00 PM">02.00 PM</option>
                                <option value="04.00 PM">04.00 PM</option>
                                <option value="06.00 PM">06.00 PM</option>
                                <option value="08.00 PM">08.00 PM</option>

                            </select>
                            </div>
                            <p className=' pl-6 text-white font-bold text-1xl'>To</p>
                            <div>
                           <select placeholder='Date' id="countries"  class="select select-bordered"  {...register("endTime")}    >
                                <option selected="10.00 AM">10.30 AM</option>
                                <option value="02.30 PM">02.00 PM</option>
                                <option value="04.30 PM">04.00 PM</option>
                                <option value="06.30 PM">06.00 PM</option>
                                <option value="08.30 PM">08.00 PM</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text font-semibold text-gray-200">Meeting Date</span>
                                </label>
                               <input defaultValue={format(selectedDay, 'PP')} {...register("date")} class="input input-bordered w-full"  {...register("date")} />
                            </div>
                        </div>
                        <button className="btn rounded btn-block mt-4">Save </button>
                    </form> 
                </div>
            </div>
        </div>

    );
};

export default MeetingSchedule;