import React from "react";
// api
import weatherAPI from "../../services/OpenWeather";
// components
import { Text, ScrollView, View, ImageBackground } from "react-native";
import CityList from "../../components/DataView/CityList";
// location
import * as Location from "expo-location";
// styles
import { Container, Main } from "./styles";

const MainWeather: React.FC = () => {
  const [currentWeather, setCurrentWeather] = React.useState(null);

  const load = async () => {
    try {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== "granted") {
        throw new Error("This app need location services to works");
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      const response = await weatherAPI.get("", {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
          units: "metric",
        },
      });

      setCurrentWeather(response.data);
    } catch (error) {
      alert(error.response);
      console.log(error.response);
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  const getTemp = () => {
    console.log(currentWeather);
    if (currentWeather) {
      const {
        main: { temp },
      }: any = currentWeather;
      return temp;
    }
  };

  const image = {
    uri: "https://cdn.solace.com/wp-content/uploads/2019/01/bg-clouds.jpg",
  };
  return (
    // <ScrollView
    //   contentContainerStyle={{
    //     flex: 1,
    //     backgroundColor: "black",
    //   }}
    // ></ScrollView>
    <Container>
      <ImageBackground
        source={image}
        style={{ flex: 1, justifyContent: "center", width: "100%" }}
        blurRadius={3}
        resizeMode="cover"
      >
        <Main>
          <Text style={{ fontSize: 24, color: "white" }}>
            {currentWeather && currentWeather?.name}
          </Text>
          <Text>{getTemp()}</Text>
        </Main>
      </ImageBackground>

      <CityList data={[...fakerData]} />
    </Container>
  );
};

export default MainWeather;

const fakerData = [
  { name: "London", temp: 22.5 },
  { name: "Maceió", temp: 27.5 },
  { name: "Maceió", temp: 27.5 },
  { name: "Maceió", temp: 27.5 },
  { name: "Maceió", temp: 27.5 },
  { name: "Maceió", temp: 27.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
  { name: "London", temp: 22.5 },
];
