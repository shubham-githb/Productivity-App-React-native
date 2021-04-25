import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}> 
    <Text 
        style={[styles(size).text, textStyle]}>
            {props.title}
    </Text> 
</TouchableOpacity>
    
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2.4,
      width: size,
      height: size,
      alignItems: 'center',
      // justifyContent: "centre",
      borderColor: 'white',
      borderWidth: 2.5,
    },
    text: {
      color: '#fff',
      fontSize: size / 1.6,
      // textAlign: "centre",
    },
  });
