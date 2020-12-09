import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Register extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            user: '',
            password: '',
            pwdConfirm: ''
        };
    };

    cancelRegister = () => {
        Alert.alert('Registration Cancelled');
        this.props.navigation.navigate('HomeRt');
    };

    registerAccount = () => { 
        try{
            if (!this.state.user) {
                Alert.alert('Plese enter a username');
            }
            else if (this.state.password !== this.state.pwdConfirm) {
                Alert.alert('Passwords do not match');
            }
            else{
                AsyncStorage.getItem(this.state.user, (err, result) => {
                    if(result !== null){
                        Alert.alert(`${this.state.user} already exists`);
                    }
                    else{
                        AsyncStorage.setItem(this.state.user, this.state.password, (err, result) => {
                            Alert.alert(`${this.state.user} accound created`);
                            this.props.navigation.navigate('HomeRt');
                        });
                    }
                });
            }
        }catch(e){
            console.error(e);
        }

    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Register Account</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={ (text) => this.setState({user: text}) }
                    value={this.state.user}
                />
                <Text style={styles.label}>Enter username</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={ (text) => this.setState({password: text}) }
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter password</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={ (text) => this.setState({pwdConfirm: text}) }
                    value={this.state.pwdConfirm}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Confirm password</Text>

                <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
                    <Text style = {styles.button}> Register </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
                    <Text style = {styles.button}> Cancel </Text>
                </TouchableHighlight>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: 10
    },
    heading: { 
        fontSize: 16, 
        flex: 1
    },
    inputs: { 
        flex: 1, 
        width: '80%', 
        padding: 10
    },
    button: { 
        marginTop: 15, 
        fontSize: 16 
    },
    label: {
        paddingBottom: 20
    }
});
