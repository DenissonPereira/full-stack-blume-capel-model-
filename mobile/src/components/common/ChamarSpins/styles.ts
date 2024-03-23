import { StyleSheet } from "react-native";
import { colors } from "../../../styles";


export const styles = StyleSheet.create ({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginBottom: 20
    },
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        color: colors.branco,
        fontSize: 20
    },
    titulo: {
        fontSize: 30,
        color: colors.primary
    },
    subtitulo: {
        fontSize: 15,
        color: colors.azul_azinzentado
    },
    view2: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})