import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f7f7f7',
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center', // Center the items horizontally
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50', // A darker shade for the title
        marginBottom: 20,
    },
    stats: {
        fontSize: 18,
        color: '#34495e', // A muted, dark color for stats
        alignSelf: 'stretch', // Stretch to the width of the container
        textAlign: 'left', // Align text to the left
        marginTop: 10,
        marginBottom: 20,
        borderBottomWidth: 1, // Add a subtle bottom border
        borderBottomColor: '#ecf0f1', // Light border color
        paddingBottom: 10,
    },
    button: {
        backgroundColor: '#2980b9', // A pleasant blue shade
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25, // Rounded corners
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
        color: '#ecf0f1', // A light, almost-white color for the button text
        fontSize: 18,
        fontWeight: '600',
    },
    notificationItem: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#2c3e50',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        alignSelf: 'stretch', // Ensure it stretches to the width of the container
        marginHorizontal: 10,  // Stretch to the width of the container
    },
    notificationText: {
        fontSize: 18,
        color: '#2c3e50', // Darker shade for better readability
    },
    listContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'stretch', // Ensure it stretches to the width of the container
        marginHorizontal: 10, // Add horizontal margin for better spacing
        paddingBottom: 20,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
