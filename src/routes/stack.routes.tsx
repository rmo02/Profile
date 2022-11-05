import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contatos } from "../pages/Contatos";
import { Projeto } from "../pages/Projetos";
import { Home } from "../pages/Home";
import { StackPage } from "../pages/stack";
import { Text, Platform, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { propsNavigationStack } from "./Models";

const Stack= createNativeStackNavigator<propsNavigationStack>();
const Tab = createBottomTabNavigator<propsNavigationStack>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle:{backgroundColor:'#051428'}}}
    >
      <Stack.Group>
      <Stack.Screen
            name="HomePage"
            component={ShowBottomBar}
            options={{ headerTransparent: true, headerShown: false, title: "" }}
          />
        <Stack.Screen
          name="Contatos"
          component={Contatos}
          options={{ headerTransparent: true, headerShown: false, title: "" }}
        />

        <Stack.Screen
          name="Projetos"
          component={Projeto}
          options={{ headerTransparent: true, headerShown: false, title: "" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} options={{ headerTransparent: true, headerShown: false, title: "" }} />
    </Stack.Navigator>
  );
}

export function StacksNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackPage" component={StackPage} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
    </Stack.Navigator>
  );
}

export function ShowBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: { height: Platform.OS === "ios" ? 100 : 60 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#92A7FD" : "#2F598431"}
              />
              <Text style={styles.text}>Home</Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="StackPage"
        component={StacksNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Octicons
                name="stack"
                size={20}
                color={focused ? "#92A7FD" : "#2F598431"}
              />
              <Text style={styles.text}>Stacks</Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
