import { createStackNavigator } from "@react-navigation/stack"
import { Home, Sobre, Spins } from "../screens";


const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="getStart"
                component={Spins}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="learnBCM"
                component={Sobre}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}