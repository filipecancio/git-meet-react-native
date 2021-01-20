import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../../pages/User';
import Repo from '../../pages/Repo';

const {Navigator,Screen} = createBottomTabNavigator();

function Index(){
    return(
        <>
            <Navigator>
                <Screen 
                    name="User" 
                    component={User}
                />
                <Screen 
                    name="Repo" 
                    component={Repo}
                />
            </Navigator>
        </>
    );
}

export default Index;