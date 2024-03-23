import { View, Text, ScrollView } from "react-native"
import { useSpinContext } from "../../../context"


export const Spin3 = () => {

    const { spin3 } = useSpinContext();

    return(
        <ScrollView>
            {spin3.map((item) => (
                <View key={item.id}>
                    <Text>Temperature: {item.temperatura}</Text>
                    <Text>m_A: {item.m_a}</Text>
                    <Text>m_B: {item.m_b}</Text>
                    <Text>mag_staggered: {item.mag_staggered}</Text>
                    <Text>mag_total: {item.mag_total}</Text>
                </View>
            ))}
        </ScrollView>
    )
}