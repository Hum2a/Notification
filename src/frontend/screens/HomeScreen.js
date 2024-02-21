import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNotifications } from '../../backend/notifications/notificationContext';
import NotificationManagementModal from './notification_screens/NotificationManagement';
import { styles } from '../styles/HomeStyles';

const HomeScreen = ({ navigation }) => {
    const { notifications, notificationLists, deleteNotification, deleteNotificationFromLists, editNotification, addNotificationToList} = useNotifications();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const handlePressNotification = (notification) => {
        setSelectedNotification(notification);
        setModalVisible(true);
    };

    const handleEdit = () => {
        navigation.navigate('EditNotifications', { notification: selectedNotification })
        handleCloseModal();
    };

    const handleDelete = () => {
        if (selectedNotification && selectedNotification.id) {
            deleteNotification(selectedNotification.id); // Delete from main notifications
            deleteNotificationFromLists(selectedNotification.id); // Delete from all lists
            console.log('Deleted:', selectedNotification);
        }
        handleCloseModal();
    };

    const handleAddToList = (notification) => {
        const listNames = notificationLists.map((list, index) => ({
            text: `List ${index + 1}`,
            onPress: () => {
                addNotificationToList(notification, index);
                handleCloseModal();
            },
        }));

        Alert.alert(
            'Add to Which List?',
            'Select a list to add the notification to:',
            [
                ...listNames,
                { text: "Cancel", style: "cancel" },
            ],
        );
    };

    const handleDeleteFromList = () => {
        // TODO: Implement delete from list logic
        console.log('Delete from List:', selectedNotification);
        handleCloseModal();
    };

    const handleAddToGeofence = () => {
        // TODO: Implement add to geofence logic
        console.log('Add to Geofence:', selectedNotification);
        handleCloseModal();
    };

    const handleAttachSound = () => {
        // TODO: Implement attach sound logic
        console.log('Attach Sound:', selectedNotification);
        handleCloseModal();
    };

    const handleScheduleForSpecificTime = () => {
        // TODO: Implement schedule for specific time logic
        console.log('Schedule for Specific Time:', selectedNotification);
        handleCloseModal();
    };

    const handleCreateList = () => {
        navigation.navigate('CreateList')
        handleCloseModal();
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedNotification(null);
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to MotivateApp!</Text>
                <Text style={styles.stats}>Total Notifications: {notifications.length}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateNotificationScreen')}>
                    <Text style={styles.buttonText}>Create Notification</Text>
                </TouchableOpacity>
                {notifications.map((notification, index) => (
                    <TouchableOpacity key={index} style={styles.notificationItem} onPress={() => handlePressNotification(notification)}>
                        <Text style={styles.notificationText}>{notification.text}</Text>
                    </TouchableOpacity>
                ))}

                <Text style={styles.stats}>Total Lists: {notificationLists.length}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateList')}>
                    <Text style={styles.buttonText}>Create Notification List</Text>
                </TouchableOpacity>
                {notificationLists.map((list, listIndex) => (
                    <View key={listIndex} style={styles.listContainer}>
                        <Text style={styles.listTitle}>List {listIndex + 1}</Text>
                        {list.map((notification, notificationIndex) => (
                            <TouchableOpacity key={notificationIndex} style={styles.notificationItem} onPress={() => handlePressNotification(notification)}>
                                <Text style={styles.notificationText}>{list[listIndex].text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
                <NotificationManagementModal
                    visible={modalVisible}
                    onClose={handleCloseModal}
                    notification={selectedNotification}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleAddToGeofence={handleAddToGeofence}
                    handleAddToList={handleAddToList}
                    handleScheduleForSpecificTime={handleScheduleForSpecificTime}
                    handleAttachSound={handleAttachSound}
                    handleDeleteFromList={handleDeleteFromList}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
