import React, { useContext } from 'react'
import { Text, Button } from 'react-native'
import { Center } from '../Center'
import { AuthContext } from '../AuthProvider'

export const Home: React.FC = () => {
    const { logout } = useContext(AuthContext)
    return (
        <Center>
            <Text>Home</Text>
            <Button title="logout" onPress={logout} />
        </Center>
    )
}
