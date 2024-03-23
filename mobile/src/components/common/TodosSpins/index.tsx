import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Spin1, Spin2, Spin3 } from "../../containers";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons'

export const TodosSpins = () => {
    const [numberValue, setNumberValue] = useState<number | undefined>();
    const [valor, setValor] = useState<number>();

    const handleChange = (text: string) => {
        const parsedValue = parseFloat(text);
        setNumberValue(isNaN(parsedValue) ? undefined : parsedValue);
    };

    const handleSubmit = () => {
        if (numberValue == 1) {
            setValor(1);
        } else if (numberValue == 2) {
            setValor(2);
        } else if (numberValue == 3) {
            setValor(3);
        }
    };

    const back = () => {
        setValor(undefined);
    }

    return (
        <View style={styles.view}>
            <TextInput
                keyboardType="numeric"
                placeholder=" Spin value here..."
                onChangeText={handleChange}
                value={numberValue?.toString()}
                style={styles.input}
            />
            <View style={styles.button1}>
                <TouchableOpacity onPress={handleSubmit} style={styles.botao1}>
                    <View style={styles.textButton}>
                        <Feather name="eye" color={'white'} />
                        <Text style={styles.text}>View</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={back} style={styles.botao2} >
                    <View style={styles.textButton}>
                        <Feather name="log-out" color={'white'} />
                        <Text style={styles.text}>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {valor == 1 && <Spin1 />}
            {valor == 2 && <Spin2 />}
            {valor == 3 && <Spin3 />}

            
        </View>
    );
};
