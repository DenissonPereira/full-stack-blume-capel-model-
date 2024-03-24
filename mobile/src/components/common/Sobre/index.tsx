import { SafeAreaView, Text, View } from "react-native"
import { styles } from "./styles"


export const Sobre = () => {

    return (
        <SafeAreaView style={styles.safe}>
            <Text style={styles.title}>About the project</Text>
            <View>
                <Text style={styles.text}>The Blume Capel Model Magnetizations API project was conceived with the purpose of assisting both researchers and enthusiasts in the field, offering an API that provides a broad set of data for the study and advancement of this field. This initiative is open source, which means that other researchers are also being encouraged to contribute to the project, making it a collective collaboration for the benefit of the entire community interested in this topic.</Text>
            </View>
        </SafeAreaView>
    )
}