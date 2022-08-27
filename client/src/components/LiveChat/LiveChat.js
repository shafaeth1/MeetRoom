import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import auth from '../../firebase.init';
// import { v1 as uuid } from "uuid";
import Chat from './Chat';
import "./LiveChat.css";

const socket = io.connect("https://meetsrooms.herokuapp.com");

const LiveChat = () => {
    // const chatRomm = useNavigate();
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
    //    const id = uuid();
    //    setRoom(id);
        if (username !== "" && room !== "") {
            socket.emit("join-room", room);
            setShowChat(true);
        }
        // chatRomm(`/conference/ChatLive/${id}`);
    };
 
    return (
        <div className='LiveChat'>
            {!showChat ? (
                <div className="flex flex-col justify-center">
                    <h2 className='text-center font-bold text-4xl py-6'>Joining Now</h2>
                    <form className='flex gap-1'>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs"
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <input type="text" placeholder="MeetRoom Id or Link" className="input input-bordered w-full max-w-xs"
                            onChange={(event) => {
                                setRoom(event.target.value);
                            }}
                        />
                        <input onClick={joinRoom} type="submit" value="Start Now" className="py-2 px-4 bg-green-700 text-gray-200 rounded" />
                    </form>
                </div>
            ) : (
                <Chat socket={socket} username={username} room={room}/>
            )}
        </div>
    );
};

export default LiveChat;