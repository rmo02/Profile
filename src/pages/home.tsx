import { View, Text, StyleSheet, Image, Linking,  TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons as Icon2 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../routes/Models";
import BottomSheet from "../components/BottomSheet";
import { Ionicons } from '@expo/vector-icons';



export const Home = () => {
  const navigation = useNavigation<propsStack>();

  const [ bottom, setBottom ] = useState(false);

  let number = '98984324158';
  let email ='ramoon.maia23@gmail.com';

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>{
      return true
    })
  }, [])
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#051428",}}>
      <View style={{alignItems:'center', justifyContent:'space-around', flexDirection:'column'}}>
      <View style={styles.banner}>
        <BlurView style={styles.blur}>
          <Image
            style={styles.avatar}
            source={require("../../assets/avatar.jpg")}
          />
        </BlurView>
      </View>
      <View style={{flexDirection:'column', alignItems:'center', marginTop:30}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#fff', fontSize:24, fontWeight:'bold'}}>@Ramon Maia</Text>
        <MaterialIcons name="verified" size={24} color="#2576F5" />
        </View>
        <Text style={{color:'#fff', fontWeight:'bold'}}>Dev Front-End</Text>
      </View>
      </View>

      {/* //Contatos */}

      <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20, paddingHorizontal:20, alignItems:'center',}}>
      
      <View style={{flexDirection:'column', alignItems:'center'}}>
      <Ionicons name="md-logo-whatsapp" size={30} color="gray" onPress={()=>Linking.openURL('https://api.whatsapp.com/send?phone=5598984324158&text=Ol%C3%A1%2C%20Tudo%20bem%3F')}/>
      <Text style={styles.text2}>Mensagem</Text>
      </View>

      <View style={{flexDirection:'column',alignItems:'center'}}>
      <Feather name="phone-call" size={30} color="gray" onPress={()=> Linking.openURL(`tel: ${number}`)} />
      <Text style={styles.text2}>Telefone</Text>
      </View>

      <View style={{flexDirection:'column',alignItems:'center'}}>
      <Icon2 name="gmail" size={30} color="gray" onPress={()=> Linking.openURL(`mailto: ${email}`)}/>
      <Text style={styles.text2}>Gmail</Text>
      </View>

      </View>

      {/* //Contatos e estudos */}

      <View style={{flexDirection:'row', justifyContent: "space-between", paddingHorizontal: 20}}>
      <TouchableOpacity
        onPress={()=> bottom === true ? setBottom(false) : setBottom(true)}
        style={styles.button}
        >
        <Text style={styles.textButtom}>Contatos</Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Projetos")}
        >
        <Text style={styles.textButtom}>Projetos</Text>
      </TouchableOpacity>

      </View>


      {/* //Sobre */}
      <View style={{marginTop:15,flexDirection:'column'}}>
        <View style={{marginTop:30, marginLeft:20}}>
        <Text style={styles.text1}>Sobre</Text>
        </View>
        <View style={{marginTop:10, marginHorizontal:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.text2}>Tenho 29 anos, atualmente graduando em Sistemas de Informação pela Universidade de Ensino Dom Bosco.
          Atualmente trabalho como desenvolvedor Front-End e Sistema TOTVS na empresa TV Mirante com foco principal para dispositivos mobiles e web.
        </Text>
        </View>
      </View>
      {bottom === true ? <BottomSheet/> : null}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  banner: {
    height: 120,
    width: 120,
    overflow: "hidden",
    borderRadius: 80,
    marginTop:40
  },
  blur:{ 
    height: "100%",
    padding:2 },
    avatar:{
    height: "100%",
    width: "100%",
    borderRadius: 10
},
  text1:{
    fontSize:20,
    fontWeight:'bold',
    color:'#737B80'
  },
  text2:{
    textAlign:'justify',
    color:"#737B80",
    fontWeight:'400',
    fontSize:16
  },
  button: {
    width:'50%',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 28,
    elevation: 5,
    backgroundColor: "#14170B" + 20,
    },
textButtom:{
    textAlign:'center',
    color:'#737B80',
},
});
