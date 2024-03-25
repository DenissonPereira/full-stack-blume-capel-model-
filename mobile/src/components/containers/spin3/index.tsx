import { View, Text, ScrollView } from "react-native"
import { useSpinContext } from "../../../context"
import { styles } from "./styles";


export const Spin3 = () => {

    const { spin3 } = useSpinContext();

    return (
        <ScrollView>
            {spin3.map((item) => (
                <View key={item.id} style={styles.view}>
                    <Text><Text style={styles.temp}>Temperature:</Text> {item.temperatura}</Text>
                    <Text><Text style={styles.maga}>Magnetization A:</Text> {item.m_a}</Text>
                    <Text><Text style={styles.magb}>Magnetization B:</Text> {item.m_b}</Text>
                    <Text><Text style={styles.star}>Mag. Staggered:</Text> {item.mag_staggered}</Text>
                    <Text><Text style={styles.total}>Total magnetization:</Text> {item.mag_total}</Text>
                </View>
            ))}
        </ScrollView>
    )
}