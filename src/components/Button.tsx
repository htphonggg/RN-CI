import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle, TouchableOpacity, StyleSheet} from 'react-native';

type ButtonProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Button = (props: ButtonProps) => {
  const {children, style} = props;
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#D67227',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
