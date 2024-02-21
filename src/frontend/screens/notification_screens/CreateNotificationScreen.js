import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNotifications } from '../../../backend/notifications/notificationContext';
import { firestore } from '../../../backend/firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { styles } from '../../styles/CreateNotifStyles';

const CreateNotificationScreen = () => {
    const [notificationText, setNotificationText] = useState('');
    const { addNotification } = useNotifications();

    const handleCreateNotification = async () => {
        const newNotification = {
            id: Math.random().toString(), // Consider using a proper unique ID generator
            text: notificationText,
            createdAt: serverTimestamp(), // Add server timestamp
        };

        try {
            // Add newNotification to Firestore
            await addDoc(collection(firestore, 'Notifications'), newNotification);
            addNotification(newNotification); // Update local state
            setNotificationText(''); // Clear the input field
        } catch (error) {
            console.error("Error adding notification to Firestore: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a New Notification</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter notification text"
                value={notificationText}
                onChangeText={setNotificationText}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateNotification}>
                <Text style={styles.buttonText}>Create Notification</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateNotificationScreen;
