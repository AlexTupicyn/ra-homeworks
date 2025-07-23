import React from 'react';
import { Message } from './Message';
import { Response } from './Response'

interface From {
    name: string;
}

interface MessageData {
    id: string | number;
    from: From;
    time: string;
    text?: string;
}

interface MessageHistoryProps {
    list?: MessageData[];
}

export const MessageHistory: React.FC<MessageHistoryProps> = ({ list = [] }) => {
    if (list.length === 0) return null;

    return (
        <ul className="message-list">
            {list.map((message) => (
                message.from.name === 'Виктор'
                    ? <Message key={message.id} from={message.from} message={message} />
                    : <Response key={message.id} from={message.from} message={message} />
            ))}
        </ul>
    );
};
