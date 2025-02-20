import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BasicCalculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(0);

    const MAX_RESULT = 999999999;

    const resetResult = () => {
        setResult(0);
    };

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("Invalid Input");
        } else {
            let res = 0;
            switch (operator) {
                case "+":
                    res = n1 + n2;
                    break;
                case "-":
                    res = n1 - n2;
                    break;
                case "*":
                    res = n1 * n2;
                    break;
                case "/":
                    res = n2 !== 0 ? n1 / n2 : "Error";
                    break;
                default:
                    res = 0;
            }

            if (typeof res === "number") {
                if (res > MAX_RESULT) {
                    setResult(MAX_RESULT);
                } else if (res < -MAX_RESULT) {
                    setResult(-MAX_RESULT);
                } else {
                    setResult(res);
                }
            } else {
                setResult(res);
            }
        }

        setNum1("");
        setNum2("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={String(result)}
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={num1}
                onChangeText={setNum1}
                keyboardType="numeric"
                placeholder="Enter number 1"
            />
            <TextInput
                style={styles.input}
                value={num2}
                onChangeText={setNum2}
                keyboardType="numeric"
                placeholder="Enter number 2"
            />
            <Picker
                selectedValue={operator}
                onValueChange={(itemValue) => setOperator(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Addition" value="+" />
                <Picker.Item label="Subtraction" value="-" />
                <Picker.Item label="Multiplication" value="*" />
                <Picker.Item label="Division" value="/" />
            </Picker>

            {/* TouchableOpacity for Calculate */}
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            {/* TouchableOpacity for Reset */}
            <TouchableOpacity style={styles.button} onPress={resetResult}>
                <Text style={styles.buttonText}>C</Text>
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
    input: {
        height: 40,
        width: '100%',
        marginVertical: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 18,
    },
    picker: {
        height: 50,
        width: '100%',
        marginVertical: 10,
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

export default BasicCalculator;