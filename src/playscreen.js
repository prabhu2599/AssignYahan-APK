import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';

const pg = require("./signs/pg.png")
const lom = require("./signs/lom.png")
const sat = require("./signs/sat.png")
const sar = require("./signs/sar.png")
const pat = require("./signs/pat.png")

const randomGen = () => {
    const img = [pg,lom,sar,sat,pat]
    const rand = Math.floor(Math.random() * img.length);
    return img[rand];
}

const bgcolors = ['#e58e26','#b71540','#0c2461','#0a3d62','#079992'];

const PlayScreen = () => {
    const [counter ,setCounter] = useState(3)
    useEffect(() => {
        if(counter === 0) {
            return 
        }
        const timer = setTimeout(() => {
            setCounter(counter-1)
        }, 500); 
        return () => {
            clearTimeout
        }
    }, [counter])

    return (
        <View style={StyleSheet.compose(styles.container, {backgroundColor: bgcolors[Math.floor(Math.random() * bgcolors.length)]})}>
            {counter > 0 ? (
                <Text style = {styles.header}>{counter}</Text>
                ) : (
                    <>
                    <Image style={styles.img} source={randomGen()}/>
                    <View style={styles.button}>
                    <Button onPress={() => setCounter(3)} title='Assign New Assignment'/>
                    </View>
                </>
                )}  
        </View>
      );
};

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
    fontSize: 200,
    color: 'white',
    //marginEnd: 100,
  },
  button: {
    //width: 350,
    //height: 100,
    marginTop: 50,
    position: "absolute",
    bottom: 35
  },
  img: {
      width: 200,
      height: 300,
      marginEnd: 50
  }

});


export default PlayScreen