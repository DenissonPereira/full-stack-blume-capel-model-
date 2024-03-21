import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens";


const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="home"
                component={Home}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}