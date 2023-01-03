import React from "react"
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"

interface PopularCardProps {
  url: string
  title: string
  price: string | number
  onPress: () => void
  type?: "horizontal" | "vertical"
}

const PopularCard: React.FC<PopularCardProps> = ({
  price,
  title,
  url,
  onPress,
  type = "horizontal",
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={{ uri: url }}
        resizeMode="cover"
        style={[
          styles.popularCard,
          type === "vertical" && {
            width: 142,
            height: 200,
            alignItems: "center",
          },
        ]}
      >
        <View style={styles.popularCardOverlay} />
        <Text
          style={[
            styles.popularCardTitle,
            type === "vertical" && { fontSize: 18 },
          ]}
        >
          {title}
        </Text>
        <Text style={styles.popularCardPrice}>from {price}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default PopularCard

const styles = StyleSheet.create({
  popularCard: {
    marginRight: 25,
    height: 160,
    borderRadius: 15,
    width: 260,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 10,
    position: "relative",
  },
  popularCardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "200%",
    height: "200%",
    backgroundColor: "rgba(0, 0, 0, 0.465)",
  },
  popularCardTitle: {
    color: "#fff",
    fontSize: 22,
  },
  popularCardPrice: {
    color: "#fff",
    fontSize: 12,
  },
})
