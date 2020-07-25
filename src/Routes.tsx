import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from './views/Login'
import { Register } from './views/Register'
const Stack = createStackNavigator()

export const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
