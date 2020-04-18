import React, { useState} from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles/global';
import { results, resultsAdvice } from './home';

export default function Advice() {
  if(results.pomiar == "FAILEDTOMEASURE" || results.pomiar == "BADMEASURE" || results == ''){
    return(
      <View style={styles.badResultImageView}>
        <Image source={require('../assets/nothingToSee.png')}
          style={{width: 350, height: 350}} />
      </View>
    )
  }else{
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={ ()=>{Linking.openURL(resultsAdvice.link)}}>
          <Text style={styles.txt}>{resultsAdvice.link}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
