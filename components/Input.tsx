import {
  Image,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
} from "react-native"
import React from "react"

interface InputProps extends TextInputProps {
  icon: any
}

const Input: React.FC<InputProps> = ({ icon, ...args }) => {
  const [isFocus, setIsFocus] = React.useState(false)
  return (
    <View
      style={[
        args.style,
        styles.inputContainer,
        { borderColor: !isFocus ? "#E9E9E9" : "#0373F3" },
      ]}
    >
      {!!icon && <Image style={styles.inputImage} source={icon} />}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={styles.input}
        {...args}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 36,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    flexDirection: "row",
    // paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    width: "100%",
    borderRadius: 36,
    paddingTop: 15,
    paddingBottom: 15,
  },

  inputImage: {
    marginRight: 10,
    marginLeft: 10,
  },
})
