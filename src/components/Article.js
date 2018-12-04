import React from 'react';
import {View, Linking, TouchableNativeFeedback, ScrollView} from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import {Icon} from "react-native-vector-icons";
import ChatListScreen from "react-native/local-cli/templates/HelloNavigation/views/chat/ChatListScreen";

export default class Article extends React.Component {
    render() {
        const {
            title,
            description,
            publishedAt,
            source,
            urlToImage,
            url
        } = this.props.article;
        const { noteStyle, featuredTitleStyle } = styles;
        const defaultImg =
            'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

        return (
            <Card
                containerStyle={{width: 200, height: 100, borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                <ScrollView>
                    <Text style={{fontSize: 12, color: 'green'}}>
                        {title}
                    </Text>
                </ScrollView>
            </Card>

        );
    }
}

const styles = {
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 5
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
};