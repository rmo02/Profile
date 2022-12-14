import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contatos } from "../pages/Contatos";
import { Projeto } from "../pages/Projetos";
import { StackPage } from "../pages/stack";
import { Text, Platform, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { propsNavigationStack } from "./Models";
import { Home } from "../pages/home";
import { Splash } from "../pages/Splash";

const Stack= createNativeStackNavigator<propsNavigationStack>();
const Tab = createBottomTabNavigator<propsNavigationStack>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle:{backgroundColor:'#051428'}}}
    >
      <Stack.Group>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerTransparent: true, headerShown: false, title: "" }}
        />
      <Stack.Screen
            name="Home"
            component={ShowBottomBar}
            options={{gestureEnabled:false, headerTransparent: true, headerShown: false, title: "" }}
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
      <Stack.Screen name="Home" component={Home} options={{ headerTransparent: true, headerShown: false, title: "" }} />
    </Stack.Navigator>
  );
}

export function StacksNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack" component={StackPage} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
    </Stack.Navigator>
  );
}

export function ShowBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: { height: Platform.OS === "ios" ? 100 : 60,
        backgroundColor:'white' },
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
                color={focused ? "black" : "#2F598431"}
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
    color:'#090436',
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
