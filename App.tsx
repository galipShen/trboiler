import React from 'react';
import {SafeAreaView, Text, Alert, Button} from 'react-native';
import AnimatedCircularProgress from './src/components/AnimatedCircularProgress';
import CircularProgressComp from './src/components/CircularProgressComp';
import AnimCircProgGradient from './src/components/AnimCircProgGradient';

function App(): JSX.Element {
  const [progress, setProgress] = React.useState(10);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'silver',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>APP</Text>

      <AnimatedCircularProgress percentage={progress} />
      <Button
        title="Load Circle"
        onPress={() => {
          setProgress(100);
        }}
      />
      {/* <CircularProgressComp /> */}
      {/* <AnimCircProgGradient /> */}
    </SafeAreaView>
  );
}

export default App;
