import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Platform, Button, ScrollView } from 'react-native';
import { useNotifications } from '../../../backend/notifications/notificationContext';
import { styles } from '../../styles/ViewNotifStyles';

const ViewNotificationsScreen = ({ navigation }) => {
    const { notifications, deleteNotification, editNotification, notificationLists, addNotificationList, addNotificationToList } = useNotifications();

    const handlePressNotification = (notification) => {
        Alert.alert(
            "Notification Options",
            "Choose an option",
            [
                { text: "Edit", onPress: () => handleEditNotification(notification) },
                { text: "Delete", onPress: () => handleDeleteNotification(notification), style: "destructive" },
                { text: "Add to List", onPress: () => handleAddToList(notification), style: "default" }, // Option to add notification to a list
                { text: "Cancel", style: "cancel" },
            ]
        );
    };
    
    const handleEditNotification = (notification) => {
        // Use Alert.prompt on iOS, for Android you might want to implement a modal or custom input
        if (Platform.OS === 'ios') {
            Alert.prompt(
                'Edit Notification',
                'Update your notification text:',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Save',
                        onPress: newText => editNotification(notification.id, newText),
                    },
                ],
                'plain-text',
                notification.text,
            );
        } else {
            // For Android, you might want to open a modal with an input field here
            console.log('Editing not supported on Android yet.');
        }
    };

    const handleDeleteNotification = (notification) => {
        deleteNotification(notification.id);
    };

    const handleAddToList = (notification) => {
        const listNames = notificationLists.map((list, index) => ({
            text: `List ${index + 1}`, // You can have more descriptive names if you store names for lists
            onPress: () => addNotificationToList(notification, index),
        }));
    
        // Show options to add notification to an existing list
        Alert.alert(
            'Add to Which List?',
            'Select a list to add the notification to:',
            [
                ...listNames,
                { text: "Cancel", style: "cancel" },
            ],
        );
    };
    
    const renderNotificationList = ({ item: notificationList, index }) => {
        return (
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>List {index + 1}</Text>
                <FlatList
                    data={notificationList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.notificationItem}
                            onPress={() => handlePressNotification(item)}
                        >
                            <Text style={styles.notificationText}>{item.text}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Scheduled Notifications</Text>
                <Button title="New List +" onPress={() =>  navigation.navigate('EditNotifications', { notification: selectedNotification })} />
            </View>
            <Text style={styles.sectionTitle}>All Notifications</Text>
            <FlatList
                style={styles.list}
                data={notifications} // Display all notifications
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.notificationItem}
                        onPress={() => handlePressNotification(item)}
                    >
                        <Text style={styles.notificationText}>{item.text}</Text>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.sectionTitle}>Notification Lists</Text>
            <FlatList
                data={notificationLists}
                keyExtractor={(item, index) => 'list-' + index}
                renderItem={renderNotificationList}
            />
        </ScrollView>
    );
};

export default ViewNotificationsScreen;