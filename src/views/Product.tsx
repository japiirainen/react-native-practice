import React from 'react'
import { Text } from 'react-native'
import { Center } from '../Center'
import { HomeNavProps } from '../ParamLists/HomeParamList'

export const Product = ({ route }: HomeNavProps<'Product'>) => {
    return (
        <Center>
            <Text>{route.params.name}</Text>
        </Center>
    )
}
