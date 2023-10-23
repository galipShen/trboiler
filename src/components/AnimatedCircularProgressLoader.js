import React from 'react';
import {StyleSheet} from 'react-native';
import {Circle, Svg} from 'react-native-svg';

type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface AnimatedCircularProgressProps {
  radius?: number;
  color?: string;
}

const AnimatedCircularProgressLoader: React.FC<ReadOnlyProps<AnimatedCircularProgressProps>> = ({
  radius = 100,
  color = '#ff457a',
}) => {
  return (
    <Svg style={styles(radius).svg}>
      <Circle cx={radius} cy={radius} r={radius} fill={color} />
    </Svg>
  );
};

export const styles = (radius: number) =>
  StyleSheet.create({
    svg: {
      width: 2 * radius,
      height: 2 * radius,
    },
  });

export default AnimatedCircularProgress;