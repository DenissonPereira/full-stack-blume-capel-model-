import { Text, View } from "react-native"
import { CabecarioCurto } from "../../components/shared"
import { ChamarSpins } from "../../components/common"
import { styles } from "./styles"


export const Modelo = () => {
    return (
        <View style={styles.view}>
            <CabecarioCurto />
            <ChamarSpins />
        </View>
    )
}