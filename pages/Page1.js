
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';



type Props = {};
export default class Page1 extends Component<Props> {
    static navigationOptions = {
        title : 'HomePage333',
        headerBackTitle : '返回',
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>导航控制器1</Text>
                <Button
                    title='go back'
                    onPress={() => {
                        navigation.goBack();
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
