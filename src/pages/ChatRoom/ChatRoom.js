import React from 'react';
import ChatOnline from '../../components/Chat/ChatOnline';
import Conversation from '../../components/Chat/Conversation';
import Message from '../../components/Chat/Message';
import './ChatRoom.css'

const ChatRoom = () => {
    return (
        <div className='chatRoom'>
            <div className='chatMenu'>
                <div className="chatMenuWraper">
                    <input
                        type="text"
                        placeholder='Search for friend'
                        className='chatMenuInput' />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                </div>
            </div>
            <div className='chatBox'>
                <div className="chatBoxWraper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea 
                        className='chatMessageInput'
                        placeholder='Write something...'
                        ></textarea>
                        <button className='chatSubmitButton'>Send</button>
                    </div>
                </div>
            </div>
            <div className='chatOnline'>
                <div className="chatOnlineWraper">
                    <ChatOnline />
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;