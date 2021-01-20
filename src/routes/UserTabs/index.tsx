import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../../pages/User';
import Repo from '../../pages/Repo';
import { Octicons } from '@expo/vector-icons';

const {Navigator,Screen} = createBottomTabNavigator();

function Index(){
    return(
        <>
            <Navigator
            tabBarOptions={{
                style:{
                    elevation:0,
                    borderColor:'transparent',
                },
                tabStyle:{
                    alignItems:'center',
                    justifyContent: 'center'
                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:20,
                },
                showLabel:false,
                inactiveTintColor: '#7D868D',
                activeTintColor: '#FA9D76',
            }}
            >
                <Screen 
                    name="User" 
                    component={User}
                    options={{
                        tabBarIcon: ({size,color})=>{
                            return(
                                <Octicons name="person" size={size} color={color}/>
                            )
                        }
                    }}
                />
                <Screen 
                    name="Repo" 
                    component={Repo}
                    options={{
                        tabBarIcon: ({size,color})=>{
                            return(
                                <Octicons name="repo" size={size} color={color}/>
                            )
                        }
                    }}
                />
            </Navigator>
        </>
    );
}

export default Index;