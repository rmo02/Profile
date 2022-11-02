import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";

export const Home = () => {
  const v = React.useRef(null);
  return (
    <View style={styles.container}>
       <View style={styles.intro}>
          <Text style={styles.text}>Meu portifólio</Text>
        </View>
        <View style={{height:'75%', backgroundColor:'#fff', borderTopLeftRadius:38, borderTopRightRadius:38, marginBottom:10}}>
        <ScrollView>
          
          <View style={{marginTop:20, alignItems:'center'}}>
          <Image
          style={{height:350,}}
          resizeMode="contain"
          source={require("../../assets/cafe.gif")}
          />
          </View>
          <View style={{marginLeft:20, marginTop:20, alignItems:'center'}}>
            <Text style={styles.text1}>Cafeteria: Projeto feito com React Native, com bibliotecas nativas. Projeto disponivel no GitHub</Text>
          </View>

          <View style={{marginTop:20, alignItems:'center'}}>
          <Image
          style={{height:350,}}
          resizeMode="contain"
          source={require("../../assets/quiz.gif")}
          />
          </View>
          <View style={{marginLeft:20, marginTop:20, alignItems:'center'}}>
            <Text style={styles.text1}>Quiz: Projeto feito com React Native, sistema de validação da alternativa e utilizando animações na barra de progresso ao avançar.</Text>
          </View>

        </ScrollView>
        </View>
      
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F80FF",
  },
  intro: {
    marginTop: 40,
    marginLeft: 20,
    width: "100%",
    height:'20%'
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  text1:{
    textAlign:'justify',
    marginLeft:10,
    marginTop:10,
    marginRight:10,
    fontSize: 18,
    color: "black",
    fontWeight: "400",
  },
  cards:{
    elevation:10,
    marginTop:10,
    alignItems:'center'
  },
 card: {
  flexWrap:'wrap',
  width:"90%",
  paddingHorizontal: 10,
  height: 130,
  backgroundColor: "white",
  marginBottom: 15,
  borderRadius: 10,
  elevation:5
},


});
