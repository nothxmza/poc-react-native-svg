import React,{useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function App() {
  const [circles, setCircles] = React.useState([
    { id: 1, cx: 30, cy: 30, r: 20, fill: 'blue' },
    { id: 2, cx: 70, cy: 70, r: 20, fill: 'blue' },
    { id: 3, cx: 110, cy: 110, r: 20, fill: 'blue' },
  ]);

  const handleCirclePress = (id) => {
   setCircles(circles.map(circle => {
     if(circle.id === id){
      if(circle.fill === 'red')
      return {...circle, fill: 'blue'}
      else
       return {...circle, fill: 'red'}
     }
     return circle;
   }))
  };

  return (
      <View style={styles.container}>
        <Svg height="200" width="200">
          {circles.map(circle => (
            <Circle
              key={circle.id}
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r}
              fill={circle.fill}
              onPress={() => handleCirclePress(circle.id)}
            />
          ))}
        </Svg>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
