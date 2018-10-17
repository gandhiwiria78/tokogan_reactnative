import React, { Component } from 'react'
import { FooterTab , Footer , Icon, Text, Button} from 'native-base';
import { TabNavigator } from 'react-navigation';

import ChatScreen from './ChatScreen';
import ChatLuck from './ChatLucky';
import ChatPormsie from './ChatPormsie'

export default (MainChatScreen = TabNavigator({
    ChatScreen : {screen:ChatScreen},
    ChatLuck : {screen:ChatLuck},
    ChatPormsie: {screen: ChatPormsie}
},{
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical
                    active={props.navigationState.index === 0}
                     onPress= {()=>props.navigation.navigate("ChatScreen")}
                    >
                        <Icon name="bowtie"/>
                        <Text>
                            Chat Screen 
                        </Text>
                    </Button>
                    <Button vertical
                      active={props.navigationState.index === 1}
                       onPress= {()=>props.navigation.navigate("ChatLuck")}
                    >
                        <Icon name="briefcase"/>
                        <Text>
                            Chat Lucky 
                        </Text>
                    </Button>
                    <Button vertical
                      active={props.navigationState.index === 2}
                       onPress= {()=>props.navigation.navigate("ChatPormsie")}
                    >
                        <Icon name="headset"/>
                        <Text>
                            Chat Promisie 
                        </Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}));