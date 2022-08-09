
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import {setIdentity, setRoomId,} from "../../../redux/actions";
import reducerSlice from '../../../redux/reducerSlice';
import { getRoomExists } from "../../../utils/api";

const JoinMeetingModel = () => {
    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    // const data = useSelector(state => state.reducerData.reducerFunction)
    console.log(roomIdValue, nameValue)
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
      const responseMessage = await getRoomExists(roomIdValue);
      console.log(responseMessage)
  
      const { roomExists, full } = responseMessage;
  
      if (roomExists) {
        if (full) {
          setErrorMessage("Meeting is full. Please try again later.");
        } else {
            // join a room !
            // setRoomIdAction(roomIdValue);
            dispatch(reducerSlice.actions.setIdentity(nameValue));
            dispatch(reducerSlice.actions.setRoomId(roomIdValue));
            navigate("/room/video");
        }
      } else {
        setErrorMessage("Meeting not found. Check your meeting id.");
      }
    };


    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-3" class="hover:cursor-pointer"><i className="fal fa-plus-square font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i></label>


            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle  ">
                <div class="modal-box bg-chat h-auto  mx-auto  ">
                    <h2 className="text-center text-2xl divide-y">{errorMessage}</h2>

                    <input type="text" placeholder="Meeting ID" class="input w-full my-3 bg-slate-800 rounded" 
                    name='roomIdValue'
                    value={roomIdValue}
                    onChange={(e)=>handleRoomIdValueChange(e.target.value)}
                    />
                    <input type="text" placeholder="Enter your Name" class="input bg-slate-800 rounded w-full" 
                    name='nameValue'
                    value={nameValue}
                    onChange={(e) =>handleNameValueChange(e.target.value)}
                    />
                    
                    <div className='flex justify-end gap-3'>
                        <div class="modal-action">
                            <label for="my-modal-3" class="btn">Cancel</label>
                        </div>
                        <div class="modal-action">
                            <label for="my-modal-3" class="btn btn-primary">
                                <button for="my-modal-3" class="btn btn-primary" onClick={()=>handleJoinRoom()}>Start Now</button>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// const mapStoreStateToProps = (state) => {
//     return {
//       ...state,
//     };
// };

// const mapActionsToProps = (dispatch) => {
//     return {
//       setIdentityAction: (identity) => dispatch(setIdentity(identity)),
//       setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
//       // setConnectOnlyWithAudio: (onlyWithAudio) =>
//       // dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
//     };
// };

export default JoinMeetingModel;
