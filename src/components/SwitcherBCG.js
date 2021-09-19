
import React, { Component, useEffect, useRef, useState } from 'react'
import { Image, ActivityIndicator, StyleSheet, Text, ImageBackground, View, Animated } from 'react-native'
import useViewSize from "../hooks/useViewSize";
import { LinearGradient } from 'expo-linear-gradient';

import Btn from './Btn';

const images = [
  { uri: 'https://picsum.photos/800/1400?random=14' },
  { uri: 'https://picsum.photos/800/1400?random=13' },
  { uri: 'https://picsum.photos/800/1400?random=151' },
  { uri: 'https://picsum.photos/800/1400?random=152' },
  { uri: 'https://picsum.photos/800/1400?random=153' },

  { uri: 'https://picsum.photos/800/1400?random=88' }
];

const SwitcherBCG = ({ children }) => {
  const [, heightSize, widthSize] = useViewSize()
  const opacity = useRef(new Animated.Value(0)).current;
  const [position, setPosition] = useState(0);
  const [isAnimated, setIsAnimated] = useState(null)

  const setNewPosition = () => {
    if (isAnimated) {
      if (position + 1 >= images.length) {
        setPosition(0)
      } else {
        setPosition(position + 1)
      }
      setIsAnimated(false)
    }
  }


  const playAnim = () => {
    setIsAnimated(true)
    Animated.timing(opacity, {
      delay: 0,
      toValue: 0.5,
      duration: 2500,
      useNativeDriver: true,
    }).start(resetAnim);
  }
  const resetAnim = () => {
    Animated.timing(opacity, {
      delay: 0,
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start(setNewPosition);
  }


  const currentImage = images[position];
  return (
    <LinearGradient
      // Button Linear Gradient
      locations={[0, 0.5]}
      colors={['#03b6baa8', '#0045529c', '#03b6baa8']}
      style={{
        opacity: .4, zIndex: 1,
      }}>
      <Animated.Image
        onLoad={playAnim}
        source={currentImage}
        style={{
          zIndex: -1,
          height: heightSize,
          width: widthSize,
          opacity: opacity,
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 1.1],
                outputRange: [1, 1.1],
              })
            },
          ],
        }} />

    </LinearGradient>

  )

}
export default SwitcherBCG

const styles = StyleSheet.create({
  image: {
  }
})
