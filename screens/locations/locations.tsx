import { Dimensions, StyleSheet, Text, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import React from "react"

const Locations = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"Hey"}
          description={"hey"}
        />
        <Marker
          coordinate={{ latitude: 36.48825, longitude: -120.4324 }}
          title={"Hey"}
          description={"hey"}
        />
      </MapView>
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
  )
}

export default Locations

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
})
