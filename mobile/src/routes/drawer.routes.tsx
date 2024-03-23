import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabRoutes } from './tab.routes';
import { Feather } from '@expo/vector-icons'
import { Image } from 'react-native';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: 'Blume-Capel Model APP',
                drawerStyle: {
                    backgroundColor: '#fff'
                },
                headerStyle: {
                    backgroundColor: '#FFFFFF',

                },
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name='homeDrawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />
        </Drawer.Navigator>
    )
}