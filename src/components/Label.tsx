import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const Label = (props: TextProps) => {
  return <Text style={style.defaultStyle} {...props} />;
};

export default Label;

const style = StyleSheet.create({
  defaultStyle: {
    color: 'black',
    fontSize: 16,
  },
});
