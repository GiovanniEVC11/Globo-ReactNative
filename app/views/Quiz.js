import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, FlatList } from 'react-native';

import { QuizData } from '../data/QuizQuestion.js';
import { Question } from '../sections/Questions.js';

export class Quiz extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            questLoaded: false,
            totalScore: 100,
            completedQuiz: false
        };

    }

    componentDidMount(){
        let numQuestions = Array.from(QuizData.questions).length
        this.setState({
            questList: Array.from(QuizData.questions),
            questLoaded: true,
            numberOfQuestions: numQuestions,
            incorrect: 0,
            questionAnswered: 0
        });
    }

    updateScore = (penalty) => {
        let tempScore = this.state.totalScore;
        let missed = this.state.incorrect;
        let questionsTotal = this.state.numberOfQuestions;
        let questionsDone = this.state.questionAnswered;

        let newScore = tempScore - penalty;
        let totalAnswered = questionsDone + 1;
        let totalMissed = penalty ? missed + 1 : missed;

        this.setState({
            totalScore: newScore, incorrect: totalMissed, questionAnswered: totalAnswered
        });

        if (totalAnswered === questionsTotal){
            this.setState({
                completedQuiz: true
            });
        }
    }

    finishQuiz = () => {
        this.props.navigation.navigate(
            'FinishRt', {
                score: this.state.totalScore,
                missed: this.state.incorrect,
                questions: this.state.numberOfQuestions
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {   this.state.questLoaded && (
                    <FlatList 
                        data = { this.state.questList }
                        renderItem = { ({item}) =>
                            <Question 
                                question = { item.question }
                                ans1 = { item.ans1 }
                                ans2 = { item.ans2 }
                                ans3 = { item.ans3 }
                                ans4 = { item.ans4 }
                                correctAnswer = { item.correctAns }
                                scoreUpdate = {this.updateScore}
                            />
                        }
                    />
                )}

                { !this.state.completedQuiz && (
                    <TouchableHighlight style={styles.disabled}>
                        <Text>Answer all questions</Text>
                    </TouchableHighlight>
                )}

                { this.state.completedQuiz && (
                    <TouchableHighlight style={styles.enabled} onPress={this.finishQuiz}>
                        <Text>Finished</Text>
                    </TouchableHighlight>
                )}

                { !this.state.questLoaded && (
                   <Text>L O A D I N G . . . </Text>
                )}

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    }, disabled: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        height: '10%'
    }, enabled: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#90ee90',
        height: '10%'
    }
});