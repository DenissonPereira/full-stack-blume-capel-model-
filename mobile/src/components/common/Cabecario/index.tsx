import { ImageBackground, Text, View } from "react-native"
import { styles } from "./styles"
import { Fontisto } from '@expo/vector-icons'
import { colors } from "../../../styles"


export const Cabecario = () => {
    return (
        <ImageBackground
            style={[styles.safe, { borderBottomLeftRadius: 80, borderBottomRightRadius: 80, overflow: 'hidden' }]}
            source={require('../../../assets/images/background.png')}
        >
            <View style={styles.view}>
                <View>
                    <Fontisto name="atom" size={60} color={colors.branco} />
                </View>
                <Text style={styles.text1}>Blume-Capel Model</Text>
                <View style={styles.underline} />
                <Text style={styles.text2}>Magnetizations API</Text>
            </View>
        </ImageBackground>
    )
}