import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.intro}>
          <Text style={styles.text}>Bem-Vindo ao meu portifólio</Text>
        </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  intro: {
    marginTop: 10,
    marginLeft: 10,
    width: "80%",
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  text1:{
    marginLeft:10,
    marginTop:10,
    fontSize: 22,
    color: "#fff",
    fontWeight: "400",
  },

});
