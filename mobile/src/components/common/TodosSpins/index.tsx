import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Spin1, Spin2, Spin3, SpinNaoEncontrado } from "../../containers";
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
        } else {
            setValor(0);
        }
        Keyboard.dismiss(); 
    };

    const back = () => {
        setValor(undefined);
        Keyboard.dismiss(); 
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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
                {valor == 0 && <SpinNaoEncontrado />}
            </View>
        </KeyboardAvoidingView>
    );
};
