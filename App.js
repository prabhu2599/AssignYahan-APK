import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Playscreen from "./src/playscreen";



export default function App() {

  const [play, setPlay] =  useState(false)


  return (
    play ? (<Playscreen/>) : (
      <View style={styles.container}>
      <Text style={styles.header}>Assignments Yahan !!!</Text>
      <Text style={styles.emojis}>🥺 🥱 😏</Text>
      <View style= {styles.button}>
      <Button onPress = {() => setPlay(true)} title = 'Assign Now'/>
      </View>
      </View>
    )
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojis: {
    color: 'white',
    fontSize: 100,
  },
  header: {
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
    fontSize: 35,
    color: 'white',
    //marginEnd: 100,
  },
  button: {
    width: 350,
    height: 100,
    marginTop:50
  }

});
