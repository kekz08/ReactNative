import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 350,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 4, // For Android shadow
        marginVertical: 50,
        alignSelf: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 45,
        padding: 10,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#333',
    },
    picker: {
        width: '100%',
        height: 45,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        width: '100%', // Makes the button full width
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonClear: {
        backgroundColor: '#dc3545',
    },
    buttonClearText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;