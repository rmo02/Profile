import React, { useState } from "react";
import {Animated, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { propsStack } from "../routes/Models";
import { useNavigation } from "@react-navigation/native";

export const Projeto = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={styles.container}>
       <View style={styles.intro}>
       <AntDesign
       onPress={()=> navigation.goBack()}
       name="arrowleft" size={30} color="#fff" />
          <View style={{marginLeft:20}}>
            <Text style={styles.text}>Projetos e estudos</Text>
          </View>
       </View>

      <ScrollView>

        {/* //Cafeteria */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>Cafeteria</Text>
            <Text style={styles.text2}>Projeto feito em React Native; um sistema de venda de cafés(Front-End)</Text>
          </View>
          </View>
        </View>

        {/* //+Educação */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>+Educação</Text>
            <Text style={styles.text2}>Projeto feito em React Native; um app para auxiliar estudantes nos estudos</Text>
          </View>
          </View>
        </View>

        {/* //+Quiz */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>Quiz</Text>
            <Text style={styles.text2}>Projeto feito em React Native; sistema de quiz simples com progresso, pontuação e mostrando os erros e acertos</Text>
          </View>
          </View>
        </View>

        {/* //+Educação - Flutter*/}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <Image 
          style={{height:50, width:60}} 
          resizeMode="contain" 
          source={require("../../assets/flutter-logo.png")} 
          />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>+Educação</Text>
            <Text style={styles.text2}>App para auxiliar estudantes nos estudos</Text>
          </View>
          </View>
        </View>

        {/* //+Scoreboard */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <Image 
          style={{height:50, width:60}} 
          resizeMode="contain" 
          source={require("../../assets/flutter-logo.png")} 
          />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>Scoreboard</Text>
            <Text style={styles.text2}>Contador com reset, retirar/aumentar pontuação em partidas</Text>
          </View>
          </View>
        </View>

        {/* //PayFlow */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <Image 
          style={{height:50, width:60}} 
          resizeMode="contain" 
          source={require("../../assets/flutter-logo.png")} 
          />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>PayFlow</Text>
            <Text style={styles.text2}>Sistema de gerenciamento e organização de boletos(NLW)</Text>
          </View>
          </View>
        </View>

        {/* //Sistema de Login */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>Sistema autenticação</Text>
            <Text style={styles.text2}>Tela simples de login e logout em React Js com autenticação com o google</Text>
          </View>
          </View>
        </View>

        {/* //Momments */}
        <View style={styles.cards}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <View style={{marginRight:10}}>
          <Fontisto name="angularjs" size={50} color="#D2002C" />
          </View>
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
            <Text style={styles.text1}>Moments</Text>
            <Text style={styles.text2}>Rede Social de compatilhamento de fotos feito em Angular com TypeScript</Text>
          </View>
          </View>
        </View>

      </ScrollView>

    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051428",
  },
  intro: {
    marginTop: 60,
    marginLeft: 20,
    width: "100%",
    alignItems:'center',
    flexDirection:'row'
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  cards:{
    elevation:10,
    marginTop:20,
    alignItems:'center',
    backgroundColor:'#2077FF' + 30,
    borderRadius:20,
    marginHorizontal:10
  },
 card: {
  flexWrap:'wrap',
  width:"90%",
  paddingHorizontal: 10,
  height: 100,
  backgroundColor: "#071124",
  marginBottom: 15,
  borderRadius: 10,
  elevation:5
},
text1:{
  fontSize:18,
  fontWeight:'bold',
  color:'#fff' 
},
text2:{
  textAlign:'justify',
  color:"#fff",
  fontWeight:'400',
  fontSize:14
},

});
