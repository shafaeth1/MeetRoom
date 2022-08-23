import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setIdentity, setIsRoomHost,setRoomId } from '../../redux/actions';

const NewMeetingModel = () => {
    const data = useSelector(state => state);
    const {roomId} = data;

    const [nameValue, setNameValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleNameValueChange = (text) => {
        setNameValue(text);
    };

    const handleJoinRoom = () => { 
        navigate("/room/video");
    };

    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-4" className="hover:cursor-pointer"><i className="fal fa-video font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i></label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle  ">
                <div className="modal-box bg-chat h-auto  mx-auto">
                    <h2 className="text-center text-2xl divide-y pb-4">Starting Host a Meeting</h2>

                    <input type="text" placeholder="Enter your Name" className="input bg-slate-800 rounded w-full" 
                    name='nameValue'
                    value={nameValue}
                    onChange = {e => handleNameValueChange(e.target.value)}/>
                    <div className='flex justify-end gap-3'>
                        <div className="modal-action">
                            <label for="my-modal-4" className="btn ">Cancel</label>
                        </div>
                        <div className="modal-action">
                            <button for="my-modal-4" className="btn btn-primary" onClick={()=>handleJoinRoom(dispatch(setIdentity(nameValue)), dispatch(setRoomId(roomId)), dispatch(setIsRoomHost(true)))}>Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewMeetingModel;