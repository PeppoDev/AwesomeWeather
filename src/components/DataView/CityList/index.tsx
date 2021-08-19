import React from "react";
import { View, Text } from "react-native";
import { FlatListProps } from "react-native";

import { StyledList, Item, CityLabel, TempLabel } from "./styles";

export type CityAndWeather = {
  name: string;
  temp: number;
};

interface IProps extends Omit<FlatListProps<CityAndWeather>, "renderItem"> {}

const CityList: React.FC<IProps> = (props) => {
  return (
    <>
      <StyledList
        scrollEnabled
        {...props}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <Item key={index}>
            <CityLabel>{item.name}</CityLabel>
            <TempLabel>{item.temp}</TempLabel>
          </Item>
        )}
      />
    </>
  );
};

export default CityList;
