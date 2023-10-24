import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';

const AnimCircProgGradient: React.FC = () => {
  return (
    <LinearGradient
      locations={[0.3, 0.8]}
      start={{x: 0.0, y: 0.25}}
      colors={['#FFC200', '#00CAFF']}
      style={styles.linearGradient}>
      <AnimatedCircularProgress
        size={200}
        width={30}
        fill={50}
        tintColor="transparent"
        backgroundColor="transparent">
        {fill => (
          <View style={styles.innerCircle}>
            <Text style={styles.fillText}>%</Text>
            <Text style={styles.fillText}>100</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </LinearGradient>
  );
};

export default AnimCircProgGradient;

const styles = StyleSheet.create({
  fillText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#001C30',
  },
  linearGradient: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  innerCircle: {
    borderRadius: 70,
    width: 140,
    height: 140,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
