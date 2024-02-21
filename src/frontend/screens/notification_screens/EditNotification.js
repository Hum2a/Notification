import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNotifications } from '../../../backend/notifications/notificationContext';

const EditNotificationScreen = ({ route, navigation }) => {
    const { editNotification } = useNotifications();
    const { notification } = route.params;
    const [newText, setNewText] = useState(notification.text);

    const handleSave = () => {
        editNotification(notification.id, newText);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Notification</Text>
            <Text style={styles.label}>Current Text:</Text>
            <Text style={styles.currentText}>{notification.text}</Text>
            <Text style={styles.label}>New Text:</Text>
            <TextInput
                style={styles.input}
                value={newText}
                onChangeText={setNewText}
                placeholder="Enter new notification text"
                placeholderTextColor="#7f8c8d"
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1', // Soft, light background color
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        alignSelf: 'stretch',
        textAlign: 'left',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: '#34495e',
        alignSelf: 'stretch',
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 5,
    },
    currentText: {
        fontSize: 16,
        color: '#7f8c8d', // Muted, dark grey color
        alignSelf: 'stretch',
        textAlign: 'left',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff', // White background to highlight the current text
        elevation: 2, // Slight elevation for depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#bdc3c7', // Light grey border
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 16,
        color: '#34495e', // Dark text for contrast
        backgroundColor: '#fff', // White background for the input
    },
    button: {
        backgroundColor: '#2980b9', // Blue shade for the button
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'stretch', // Stretch to the width of the container
        marginBottom: 20,
        shadowColor: '#7f8c8d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: '#ecf0f1', // Light text color for the button
        fontSize: 18,
        fontWeight: '600',
    },
});

export default EditNotificationScreen;
