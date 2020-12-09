// import { StatusBar } from 'expo-status-bar'; <StatusBar style="auto" />
import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';

import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';

import { Register } from './app/views/Register.js';

import { Quiz } from './app/views/Quiz.js';
import { QzFinish } from './app/views/QuizFinish.js';

// Navegacion entre pantallas 
import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator({
  HomeRt: {
    screen: Home
  },
  ContactRt: {
    screen: Contact
  },
  VideoRt: {
    screen: Video
  }, 
  VideoDetailRt: {
    screen: VideoDetail
  },
  RegisterRt: {
    screen: Register
  }, 
  QuizRt: {
    screen: Quiz
  },
  FinishRt: {
    screen: QzFinish
  }
},
  {
    initialRouteName: 'HomeRt'
  }
);

export default class App extends React.Component {
  render(){
    return (   
        <MyRoutes />
    );  
  }
}