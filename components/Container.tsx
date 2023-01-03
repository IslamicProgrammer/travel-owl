import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Constants from "expo-constants"

const Container: React.FC<{
  children: React.ReactNode
  style?: any
}> = ({ children, style = {} }) => {
  const statusBarHeight = Constants.statusBarHeight

  return (
    <View
      style={[
        {
          paddingTop: statusBarHeight + 10,
          paddingLeft: 17,
          paddingRight: 17,
          flex: 1,
          width: "100%",
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default Container
