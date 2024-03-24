import { Image, SafeAreaView, Text, View } from "react-native"
import { styles } from "./styles"


export const SobreOModelo = () => {

    return (
        <SafeAreaView style={styles.safe}>
            <Text style={styles.title}>About the model</Text>
            <Image source={require('../../../assets/images/equat.png')} style={{ width: 300, resizeMode: 'contain' }} />
            <Text style={styles.text}>is an important approach in statistical physics that investigates critical phenomena in magnetic systems. It describes the phase transition in magnetic materials, such as ferromagnets, to understand the abrupt change in magnetic properties under certain conditions. This model considers interactions between spins in a lattice, exploring how these interactions lead to complex collective behaviors, such as spontaneous magnetization. This complexity makes the Blume-Capel model a valuable tool for understanding critical phenomena in various physical systems.</Text>
        </SafeAreaView>
    )
}