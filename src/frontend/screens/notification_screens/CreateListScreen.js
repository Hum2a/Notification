import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from '../../styles/CreateListStyles';

const CreateListScreen = ({ navigation }) => {
    const [listName, setListName] = useState('');

    const handleCreateList = () => {
        console.log('Creating list:', listName);
        // Add logic to create a new list
        // After creating the list, navigate back or to another relevant screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a New List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter list name"
                value={listName}
                onChangeText={setListName}
            />
            <Button title="Create List" onPress={handleCreateList} />
        </View>
    );
};

export default CreateListScreen;