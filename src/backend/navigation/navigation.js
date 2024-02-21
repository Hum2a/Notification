import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../../frontend/screens/ScreenIndex';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Screens.HomeScreen} options={{ title: 'Welcome' }} />
                <Stack.Screen name="CreateNotificationScreen" component={Screens.CreateNotificationScreen} options={{ title: 'Create Notification' }} />
                <Stack.Screen name="ViewNotificationsScreen" component={Screens.ViewNotificationsScreen} options={{ title: 'View Notifications' }} />
                <Stack.Screen name="CreateList" component={Screens.CreateListScreen} options={{ title: 'Create Lists' }} />
                <Stack.Screen name="EditNotifications" component={Screens.EditNotificationScreen} options={{ title: 'Edit Notifications' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
