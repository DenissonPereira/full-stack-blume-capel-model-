import { Text, View } from "react-native"
import { useSpinContext } from "../../context"
import { ScrollView } from "react-native-gesture-handler";
import { Cabecario, TextoHome, BotoesHome } from "../../components/common";
import { styles } from "./styles";

export const Home = () => {

    const { spin1 } = useSpinContext();

    return (
        <View style={styles.view}>
            <Cabecario />
            <TextoHome />
            <BotoesHome />
        </View>
    )
}