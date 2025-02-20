import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>The Number: {count}</Text>

            {/* Increment Button */}
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>

            {/* Decrement Button */}
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>

            {/* Reset Button */}
            <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Home;