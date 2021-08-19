import React from "react";
import { Text } from "react-native";
// styles
import { Container } from "./styles";
// navigation
import { useNavigation } from "@react-navigation/native";

const HeaderWithTemp: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <Container>
      <Text>22.5 C</Text>
    </Container>
  );
};

export default HeaderWithTemp;
