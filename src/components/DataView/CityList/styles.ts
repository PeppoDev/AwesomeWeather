import styled from "styled-components/native";
import { FlatList, View, Text } from "react-native";
import { CityAndWeather } from ".";

const BaseFlatList = FlatList as new () => FlatList<CityAndWeather>;
export const StyledList = styled(BaseFlatList)`
  background-color: white;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  flex: 1;
`;

export const Item = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  color: #ddd;
`;

export const CityLabel = styled(Text)``;
export const TempLabel = styled(Text)``;
