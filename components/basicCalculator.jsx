import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import calcStyles from '../assets/css/calcStyles';

const BasicCalculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(0);

    const MAX_RESULT = 999999999;

    const resetResult = () => {
        setResult(0);
        setNum1("");
        setNum2("");
    };

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("Invalid Input");
            return;
        }

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
    };

    return (
        <View style={calcStyles.container}>
            <Text style={calcStyles.title}>My Own Version Calculator</Text>

            <TextInput
                style={[calcStyles.input, calcStyles.resultInput]}
                value={String(result)}
                editable={false}
            />
            <TextInput
                style={calcStyles.input}
                value={num1}
                onChangeText={setNum1}
                keyboardType="numeric"
                placeholder="Enter first number"
            />
            <TextInput
                style={calcStyles.input}
                value={num2}
                onChangeText={setNum2}
                keyboardType="numeric"
                placeholder="Enter second number"
            />

            <Picker
                selectedValue={operator}
                onValueChange={(itemValue) => setOperator(itemValue)}
                style={calcStyles.picker}
            >
                <Picker.Item label="Addition" value="+" />
                <Picker.Item label="Subtraction" value="-" />
                <Picker.Item label="Multiplication" value="*" />
                <Picker.Item label="Division" value="/" />
            </Picker>

            <TouchableOpacity style={[calcStyles.button, calcStyles.buttonPrimary]} onPress={calculate}>
                <Text style={calcStyles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[calcStyles.button, calcStyles.buttonDanger]} onPress={resetResult}>
                <Text style={calcStyles.buttonText}>C</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BasicCalculator;