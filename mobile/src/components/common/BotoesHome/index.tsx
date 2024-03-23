import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { Feather, Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"


export const BotoesHome = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <TouchableOpacity style={styles.touch1}>
                <Text><Feather name="play" />Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch2}>
                <Text><Ionicons name="book-outline" />Learn BCM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}