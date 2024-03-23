import { StyleSheet } from "react-native";
import { colors } from "../../../styles";



export const styles = StyleSheet.create ({
    safe: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        marginBottom: 40
    },
    touch1: {
        backgroundColor: colors.azul_claro,
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touch2: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.branco,
        justifyContent: 'center',
        alignItems: 'center',
    }
})