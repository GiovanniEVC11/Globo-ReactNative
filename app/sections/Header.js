import React from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = () => {
        if(this.state.isLoggedIn){
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            }); 
        }else {
            this.props.navigate('LoginRt');
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if(result === 'none'){
                console.log('NONE');
            }else if (result === null){
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                });
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
        });
    }

    render(){
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return(
            <View style={styles.headStyle}>
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={ require('../img/facebook.png') }/>
                </View>
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headStyle: {
        padding: 10,
        backgroundColor: Platform.OS === 'android' ? '#31e981' : '#35605a',
        marginTop: 20,
        flexDirection: 'row'
    },
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    containerLogo: {
        width: 50,
        height: 50
    },
    logo: {
        flex: 1,
        width: undefined,
        height: undefined
    }
});