import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native"
import React from "react"
import { Container, Input, RoundButton } from "../../components"
import { PopularCard } from "./components"

const Main = () => {
  const places = [
    {
      id: 1,
      title: "Samarkand",
      fixPrice: 12,
      isPopular: true,
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Samarkand",
      fixPrice: 12,
      isPopular: true,
      image: "https://picsum.photos/300",
    },
    {
      id: 3,
      title: "Samarkand",
      fixPrice: 12,
      isPopular: true,
      image: "https://picsum.photos/400",
    },
    {
      id: 4,
      title: "Samarkand",
      fixPrice: 12,
      isPopular: false,
      image: "https://picsum.photos/500",
    },
    {
      id: 5,
      title: "Samarkand",
      fixPrice: 12,
      isPopular: false,
      image: "https://picsum.photos/600",
    },
    {
      id: 6,
      title: "Samarkand",
      fixPrice: 12,
      isPopular: false,
      image: "https://picsum.photos/700",
    },
  ]

  return (
    <Container style={{ backgroundColor: "#FAFAFA" }}>
      <View style={styles.main}>
        <View style={styles.titleBlock}>
          <Text style={styles.mainTitle}>Find your next trip</Text>
          <Text style={styles.secondaryTitle}>Nordic scenery</Text>
        </View>
        <View style={styles.searchBlock}>
          <Input
            style={styles.searchInput}
            placeholder="Search"
            icon={require("../../assets/main/search.png")}
          />
          <RoundButton
            style={styles.searchButton}
            icon={() => (
              <Image source={require("../../assets/main/filter.png")} />
            )}
          />
        </View>
        <View style={styles.popular}>
          <Text style={styles.popularTitle}>Popular locations</Text>
          <ScrollView horizontal style={styles.popularContent}>
            {places
              .filter(item => !!item.isPopular)
              .map(item => (
                <PopularCard
                  key={item.id}
                  onPress={() => alert(item.id)}
                  price={item.fixPrice}
                  title={item.title}
                  url={item.image}
                />
              ))}
          </ScrollView>
        </View>
        <View style={styles.popular}>
          <Text style={styles.popularTitle}>All locations</Text>
          <ScrollView horizontal style={styles.popularContent}>
            {places.reverse().map(item => (
              <PopularCard
                type="vertical"
                key={item.id}
                onPress={() => alert(item.id)}
                price={item.fixPrice}
                title={item.title}
                url={item.image}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Container>
  )
}

export default Main

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
  },
  titleBlock: {
    width: "100%",
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#818181",
  },
  secondaryTitle: {
    fontSize: 26,
    fontWeight: "500",
    marginTop: 5,
    marginBottom: 20,
  },
  searchBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    height: 52,
    flex: 0.9,
  },
  searchButton: {
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0373F3",
  },
  popular: {
    marginTop: 30,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  popularContent: {
    flexDirection: "row",
    overflow: "scroll",
  },
})
