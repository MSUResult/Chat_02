import React from 'react';
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const { messages } = useSelector(store => store.message);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {
                // Ensure messages is an array and not null or undefined
                Array.isArray(messages) && messages.map((message) => {
                    // Check if message is not null and has _id
                    if (message && message._id) {
                        return (
                            <Message key={message._id} message={message} />
                        );
                    } else {
                        return null; // Return null for invalid messages
                    }
                })
            }
        </div>
    );
};

export default Messages;
