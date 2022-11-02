import { View, Text, StyleSheet, Image, Linking, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const link = 'https://www.linkedin.com/in/ramon-maia-901a561b4/';

export const Profile = () => {


  const openUrl = async (link: string) => {
    const isSupported = await Linking.canOpenURL(link);
    if(isSupported){
      await Linking.openURL(link);
    } else {
      Alert.alert('Não é possivel abrir o link')
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4F80FF" }}>
      <View style={{alignItems:'center', justifyContent:'space-around', height:'30%', flexDirection:'row'}}>
      <View style={styles.banner}>
        <BlurView style={styles.blur}>
          <Image
            style={styles.avatar}
            source={require("../../assets/avatar.jpg")}
          />
        </BlurView>
      </View>
      <View style={{flexDirection:'column'}}>
        <Text style={{color:'#fff', fontSize:28, fontWeight:'bold'}}>Ramon Maia</Text>
        <Text style={{color:'#fff', fontWeight:'bold'}}>Dev Front-End</Text>
      </View>
      <View></View>
      </View>
      <View style={{marginTop:15,flexDirection:'column', height:'70%', backgroundColor:'#fff', borderTopLeftRadius:38, borderTopRightRadius:38}}>
        <View style={{marginTop:20, marginLeft:20}}>
        <Text style={styles.text1}>Sobre:</Text>
        </View>
        <View style={{marginTop:5, marginHorizontal:20, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.text2}>Bacharel em direito e atualmente graduando em Sistemas de Informação pela Universidade de Ensino Dom Bosco.
          Atualmente trabalho como desenvolvedor Front-End e Sistema TOTVS na empresa TV Mirante com foco principal para dispositivos mobiles e web.
        </Text>
        </View>
      <View style={{marginTop:40, marginLeft:20,}}>
        <Text style={styles.text1}>Contatos:</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-around' }}>
      <Feather name="instagram" size={45} color="#D12F6B" onPress={()=>Linking.openURL('https://www.instagram.com/_ramoonmaia/')}/>
      <FontAwesome name="linkedin-square" size={45} color="#0A66C2" onPress={()=>openUrl(link)} />
      <Ionicons name="md-logo-whatsapp" size={45} color="green" onPress={()=>Linking.openURL('https://api.whatsapp.com/send?phone=5598984324158&text=Ol%C3%A1%2C%20Tudo%20bem%3F')}/>
      <Entypo name="twitter" size={45} color="#1D9BF0" onPress={()=>Linking.openURL('https://twitter.com/_ramoonmaia')}/>
      <AntDesign name="github" size={45} color="black"  onPress={()=>Linking.openURL('https://github.com/rmo02')}/>
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
    marginTop:30
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
    color:'black'
  },
  text2:{
    textAlign:'justify',
    color:"black",
    fontWeight:'400',
    fontSize:16
  }
});
