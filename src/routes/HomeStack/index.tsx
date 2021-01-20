import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../pages/Login';
import UserTabs from '../UserTabs';

const {Navigator,Screen} = createStackNavigator();

function index(){
    return(
        <>
            <NavigationContainer>
                <Navigator screenOptions={{headerShown:false}}>
                    <Screen name="Login" component={Login}/>
                    <Screen name="User" component={UserTabs}/>
                </Navigator>
            </NavigationContainer>
        </>
    );
}

export default index;