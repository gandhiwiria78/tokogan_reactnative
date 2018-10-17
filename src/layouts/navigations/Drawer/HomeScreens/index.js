import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen.js';
import ProfileScreen from '../ProfileScreens/ProfileScreen.js';
import MainChatScreen from '../ChatScreens/index.js';
import SideBar from '../SideBar/SideBar.js';

const HomeScreenRouter = DrawerNavigator({
    Home:{ screen: HomeScreen },
    Profile:{ screen: ProfileScreen },
    Chat:{ screen: MainChatScreen },

},{
    contentComponent: props => <SideBar {...props} /> //ini artinya dia mengambil semua props 
})

export default HomeScreenRouter;