import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppParamList } from '../ParamLists/AppParamList'
import { Home } from '../views/Home'
import { Search } from '../views/Search'

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs = () => {
	return (
		<Tabs.Navigator>
			<Tabs.Screen name='Home' component={Home} />
			<Tabs.Screen name='Search' component={Search} />
		</Tabs.Navigator>
	)
}
