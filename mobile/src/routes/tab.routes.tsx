import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRoutes from './stack.routes';
import { Feather, Fontisto } from '@expo/vector-icons'
import { Helper, Modelo, Sobre, Spins } from '../screens';
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
                name='sobreTab'
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='book' color={color} size={size} />
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
                name='helperTab'
                component={Helper}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='help-circle' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}