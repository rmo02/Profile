import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Linking,  TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../routes/Models";

export const Splash = () => {
  const navigation = useNavigation<propsStack>();

  const [loop, setLoop] = useState(true);

  useEffect(
    () => {
      let timer = setTimeout(() => setLoop(false), 50000);
      return () => {
        clearTimeout(timer);
      };
    },[]);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <LottieView source={require('../../assets/dev.json')}
         style={{backgroundColor:'#051428'}}
         autoPlay
         loop={loop}
         onAnimationFinish={()=> navigation.navigate('Home')}
         />
    </View>
  );
};

