import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

type KeyboardAwareProps = {
  children: ReactNode
}

const KeyboardAware = (props: KeyboardAwareProps) => {
  const { children } = props
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAware
