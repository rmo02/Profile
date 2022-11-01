import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {Home} from '../pages/home';
import {Profile} from '../pages/profile';
import {StackPage} from '../pages/stack';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name='Home' component={Home} options={{
                    tabBarIcon:({focused})=>{
                        return <Ionicons name="home" size={24} color={focused ? '#304361' : '#14120C'} />
                    }
                }}/>
                <Screen name='Profile' component={Profile} options={{
                    tabBarIcon:({focused})=>{
                        return <AntDesign name="profile" size={24} color={focused ? '#304361' : '#14120C'} />
                    }
                }}/>
                <Screen name='Stack' component={StackPage} options={{
                    tabBarIcon:({focused})=>{
                        return <Octicons name="project" size={24} color={focused ? '#304361' : '#14120C'} />
                    }
                }}/>
            </Navigator>
        </NavigationContainer>
    );
}