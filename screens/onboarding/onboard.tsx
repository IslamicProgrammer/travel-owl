import React from "react"
import { Image, Text, View, StyleSheet } from "react-native"
import { RoundButton } from "../../components"

interface OnboardProps {
  onStep: () => void
  title: string
  subtitle: string
  image: any
}

const Onboard: React.FC<OnboardProps> = ({
  onStep,
  title,
  subtitle,
  image,
}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>

    <RoundButton
      onPress={onStep}
      icon={() => (
        <Image
          style={styles.buttonImage}
          source={require("../../assets/onboarding/arrow.png")}
        />
      )}
    />
    <Text style={styles.footerText}>Made by Murodjon with ❤️</Text>
  </View>
)

const styles = StyleSheet.create({
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

export default Onboard
