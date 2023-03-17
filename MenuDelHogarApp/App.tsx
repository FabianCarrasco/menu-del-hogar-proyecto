import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, Animated } from 'react-native';
import { Keyframe } from 'react-native-reanimated';

// Functional component
export default function App() {
  return (
    <ImageBackground source={{uri: "https://picsum.photos/2000"}} style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backGroundPosition: 'left', 
  },
});
