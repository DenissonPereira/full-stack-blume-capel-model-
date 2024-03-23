import { Text, View } from "react-native";
import { styles } from "./styles";



export const TextoHome = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                The API will provide detailed information about magnetizations under different conditions, allowing researchers and physics enthusiasts to access and efficiently utilize this data in their analyses and simulations.
            </Text>
        </View>
    );
}