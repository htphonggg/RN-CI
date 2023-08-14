import React from 'react';
import {
  View,
  Platform,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

type InputProps = {
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

const Input = (props: InputProps) => {
  const {containerStyle} = props;
  return (
    <View style={[styles.defaulContainer, containerStyle]}>
      <TextInput style={styles.defaultInput} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  defaulContainer: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: 'black',
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  defaultInput: {
    flex: 1,
  },
});
