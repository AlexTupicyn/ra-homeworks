import React from 'react';
import { User } from '../../types';

interface UserListProps {
    users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => (
    <div className="user-list">
        {users.map((user, index) => (
            <div key={index} className="user-item">
                <div className="user-avatar">
                    <img src={user.avatar} alt={user.name} />
                    <i className={`status-icon ${user.status === 'online' ? 'online' : 'offline'}`}></i>
                </div>

                <div className="user-info">
                    <span className="user-name">
                        {user.name}
                    </span>
                    {user.status === 'offline' ? (
                        <span className="last-seen">{user.lastSeen}</span>
                        ) : (
                        <span className="status-text">в сети</span>
                    )}
                </div>
            </div>
        ))}
    </div>
);
