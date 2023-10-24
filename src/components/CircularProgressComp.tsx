import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {CircularProgress} from 'react-native-progress-circle-gradient';

type Props = {};

const CircularProgressComp = (props: Props) => {
  return (
    <View>
      <CircularProgress
        backgroundColor={'#1F1B24'}
        radius={128}
        strokeWidth={20}
        percentageComplete={80}
        colors={['#00CAFF', '#FFC200']}
        easing={'linear'}
        duration={3000}
        onAnimationFinish={() => {
          Alert.alert('Animation has finished!');
        }}
      />
    </View>
  );
};

export default CircularProgressComp;

const styles = StyleSheet.create({});
