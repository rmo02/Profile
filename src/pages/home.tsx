import { View, Text, StyleSheet, Image, Linking, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons as Icon2 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../routes/Models";

const link = 'https://www.linkedin.com/in/ramon-maia-901a561b4/';

export const Home = () => {
  const navigation = useNavigation<propsStack>();

  const openUrl = async (link: string) => {
    const isSupported = await Linking.canOpenURL(link);
    if(isSupported){
      await Linking.openURL(link);
    } else {
      Alert.alert('Não é possivel abrir o link')
    }
  }


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
      <MaterialCommunityIcons name="message-text-outline" size={30} color="gray" />
      <Text style={styles.text2}>Mensagem</Text>
      </View>

      <View style={{flexDirection:'column',alignItems:'center'}}>
      <Feather name="phone-call" size={30} color="gray" />
      <Text style={styles.text2}>Telefone</Text>
      </View>

      <View style={{flexDirection:'column',alignItems:'center'}}>
      <Icon2 name="gmail" size={30} color="gray" />
      <Text style={styles.text2}>Gmail</Text>
      </View>

      </View>

      {/* //Projetos e estudos */}

      <View style={{flexDirection:'row', justifyContent: "space-between", paddingHorizontal: 20}}>
      <TouchableOpacity
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
        <View style={{marginTop:20, marginLeft:20}}>
        <Text style={styles.text1}>Sobre:</Text>
        </View>
        <View style={{marginTop:5, marginHorizontal:20, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.text2}>Bacharel em direito e atualmente graduando em Sistemas de Informação pela Universidade de Ensino Dom Bosco.
          Atualmente trabalho como desenvolvedor Front-End e Sistema TOTVS na empresa TV Mirante com foco principal para dispositivos mobiles e web.
        </Text>
        </View>
      </View>
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
