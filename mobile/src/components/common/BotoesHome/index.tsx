import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { Feather, Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"
import { useRoutes } from "../../../hooks/useRoutes"


export const BotoesHome = () => {

    const { navigate } = useRoutes();

    return (
        <SafeAreaView style={styles.safe}>
            <TouchableOpacity style={styles.touch1} onPress={() => navigate('getStart')}>
                <Text style={styles.text}><Feather name="play" />Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch2} onPress={() => navigate('learnBCM')}>
                <Text style={styles.text}><Ionicons  name="book-outline" /> Learn BCM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}