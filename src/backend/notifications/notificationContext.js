// NotificationContext.js
import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [notificationLists, setNotificationLists] = useState([[]]); // Array of notification lists

    const addNotification = (notification) => {
        setNotifications([...notifications, notification]);
    };

    const deleteNotification = (notificationId) => {
        setNotifications(notifications.filter(n => n.id !== notificationId));
    };

    const deleteNotificationFromLists = (notificationId) => {
        setNotificationLists(prevLists => prevLists.map(list =>
            list.filter(notification => notification.id !== notificationId)
        ));
    };

    const editNotification = (notificationId, newText) => {
        setNotifications(notifications.map(n => {
            if (n.id === notificationId) {
                return { ...n, text: newText };
            }
            return n;
        }));
    };

    const addNotificationList = () => {
        setNotificationLists([...notificationLists, []]); // Add a new empty list
    };

    const addNotificationToList = (notification, listIndex) => {
        setNotificationLists(prevLists => {
            const newLists = [...prevLists];
            newLists[listIndex] = [...newLists[listIndex], notification];
            return newLists;
        });
    };


    return (
        <NotificationContext.Provider value={{ notifications, addNotification, addNotificationToList, deleteNotification, editNotification, notificationLists, addNotificationList, deleteNotificationFromLists }}>
            {children}
        </NotificationContext.Provider>
    );
};
