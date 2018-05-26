import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import DisplayScreen from './DisplayScreen';
import SearchScreen from './SearchScreen';

export const RootStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Search Images'
            }
        },
        Display: {
            screen: DisplayScreen,
            navigationOptions: {
                title: 'Images'
            }
        },
    },
    {
        initialRouteName: 'Search'
    }
);