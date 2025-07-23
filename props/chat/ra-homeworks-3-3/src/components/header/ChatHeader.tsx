import React, { useState } from 'react';

interface ChatHeaderProps {
    name: string;
    messageCount: number;
    avatar: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ name, messageCount, avatar }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    return (
        <div className="chat-header">
            <img src={avatar} alt={name} className="chat-avatar" />

            <div className="chat-header-content">
                <div>
                    <h2 className="chat-title">Чат с пользователем: {name}</h2>
                    <span className="message-count">
                        {messageCount.toLocaleString()} сообщений
                    </span>
                </div>
            </div>

            <button
                className={`favorite-button ${isFavorite ? 'active' : ''}`}
                onClick={() => setIsFavorite(!isFavorite)}
                aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
            >
                <svg 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="
                        M12 17.27
                        L18.18 21
                        L16.54 13.97
                        L22 9.24
                        L14.81 8.63
                        L12 2
                        L9.19 8.63
                        L2 9.24
                        L7.46 13.97
                        L5.82 21
                        Z
                    "
                    fill={isFavorite ? "#d8dadf" : "none"}
                    stroke="#d8dadf"
                    strokeWidth="2"
                    />
                </svg>
            </button>
        </div>
    );
};
