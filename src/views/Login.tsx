import React from 'react'
import { Text, Button } from 'react-native'
import { Center } from '../Center'

interface LoginProps {
	navigation: any
}
export const Login: React.FC<LoginProps> = ({ navigation }) => {
	return (
		<Center>
			<Text>I am Login!</Text>
			<Button
				title='go to register'
				onPress={() => {
					navigation.navigate('Register')
				}}
			/>
		</Center>
	)
}
