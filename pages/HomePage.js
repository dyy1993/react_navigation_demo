
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';



type Props = {};
export default class HomePage extends Component<Props> {
    //3在页面中配置导航栏
    static navigationOptions = {
        title : 'HomePage',
        headerBackTitle : '返回',
    }
    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>导航控制器</Text>
                <Button
                    title='go back1'
                    onPress={() => {
                        navigation.navigate('Page1');
                    }}
                />
                <Button
                    title='go back2'
                    onPress={() => {
                        navigation.navigate('Page2',{name:'动态的'});
                    }}
                />
                <Button
                    title='go back3'
                    onPress={() => {
                        navigation.navigate('Page3',{name:'动态的'});
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
