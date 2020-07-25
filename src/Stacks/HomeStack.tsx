import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeParamList } from '../ParamLists/HomeParamList'
import { Feed } from '../views/Feed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import { AuthContext } from '../AuthProvider'
import { Product } from '../views/Product'

const Stack = createStackNavigator<HomeParamList>()

export const HomeStack = () => {
    const { logout } = useContext(AuthContext)

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => logout()}>
                                <Text
                                    style={{
                                        color: 'red',
                                    }}
                                >
                                    LOGOUT
                                </Text>
                            </TouchableOpacity>
                        )
                    },
                }}
                name="Feed"
                component={Feed}
            />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}
