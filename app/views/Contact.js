import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

import { StackNavigator } from 'react-navigation';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    constructor(props){
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your E-mail'
        }
    }

    clearFields = () => this.setState({ name: '', msg: '', email: ''});

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    }

    render(){

        const { navigate } = this.props.navigation;

        return(
            <View style={styleContact.container}>
                <Header navigate = { navigate } message = 'Press to Login'/>
                <Text style={styleContact.head}>Contact</Text>

                <TextInput 
                    style={styleContact.input} onChangeText={ (text) => this.setState({name: text})}
                    value={this.state.name} />

                <TextInput 
                    style={styleContact.multinput} onChangeText={ (text) => this.setState({msg: text})}
                    value={this.state.msg} multiline = {true} numberOfLines = {4} />

                <TextInput 
                    style={styleContact.input} onChangeText={ (text) => this.setState({email: text})}
                    value={this.state.email} />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style = {styleContact.button}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style = {styleContact.button}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
};

const styleContact = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    head: {
        fontSize: 16,
        flex: 1
    },
    input: {
        flex: 1,
        width: '80%'
    },multinput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },button: {
        marginTop: 15,
        fontSize: 18
    }
}); 