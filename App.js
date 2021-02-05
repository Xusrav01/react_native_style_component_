import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground source={require("./assets/icon1.jpg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#fff" />
              <Text
                style={{
                  marginLeft: 10
                }}>Ingredients</Text>
            </Back>
            <AntDesign name="heart" size={24} color="#fff" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Rishton oshi
                        </Text>
            <Diveder />
            <Text bold>1 kg uchun maxsulotlar</Text>
            <Text>1 kg qoy goshti | 1 kg sabzi</Text>
          </MainRecipe>
          <Button>
            <Text bold small>
              LEARN MORE
                        </Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer>
        <Text dark heavy large>
          Maxsulotlat tarkibi
                </Text>
        <Text dark heavy small>
          7 kishi uchun
                </Text>

        <Recipes></Recipes>
      </RecipesContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text`
    color:${(props) => (props.dark
    ? "#000"
    : "#fff")}
    font-family:"san-serif";
    ${({
      title,
      large,
      small }) => {
    switch (true) {
      case title:
        return "font-size: 32px";
      case large:
        return "font-size: 20px";
      case small:
        return "font-size: 12px";
    }
  }}

    ${({
    bold,
    heavy }) => {
    switch (true) {
      case bold:
        return "font-weight: 600";
      case heavy:
        return "font-weight: 700";
    }
  }}

`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;
const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Diveder = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: purple;
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;
`;