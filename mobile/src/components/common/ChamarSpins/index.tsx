import { Text, View, ImageBackground } from "react-native"
import { useSpinContext } from "../../../context"
import { styles } from "./styles";


export const ChamarSpins = () => {

    const { spins } = useSpinContext();

    return (
        <View style={styles.view}>
            <View style={styles.view2}>
                <Text style={styles.titulo}>Spins</Text>
                <Text style={styles.subtitulo}>Possible combinations</Text>
            </View>
            {spins.map((item) => (
                <ImageBackground
                    style={[styles.image, { overflow: 'hidden' }]}
                    source={require('../../../assets/images/background.png')}
                    key={item.id}
                >
                    <View>
                        <Text style={styles.text}>Spin-1/2 and Spin-{item.valorSpin}</Text>
                    </View>
                </ImageBackground>
            ))}
        </View>
    )
}