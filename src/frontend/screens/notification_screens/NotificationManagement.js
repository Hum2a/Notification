import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { modalStyles } from '../../styles/NotifModalStyles';

const NotificationManagementModal = ({ visible, onClose, handleEdit, handleDelete, handleAddToList, handleDeleteFromList, handleAddToGeofence, handleAttachSound, handleScheduleForSpecificTime, notification }) => {

    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={modalStyles.modalView}>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleEdit }>
                    <Text style={modalStyles.modalButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleDelete }>
                    <Text style={modalStyles.modalButtonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleAddToList }>
                    <Text style={modalStyles.modalButtonText}>Add to List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleDeleteFromList }>
                    <Text style={modalStyles.modalButtonText}>Delete from List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleAddToGeofence }>
                    <Text style={modalStyles.modalButtonText}>Add to Geofence</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleAttachSound }>
                    <Text style={modalStyles.modalButtonText}>Attach Sound</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={ handleScheduleForSpecificTime}>
                    <Text style={modalStyles.modalButtonText}>Schedule for Specific Time</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyles.modalButton} onPress={onClose}>
                    <Text style={modalStyles.modalButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};



export default NotificationManagementModal;