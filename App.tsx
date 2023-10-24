import React from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import AnimatedCircularProgress from './src/components/AnimatedCircularProgress';
import CircularProgressComp from './src/components/CircularProgressComp';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>APP</Text>
      {/* <AnimatedCircularProgress /> */}
      {/* <CircularProgressComp /> */}
    </SafeAreaView>
  );
}

export default App;
