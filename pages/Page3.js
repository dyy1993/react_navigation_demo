
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';



type Props = {};
export default class Page3 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        const {state,setParams} = navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>导航控制器</Text>
                <Button
                    title='go back'
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={text=>{
                        setParams({'name' : text});
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
    inputStyle: {
        height:40,
        width: 200,
        borderWidth:1,
        borderColor:'red',
    },
});
