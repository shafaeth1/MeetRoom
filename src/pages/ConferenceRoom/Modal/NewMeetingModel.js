import React from 'react';
import { Link } from 'react-router-dom';

const NewMeetingModel = () => {
    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-4" class="hover:cursor-pointer"><i className="fal fa-video font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i></label>

            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle  ">
                <div class="modal-box bg-chat h-auto  mx-auto">
                    <h2 className="text-center text-2xl divide-y pb-4">Starting Host a Meeting</h2>

                    <input type="text" placeholder="Enter your Name" class="input  bg-slate-800 rounded w-full" />
                    <div className='flex justify-end gap-3'>
                        <div class="modal-action">
                            <label for="my-modal-4" class="btn ">Cancel</label>
                        </div>
                        <div class="modal-action">
                            <Link to='/room/video' for="my-modal-4" class="btn btn-primary">Start Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewMeetingModel;