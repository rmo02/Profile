import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export const Home = () => {

  return (
    <View style={styles.container}>
       <View style={styles.intro}>
          <Text style={styles.text}>Meu portifólio</Text>
        </View>
        <View style={{height:'80%', backgroundColor:'#fff', borderTopLeftRadius:38, borderTopRightRadius:38, marginBottom:10}}>
        <ScrollView style={{marginBottom:10}}>
          
          <View style={{marginTop:20, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>Cafeteria</Text>
            <Text style={styles.descricao}>Projeto feito em React Native; um sistema de venda de cafés(Front-End)</Text>
          </View>
          </View>

          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>+Educação</Text>
            <Text style={styles.descricao}>Projeto feito em React Native; um app para auxiliar estudantes nos estudos</Text>
          </View>
          </View>

          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <Image 
            style={{height:50, width:60}} 
            resizeMode="contain" 
            source={require("../../assets/flutter-logo.png")} 
            />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>+Educação</Text>
            <Text style={styles.descricao}>App para auxiliar estudantes nos estudos</Text>
          </View>
          </View>


          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <Image 
            style={{height:50, width:60}} 
            resizeMode="contain" 
            source={require("../../assets/flutter-logo.png")} 
            />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>Scoreboard</Text>
            <Text style={styles.descricao}>Contador com reset, retirar/aumentar pontuação em partidas</Text>
          </View>
          </View>

          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <Image 
            style={{height:50, width:60}} 
            resizeMode="contain" 
            source={require("../../assets/flutter-logo.png")} 
            />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>PayFlow</Text>
            <Text style={styles.descricao}>Sistema de gerenciamento e organização de boletos(NLW) </Text>
          </View>
          </View>

          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>Quiz</Text>
            <Text style={styles.descricao}>Projeto feito em React Native; sistema de quiz simples com progresso, pontuação e mostrando os erros e acertos</Text>
          </View>
          </View>

          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <FontAwesome5 name="react" size={50} color="#2AB3FF" />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>Login com Autenticação</Text>
            <Text style={styles.descricao}>Tela simples de login e logout em React Js com autenticação com o google</Text>
          </View>
          </View>

          <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-around', marginHorizontal:20}}>
          <Fontisto name="angularjs" size={50} color="#D2002C" />
          <View style={{flexDirection:'column', marginLeft:30, justifyContent:'space-around', width:'90%'}}>
            <Text style={styles.nomeProjeto}>Moments</Text>
            <Text style={styles.descricao}>Rede Social de compatilhamento de fotos feito em Angular com TypeScript</Text>
          </View>
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
    marginTop: 50,
    marginLeft: 20,
    width: "100%",
    height:'15%'
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
nomeProjeto:{
  fontSize:18,
  color: '#4F80FF',
  fontWeight:'bold'
},
descricao:{
  color:'#3C40E8',
  fontSize:14,
  fontWeight:'400',
  textAlign:'justify'
}


});
