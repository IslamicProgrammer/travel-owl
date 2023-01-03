import { StyleSheet, View } from "react-native"
import Onboarding from "./screens/onboarding/onboarding"
import Login from "./screens/login"
import Main from "./screens/main/main"
import Locations from "./screens/locations/locations"

export default function App() {
  return (
    <View style={styles.container}>
      <Locations />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
