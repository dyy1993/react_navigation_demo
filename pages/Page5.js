
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';



type Props = {};
export default class Page5 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        const {state,setParams} = navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>控制器5</Text>

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

});
