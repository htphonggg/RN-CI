import React, {useState} from 'react';
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

import {emailValidation, passwordValidation} from '../utils/validator';

const SignInScreen = () => {
  const styles = SignInScreenStyle();

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleChangeEmail = (value: string) => {
    setErrorEmail('');
    if (!emailValidation(value)) return setErrorEmail('Email is invalid.');
  };

  const handleChangePassword = (value: string) => {
    setErrorPassword('');
    if (!passwordValidation(value))
      return setErrorPassword('Password is incorrect format.');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
        <View style={styles.container}>
          <StatusBar barStyle={'dark-content'} />
          <Label style={styles.labelStyle}>Files Type</Label>
          <View style={styles.inputWrapper}>
            <Input
              containerStyle={[!!errorEmail && styles.inputError]}
              placeholder="Email"
              onChangeText={handleChangeEmail}
            />
            <Label style={styles.textError}>{errorEmail}</Label>
            <Input
              maxLength={8}
              placeholder="Password"
              secureTextEntry={true}
              containerStyle={[!!errorPassword && styles.inputError]}
              onChangeText={handleChangePassword}
            />
            <Label style={styles.textError}>{errorPassword}</Label>
          </View>
          <Button>
            <Label style={styles.textSignIn}>Sign in</Label>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const SignInScreenStyle = () => {
  const {height} = Dimensions.get('window');
  const statusBarHeight = StatusBar.currentHeight ?? 0;
  const SCREEN_HEIGHT = height - statusBarHeight;

  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: SCREEN_HEIGHT,
    },
    labelStyle: {
      fontSize: 32,
    },
    inputWrapper: {
      paddingHorizontal: 16,
      marginVertical: '10%',
    },
    textSignIn: {
      color: 'white',
      fontSize: 16,
    },
    textError: {
      fontSize: 12,
      color: 'red',
      marginVertical: 4,
    },
    inputError: {
      borderColor: 'red',
    },
  });
};
