import { User } from './types';
import { ChatHeader } from './components/header/ChatHeader';
import { UserList } from './components/users/UserList';
import { MessageHistory } from './components/messages/MessageHistory';

import users from './data/users.json';
import messages from './data/messages.json';

function App() {
    const currentUser = users.find(user => user.name === "Виктор Иванов");

    return (
        <div className="clearfix container">
            <div className="user-panel">
                <div className="search-box">
                    <input type="text" placeholder="Поиск..." />

                    <button className="search-button">
                        <svg 
                            width="18" 
                            height="18" 
                            viewBox="0 0 18 18" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="
                                    M12.5 11
                                    H11.71
                                    L11.43 10.73
                                    C12.41 9.59 13 8.11 13 6.5
                                    C13 2.91 10.09 0 6.5 0
                                    C2.91 0 0 2.91 0 6.5
                                    C0 10.09 2.91 13 6.5 13
                                    C8.11 13 9.59 12.41 10.73 11.43
                                    L11 11.71
                                    V12.5
                                    L16 17.49
                                    L17.49 16
                                    L12.5 11
                                    Z
                                    M6.5 11
                                    C4.01 11 2 8.99 2 6.5
                                    C2 4.01 4.01 2 6.5 2
                                    C8.99 2 11 4.01 11 6.5
                                    C11 8.99 8.99 11 6.5 11
                                    Z
                                "
                                fill="#A8AAB1"
                            />
                        </svg>
                    </button>

                </div>
                <UserList users={users as User[]} />
            </div>

            <div className="chat">
                {currentUser && (
                    <ChatHeader
                        name={currentUser.name}
                        messageCount={1903}
                        avatar={currentUser.avatar}
                    />
                )}

                <div className="chat-history">
                    <MessageHistory 
                        list={messages} 
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
