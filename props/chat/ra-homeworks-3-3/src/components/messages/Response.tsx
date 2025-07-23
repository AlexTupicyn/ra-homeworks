import React from 'react';

interface From {
    name: string;
}

interface MessageData {
    time: string;
    text?: string;
}

interface ResponseProps {
    from: From;
    message: MessageData;
}

export const Response: React.FC<ResponseProps> = ({ from, message }) => (
    <li className="message-item right">
        <div className="message-header">
            <span className="message-time">{message.time}</span>
            <span className="sender-name">{from.name}</span>
            <i className="status-icon me"></i>
        </div>
        
        <div className="message-bubble blue">
            {message.text}
        </div>
    </li>
);
