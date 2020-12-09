import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export class Hero extends React.Component {
    render(){
        return(
            <View style={styles.containerHero}>
                <Image style={styles.heroImage} source={ require('../img/facebook.png') } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerHero: {
        width: 50,
        height: 50,
    },
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});