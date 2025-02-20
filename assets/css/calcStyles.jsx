import { StyleSheet } from 'react-native';

const calcStyles = StyleSheet.create({
    container: {
        width: 350,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 4,
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
        paddingHorizontal: 10,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        color: '#333',
        textAlign: 'right',
    },
    operatorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 15,
    },
    operatorButton: {
        flex: 1,
        paddingVertical: 12,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd', // Default background color
    },
    operatorButtonSelected: {
        backgroundColor: '#007bff', // Highlighted when selected
    },
    operatorText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        width: '100%',
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
    buttonDanger: {
        backgroundColor: '#dc3545',
    },
});

export default calcStyles;
