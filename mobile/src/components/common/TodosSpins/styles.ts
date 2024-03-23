import { StyleSheet } from "react-native";
import { colors } from "../../../styles";



export const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        gap: 20
    },
    input: {
        borderWidth: 1,
        borderColor: colors.azul_azinzentado,
        width: 220,
        height: 50,
        borderRadius: 5,
        fontSize: 25,
        textAlign: 'center'
    },
    button1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        gap: 20,
    },
    botao1: {
        backgroundColor: colors.azul_claro,
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao2: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.branco
    },
    textButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    container: {

    }
})