import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export const SignInScreenStyle = () => {
  const { height } = Dimensions.get('window')
  const statusBarHeight = StatusBar.currentHeight ?? 0
  const SCREEN_HEIGHT = height - statusBarHeight

  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: SCREEN_HEIGHT
    },
    labelStyle: {
      fontSize: 32
    },
    inputWrapper: {
      paddingHorizontal: 16,
      marginVertical: '10%'
    },
    textSignIn: {
      color: 'white',
      fontSize: 16
    },
    textError: {
      fontSize: 12,
      color: 'red',
      marginVertical: 4
    },
    inputError: {
      borderColor: 'red'
    }
  })
}
