import { View, Text, ScrollView } from "react-native"
import { useSpinContext } from "../../../context"


export const Spin2 = () => {

    const { spin2 } = useSpinContext();

    return(
        <ScrollView>
            {spin2.map((item) => (
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