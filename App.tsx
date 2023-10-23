import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimatedCircularProgress from './components/AnimatedCircularProgress';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AnimatedCircularProgress />
    </SafeAreaView>
  );
}

export default App;
