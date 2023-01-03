import React from "react"
import {
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { Input, Container, Button } from "../components"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          style={styles.arrow}
          source={require("../assets/auth/arrow-back.png")}
        />

        <Text style={styles.title}>Sign in</Text>
        <Input
          onChangeText={e => setEmail(e)}
          icon={require("../assets/auth/email.png")}
          placeholder="Enter e-mail address"
        />
        <Input
          onChangeText={e => setPassword(e)}
          icon={require("../assets/auth/email.png")}
          placeholder="Enter e-mail address"
          secureTextEntry
        />
        {/* <Button label="Lo" /> */}
      </KeyboardAvoidingView>
    </Container>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  arrow: {},
})

export default Login
