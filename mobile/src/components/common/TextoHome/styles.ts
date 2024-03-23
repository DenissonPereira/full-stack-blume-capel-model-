import { StyleSheet } from "react-native";
import { colors } from "../../../styles";


export const styles = StyleSheet.create ({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.azul_escuro,
        width: 300,
        textAlign: "justify",
        fontWeight: '500'
    }
})