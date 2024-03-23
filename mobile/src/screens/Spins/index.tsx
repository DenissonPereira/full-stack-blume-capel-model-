import { View } from "react-native"
import { useSpinContext } from "../../context"
import { CabecarioCurto } from "../../components/shared";
import { styles } from "./styles";
import { TodosSpins } from "../../components/common";


export const Spins = () => {

    const {spins} = useSpinContext();

    return (
        <View style={styles.view}>
            <CabecarioCurto />
            <TodosSpins />
        </View>
    )
}