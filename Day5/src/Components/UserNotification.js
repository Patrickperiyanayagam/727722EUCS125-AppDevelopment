import React, { useState } from 'react';
import '../StylingComponents/UserNotification.css';

const UserNotifications = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'New Message', date: '2024-07-29', summary: 'You have a new message from John.' },
        { id: 2, title: 'Order Update', date: '2024-07-28', summary: 'Your order #1234 has been shipped.' },
        { id: 3, title: 'System Alert', date: '2024-07-27', summary: 'Scheduled maintenance will occur on July 30.' },
        // Add more notifications as needed
    ]);

    const handleMarkAllAsRead = () => {
        // Logic to mark all notifications as read
    };

    return (
        <div className="notifications-section" id='usermessage'>
            <div className="notifications-header">
                <h1>Notifications</h1>
                <button onClick={handleMarkAllAsRead} className="mark-all-read">
                    Mark All as Read
                </button>
            </div>
            <div className="notifications-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification-card">
                        <div className="notification-content">
                            <h3>{notification.title}</h3>
                            <p className="notification-date">{notification.date}</p>
                            <p className="notification-summary">{notification.summary}</p>
                        </div>
                        <button className="view-details">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserNotifications;
