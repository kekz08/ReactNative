import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BasicCalculator from "../components/basicCalculator";
import homeStyles from '../assets/css/homeStyles';

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
        <View style={homeStyles.container}>
            
            {/* Counter Box */}
            <View style={homeStyles.counterContainer}>
                <Text style={homeStyles.heading}>The Number: {count}</Text>

                <View style={homeStyles.buttonContainer}>
                    <TouchableOpacity style={homeStyles.button} onPress={handleIncrement}>
                        <Text style={homeStyles.buttonText}>Increment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.button} onPress={handleDecrement}>
                        <Text style={homeStyles.buttonText}>Decrement</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[homeStyles.button, homeStyles.buttonDanger]} 
                        onPress={handleReset}
                    >
                        <Text style={homeStyles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <BasicCalculator />
        </View>
    );
};

export default Home;