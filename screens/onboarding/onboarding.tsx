import React from "react"
import { useState } from "react"
import { Image, Text, View, StyleSheet, TouchableHighlight } from "react-native"

import Onboard from "./onboard"

const Onboarding = () => {
  const [step, setStep] = useState(0)

  const getComponent = () =>
    ({
      0: (
        <Onboard
          title="Make your own private travel plan"
          subtitle="Formulate your strategy to receive wonderful gift packs"
          onStep={() => setStep(c => c + 1)}
          image={require("../../assets/onboarding/first.png")}
        />
      ),
      1: (
        <Onboard
          title="Customize your High-end travel"
          subtitle="Countless high-end entertainment facilities"
          onStep={() => setStep(c => c + 1)}
          image={require("../../assets/onboarding/second.png")}
        />
      ),
      2: (
        <Onboard
          title="High-end leisure projects to choose from"
          subtitle=" The world's first-class modern leisure and entertainment method"
          onStep={() => alert("hey")}
          image={require("../../assets/onboarding/third.png")}
        />
      ),
    }[step])

  return <View style={styles.main}>{getComponent()}</View>
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "space-between",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    paddingTop: 0,
  },
  image: {
    marginBottom: 20,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "rgba(180, 180, 180, 1)",
    marginBottom: 30,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#0373F3",
    cursor: "pointer",
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  footerText: {
    textAlign: "center",
    position: "absolute",
    bottom: 50,
  },
})

export default Onboarding
