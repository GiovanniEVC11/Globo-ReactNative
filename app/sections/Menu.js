import React from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';

export class Menu extends React.Component {

    onPress = () => {
        Alert.alert('You tapped the button!'); 
    }

    render(){
        return(
            <View style={styleMenu.container}>

                <View style={styleMenu.buttonRow}>
                    <TouchableOpacity style={styleMenu.button} onPress={ () => this.props.navigate('VideoRt') }>
                        <Text style={styleMenu.buttonText}>Lessons</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styleMenu.button} onPress={ () => this.props.navigate('RegisterRt') }>
                        <Text style={styleMenu.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleMenu.buttonRow}>
                    <TouchableOpacity style={styleMenu.button} onPress={this.onPress}>
                        <Text style={styleMenu.buttonText}>Blog</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styleMenu.button} onPress={ () => this.props.navigate('ContactRt') }>
                        <Text style={styleMenu.buttonText}>Contact</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleMenu.buttonRow}>
                    <TouchableOpacity style={styleMenu.button} onPress={ () => this.props.navigate('QuizRt') }>
                        <Text style={styleMenu.buttonText}>Quiz</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styleMenu.button} onPress={this.onPress}>
                        <Text style={styleMenu.buttonText}>About</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styleMenu = StyleSheet.create({
    container:{
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow:{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    button: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
});