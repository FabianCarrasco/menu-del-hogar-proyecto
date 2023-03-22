import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, Animated } from 'react-native';
import { Keyframe } from 'react-native-reanimated';
import Preview from './components/Preview';

// Functional component
export default function App() {
  return (
    <View style={styles.container}>
      <Preview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backGroundPosition: 'left', 
    height: '100%',
    width: '100%',
  },
});
