import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        minWidth: 200,
        textAlign: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
