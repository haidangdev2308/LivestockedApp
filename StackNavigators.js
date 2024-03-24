import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import {
    Ionicons,
    MaterialCommunityIcons,
    AntDesign,
    Entypo
} from '@expo/vector-icons';
import { colors } from './constants';
import HomeScreen from './screens/homeScreen/HomeScreen'
import ProfileScreen from './screens/profileScreen/ProfileScreen'
import PigManageScreen from './screens/pigManageScreen/PigManageScreen'
import NotificationScreen from './screens/notificationScreen/NotificationScreen'

export default class StackNavigator extends Component {
    render() {
        const tab = createBottomTabNavigator()
        const stack = createNativeStackNavigator()


        const screenOptions = ({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'black',
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: 'white',
            tabBarBackground: () => {
                <View style={{ backgroundColor: 'white', flex: 1, }} />
            },
        })

        const BottomTab = () => {
            return <tab.Navigator screenOptions={screenOptions}>
                <tab.Screen name='Home' component={HomeScreen} options={{
                    tabBarLabel: ({ focused }) =>
                    focused ? <Text style={{fontSize: 11, fontWeight: '600'}}>Trang chủ</Text>
                        : null,
                    tabBarLabelStyle: {
                        fontWeight: 500
                    },
                    tabBarIcon: ({ focused }) =>
                        focused ? <Ionicons name="home" size={35} color={colors.primary} />
                            : <Ionicons name="home-outline" size={28} color="black" />
                }}
                />
                <tab.Screen name='PigManage' component={PigManageScreen} options={{
                    tabBarLabel: ({ focused }) =>
                    focused ? <Text style={{fontSize: 11, fontWeight: '600'}}>Lợn</Text>
                        : null,
                    tabBarLabelStyle: {
                        fontWeight: 500
                    },
                    tabBarIcon: ({ focused }) =>
                    focused ? <MaterialCommunityIcons name="pig-variant" size={35} color={colors.primary} />
                    : <MaterialCommunityIcons name="pig-variant-outline" size={28} color="black" />
                }} />
                <tab.Screen name='Notification' component={NotificationScreen} options={{
                    tabBarLabel: ({ focused }) =>
                    focused ? <Text style={{fontSize: 11, fontWeight: '600'}}>Thông báo</Text>
                        : null,
                    tabBarLabelStyle: {
                        fontWeight: 500
                    },
                    tabBarIcon: ({ focused }) =>
                        focused ? <Ionicons name="notifications-sharp" size={35} color={colors.primary} />
                            : <Ionicons name="notifications-outline" size={28} color="black" />
                }} />
                <tab.Screen name='Profile' component={ProfileScreen} options={{
                    tabBarLabel: ({ focused }) =>
                    focused ? <Text style={{fontSize: 11, fontWeight: '600'}}>Cá nhân</Text>
                        : null,
                    tabBarLabelStyle: {
                        fontWeight: 500
                    },
                    tabBarIcon: ({ focused }) =>
                        focused ? <Ionicons name="person" size={35} color={colors.primary} />
                            : <Ionicons name="person-outline" size={28} color="black" />
                }} />
            </tab.Navigator>
        }

        return (
            <NavigationContainer>
                <stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
                    <stack.Screen name={'Main'} component={BottomTab} />
                </stack.Navigator>
            </NavigationContainer>
        )
    }
}



