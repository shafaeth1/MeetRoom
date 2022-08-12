import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import user from "../../assets/images/user.png";


const Chat = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);


    return (
        <div className='w-full'>
            <div className='rounded-lg mb-2 tab-bar overflow-y-auto max-h-96 '>
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) => {
                        return (<>

                            <div className='flex items-center py-1 justify-start message' id={username === messageContent.author ? "you" : "other"}>
                                <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 mr-1 rounded-full' />
                                <div>
                                    <h2 className='text-md font-medium message-meta' >{messageContent.author}</h2>
                                    <p className='text-sm bg-gray-600 p-1 rounded message-content'>{messageContent.message}</p>
                                    <p><span className="message-meta">{messageContent.time}</span></p>
                                </div>
                            </div>

                            {/* <div className='flex items-center py-1 flex-row-reverse text-right pr-1' id={username === messageContent.you}>
                            <img src={user} alt="Main user" className='w-12 h-12 p-1 border border-gray-500 ml-1 rounded-full' />
                            <div >
                                <h2 className='text-md font-medium'>You</h2>
                                <p className='text-sm bg-gray-600 p-1 rounded'>{messageContent.message}</p>
                                <p><span>{messageContent.time}</span></p>
                            </div>
                        </div> */}
                        </>)
                    })}
                </ScrollToBottom>






            </div>


            <div className='flex items-center gap-2 bg-green-600 rounded p-2 mt-4'>
                <button><i className="far fa-image text-3xl text-gray-200"></i></button>
                <input className="p-2 rounded-md border border-gray-500-none w-full px-2"
                    type="text"
                    value={currentMessage}
                    placeholder="Message ..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }} />
                <button onClick={sendMessage}> <i className="far fa-paper-plane text-2xl font-medium"></i> </button>
            </div>
        </div>

    )
};

export default Chat;