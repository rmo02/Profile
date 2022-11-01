import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView style={{flex:1,  backgroundColor: "#0C0F14"}}>
      <View style={{marginTop:10, marginLeft:10, width:'80%'}}>
        <Text style={styles.text}>Bem-Vindo ao meu portifólio</Text>
      </View>
      <View style={{}}>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight:'bold'
  },

});