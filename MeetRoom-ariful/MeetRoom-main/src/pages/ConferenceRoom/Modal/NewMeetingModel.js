import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setIdentity } from '../../../redux/actions';

const NewMeetingModel = () => {
    const [nameValue, setNameValue] = useState("");
    const identity = useSelector(state => state.reducerData.identity)
    console.log(nameValue)
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const handleJoinRoom = (nameValue) => {
    //   setIdentityAction(nameValue);
        dispatch(setIdentity(nameValue))
        createRoom();
    };
    
    const handleNameValueChange = (event) => {
        setNameValue(event.target.value);
    };

    const createRoom = () => {
      navigate("/room/video", {replace:true})
    };

    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-4" class="hover:cursor-pointer"><i className="fal fa-video font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i></label>

            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle  ">
                <div class="modal-box bg-chat h-auto  mx-auto">
                    <h2 className="text-center text-2xl divide-y pb-4">Starting Host a Meeting</h2>

                    <input type="text" placeholder="Enter your Name" class="input bg-slate-800 rounded w-full" 
                    value={nameValue}
                    onChange={handleNameValueChange}/>
                    <div className='flex justify-end gap-3'>
                        <div class="modal-action">
                            <label for="my-modal-4" class="btn ">Cancel</label>
                        </div>
                        <div class="modal-action">
                            <button for="my-modal-4" class="btn btn-primary" onClick={()=>handleJoinRoom(nameValue)}>Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewMeetingModel;