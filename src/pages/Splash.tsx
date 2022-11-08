import React from 'react';
import { View, Text, StyleSheet, Image, Linking,  TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../routes/Models";

export const Splash = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <LottieView source={require('../../assets/dev.json')}
         style={{backgroundColor:'#051428'}}
         autoPlay
         duration={3}
         loop={false}
         onAnimationFinish={()=> navigation.navigate('Home')}
         />
    </View>
  );
};

