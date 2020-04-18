import React from 'react';
import { View, Text, Button, ComponentDidMount } from 'react-native';
import { styles } from '../styles/global';
import { HomeButton } from '../styles/button';
import { YellowBox } from 'react-native';
import { socket } from './login';
import Register from './register';
import Login from './login';
import io from 'socket.io-client';

import _ from 'lodash';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
  'Setting a timer'
])
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


export let results = '';
export let resultsImages;
export let resultsVideos;
export let resultsAdvice;


// socket.on('confirmLogin', function(data){
//   console.log(data);

// });

// socket.on('confirmRegister', function(data){
//   console.log(data);
// });



export default function Home({ navigation }) {

  socket.on('pomiarResult2', function(data){
    results = data;
    console.log(data);
    navigation.navigate('Result');
  });
  socket.on('zdjecia', function(data){
    resultsImages = data;
    console.log(data);
  });
  socket.on('muzyka', function(data){
    resultsVideos = data;
    console.log(data);
  });
  socket.on('porady', function(data){
    resultsAdvice = data;
    console.log(data);
  });

  const pressHandler = () => {
    navigation.navigate('Measure');
    socket.emit('requestPomiar');
    console.log('zacznij pomiar');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h4}>Uszanowanko</Text>
      <Text style={styles.s1}>Naciśnij przycisk poniżej {"\n"} i przyłóż palec do czujnika</Text>
      <View style={styles.buttonContainer}>
        <HomeButton text='Zacznij Pomiar' onPress={pressHandler} />
      </View>
    </View>
  )
}
