import { StyleSheet } from "react-native";
import { colors } from "../../../styles/";


export const styles = StyleSheet.create({
    safe: {
        resizeMode: 'contain',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 35,
        fontWeight: "bold",
        color: colors.branco,
        textAlign: 'center'

    },
    text2: {
        fontSize: 35,
        color: colors.azul_claro,
        textAlign: 'center',
    },
    text3: {
        fontSize: 15,
        color: '#7D8BAC',
        textAlign: 'center',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    underline: {
        borderBottomColor: colors.primary, 
        borderBottomWidth: 3,       
        width: 250,
        marginBottom: 5,
        marginTop: 5
      },
});