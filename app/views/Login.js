import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    };

    cancelLogin = () => {
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    loginUser = () => {
        if ( !this.state.user){ Alert.alert('Insert UserName');
        } else if ( !this.state.user){ Alert.alert('Insert Password');
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if(result!='none'){
                    Alert.alert('Someone already logged on');
                    this.props.navigation.navigate('HomeRt');
                } else {
                    AsyncStorage.getItem(this.state.user, (err, result) => {
                        if (result !== null){
                            if (result !== this.state.password) {
                                Alert.alert('Password Incorrect');
                            } else{
                                AsyncStorage.setItem('userLoggedIn', this.state.user, (err, result) => {
                                    Alert.alert(`${this.state.user} Logged In`);
                                    this.props.navigation.navigate('HomeRt');
                                });
                            }
                        } else {
                            Alert.alert(`No account for ${this.state.user}`);
                        }
                    });
                }
            });
        }
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.heading}>Login</Text>

                <TextInput 
                    style={style.inputs}
                    onChangeText={ (text) => this.setState({ user: text }) }
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <TextInput 
                    style={style.inputs}
                    onChangeText={ (text) => this.setState({ password: text }) }
                    value={this.state.user}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                    <Text style={styles.button}> Login </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style={styles.button}> Cancel </Text>
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