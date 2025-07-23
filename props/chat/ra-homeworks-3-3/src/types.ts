export interface User {
    name: string;
    avatar: string;
    status: 'online' | 'offline';
    lastSeen?: string;
}
