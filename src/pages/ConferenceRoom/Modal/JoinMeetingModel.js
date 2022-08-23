
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {setIdentity, setRoomId,} from "../../../redux/actions";
// import { getRoomExists } from "../../../utils/api";

const JoinMeetingModel = () => {
    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch()    
  
    let navigate = useNavigate();
    
    const handleRoomIdValueChange = (text) => {
        setRoomIdValue(text);
    };
    
    const handleNameValueChange = (text) => {
        setNameValue(text);
    };
    
    // const handleConnectionTypeChange = () => {
    //     setConnectOnlyWithAudio(!connectOnlyWithAudio);
    // };


    const handleJoinRoom = async (nameValue, roomIdValue) => {
        dispatch(setIdentity(nameValue));
        dispatch(setRoomId(roomIdValue));
        navigate("/room/video");
    //   const responseMessage = await getRoomExists(roomIdValue);
    // //   console.log(responseMessage)
  
    //   const { roomExists, full } = responseMessage;
  
    //   if (roomExists) {
    //     if (full) {
    //       setErrorMessage("Meeting is full. Please try again later.");
    //     } else {
    //         // join a room !
    //         dispatch(setIdentity(nameValue));
    //         dispatch(setRoomId(roomIdValue));
    //         navigate("/room/video");
    //     }
    //   } else {
    //     setErrorMessage("Meeting not found. Check your meeting id.");
    //   }
    };


    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-3" className="hover:cursor-pointer"><i className="fal fa-plus-square font-bold text-3xl bg-clock bg-transparent border border-slate-600 p-2"></i></label>


            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle  ">
                <div className="modal-box bg-chat h-auto  mx-auto  ">
                    <h2 className="text-center text-2xl divide-y">{errorMessage}</h2>

                    <input type="text" placeholder="Meeting ID" className="input w-full my-3 bg-slate-800 rounded" 
                    name='roomIdValue'
                    value={roomIdValue}
                    onChange={(e)=>handleRoomIdValueChange(e.target.value)}
                    />
                    <input type="text" placeholder="Enter your Name" className="input bg-slate-800 rounded w-full" 
                    name='nameValue'
                    value={nameValue}
                    onChange={(e) =>handleNameValueChange(e.target.value)}
                    />
                    
                    <div className='flex justify-end gap-3'>
                        <div className="modal-action">
                            <label for="my-modal-3" className="btn">Cancel</label>
                        </div>
                        <div className="modal-action">
                            <label for="my-modal-3" className="btn btn-primary">
                                <button for="my-modal-3" className="btn btn-primary" onClick={()=>handleJoinRoom(nameValue, roomIdValue)}>Join Now</button>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JoinMeetingModel;
