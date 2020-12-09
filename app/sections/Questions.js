import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export class Question extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            selected: false,
            correct: false
        }
    }

    chooseAnswer = (ans) => {
        let worth = 25;
        if (ans === this.props.correctAnswer ){
            this.setState({
                selected: true,
                correct: true
            });
            this.props.scoreUpdate(0);
        } else {
            this.setState({
                selected: true
            });
            this.props.scoreUpdate(worth);
        }
    }

    render(){
        return (
            <View style={styles.container}>
                {  !this.state.selected && (
                    <View style={styles.container}>

                        <Text style={styles.question}>{this.props.question}</Text>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={ () => this.chooseAnswer('ans1') }>
                            <Text style={styles.answer}>{this.props.ans1}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={ () => this.chooseAnswer('ans2') }>
                            <Text style={styles.answer}>{this.props.ans2}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={ () => this.chooseAnswer('ans3') }>
                            <Text style={styles.answer}>{this.props.ans3}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={ () => this.chooseAnswer('ans4') }>
                            <Text style={styles.answer}>{this.props.ans4}</Text>
                        </TouchableHighlight>

                    </View>
                )}
                {  this.state.selected && this.state.correct && (
                    <View style={styles.correctContainer}>
                        <Text style={styles.question}>{this.props.question}</Text>
                        <Text style={styles.answer}>{this.props.ans1}</Text>
                        <Text style={styles.answer}>{this.props.ans2}</Text>
                        <Text style={styles.answer}>{this.props.ans3}</Text>
                        <Text style={styles.answer}>{this.props.ans4}</Text>
                        <Text style={styles.answer}>CORRECT</Text>
                    </View>
                )}
                {  this.state.selected && !this.state.correct && (
                    <View style={styles.wrongContainer}>
                        <Text style={styles.question}>{this.props.question}</Text>
                        <Text style={styles.answer}>{this.props.ans1}</Text>
                        <Text style={styles.answer}>{this.props.ans2}</Text>
                        <Text style={styles.answer}>{this.props.ans3}</Text>
                        <Text style={styles.answer}>{this.props.ans4}</Text>
                        <Text style={styles.answer}>INCORRECT</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingTop: 20
    },
    correctContainer: {
        flex: 1, paddingTop: 20, backgroundColor: '#008000'
    },
    wrongContainer: {
        flex: 1, paddingTop: 20, backgroundColor: '#ff0000'
    },
    question: {
        flex: 2, padding: 15, fontSize: 20
    }, 
    answer: {
        flex: 2, padding: 15, fontSize: 20, textAlign: 'center'
    }
});
