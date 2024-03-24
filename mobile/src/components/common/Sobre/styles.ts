import { StyleSheet } from "react-native";
import { colors } from "../../../styles";


export const styles = StyleSheet.create({
    safe: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    },
    title: {
        fontSize: 30,
        color: colors.primary
    },
    text: {
        fontSize: 17,
        color: colors.azul_azinzentado,
        padding: 20,
        textAlign: 'justify',
        fontWeight: '500'
    },
})