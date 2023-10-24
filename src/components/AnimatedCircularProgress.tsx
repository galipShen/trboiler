import React from 'react';
import {PixelRatio, StyleSheet} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';

type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface AnimatedCircularProgressProps {
  radius?: number;
  color?: string;
  borderWidth?: number;
  percentage?: number;
  duration?: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedCircularProgress: React.FC<
  ReadOnlyProps<AnimatedCircularProgressProps>
> = ({
  radius = 100,
  color = '#ff457a',
  borderWidth = 20,
  percentage = 0,
  duration = 500,
}) => {
  const loaderRadius = PixelRatio.roundToNearestPixel(radius);
  const innerCircleRadius = loaderRadius - borderWidth / 2;

  const progress = useSharedValue(2 * Math.PI * innerCircleRadius); //  neden diğer circle ile dene

  const getCircumferenceData = React.useMemo(() => {
    const circumference = 2 * Math.PI * innerCircleRadius;
    const perc = percentage <= 100 ? percentage : 100;
    const circumferencePercentage = circumference * perc * 0.01;

    return {
      circumference,
      circumferencePercentage,
      percentageDiff: circumference - circumferencePercentage,
    };
  }, [percentage, innerCircleRadius]);

  const animatedStrokeDashOffset = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(progress.value, {
        duration,
      }),
    };
  }, []);

  React.useEffect(() => {
    progress.value = getCircumferenceData.percentageDiff;
  }, [percentage, innerCircleRadius]);

  return (
    <Svg style={styles(radius).svg}>
      <AnimatedCircle
        cx={radius}
        cy={radius}
        r={innerCircleRadius}
        fill="transparent"
        stroke={color}
        strokeWidth={borderWidth}
        animatedProps={animatedStrokeDashOffset}
        strokeDasharray={getCircumferenceData.circumference}
        strokeDashoffset={getCircumferenceData.circumference}
        strokeLinecap="round"
      />
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
