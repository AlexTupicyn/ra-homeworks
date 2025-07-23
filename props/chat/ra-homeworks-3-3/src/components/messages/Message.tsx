import React from 'react';

interface From {
    name: string;
}

interface MessageData {
    time: string;
    text?: string;
}

interface MessageProps {
    from: From;
    message: MessageData;
}

export const Message: React.FC<MessageProps> = ({ from, message }) => (
    <li className="message-item left">
        <div className="message-header">
            <i className="status-icon online"></i>
            <span className="sender-name">
                {from.name}
            </span>
            <span className="message-time">
                {message.time}
            </span>
        </div>

        <div className="message-bubble green">
            {message.text || <i>Печатает...</i>}
        </div>
    </li>
);
