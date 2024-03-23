import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRoutes from './stack.routes';
import { Feather, Fontisto } from '@expo/vector-icons'
import { Buscar, Config, Modelo, Spins } from '../screens';
import { View } from 'react-native';
import { colors } from '../styles';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100
                },
            }}
        >
            <Tab.Screen
                name='homeTab'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='buscarTab'
                component={Buscar}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='search' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='spinsTab'
                component={Spins}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            backgroundColor: colors.azul_escuro,
                            borderRadius: 50,
                            padding: 10,
                            overflow: 'hidden',
                        }}>
                            <Fontisto name="atom" color={'white'} size={size} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name='modeloTab'
                component={Modelo}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='grid' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='configTab'
                component={Config}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='settings' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}