
import React, { useRef } from 'react'
import { View, StyleSheet, Platform, Animated, PanResponder, Text, Linking, Alert } from 'react-native'
import { WINDOW_HEIGHT } from '../utils/Tela'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.5;
const BOTTOM_SHEET_MIN_HEIGHT =   WINDOW_HEIGHT * 0.1;
const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;
const link = 'https://www.linkedin.com/in/ramon-maia-901a561b4/';


const BottomSheet = () => {

  const openUrl = async (link: string) => {
    const isSupported = await Linking.canOpenURL(link);
    if(isSupported){
      await Linking.openURL(link);
    } else {
      Alert.alert('Não é possivel abrir o link')
    }
  }




  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        
        // lastGestureDy.current += gesture.dy;
        // if(lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y){
        //   lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        // } else if( lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y){
        //     lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        // }

        if(gesture.dy > 0){
          if(gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          } 
        } else {
          if(gesture.dy >= -DRAG_THRESHOLD){
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = (direction:'up' | 'down') =>{
    lastGestureDy.current = direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue:lastGestureDy.current,
      useNativeDriver:true,
    }).start();
  }

  const bottomSheetAnimation ={
    transform:[{
      translateY: animatedValue.interpolate({
        inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
        outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
        extrapolate: 'clamp'
      })
    }],
  }

  return (
    <>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle}></View>

        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Redes Sociais</Text>
        </View>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-around' }}>
          <Feather name="instagram" size={45} color="#D12F6B" onPress={()=>Linking.openURL('https://www.instagram.com/_ramoonmaia/')}/>
          <FontAwesome name="linkedin-square" size={45} color="#0A66C2" onPress={()=>openUrl(link)} />
          <Entypo name="twitter" size={45} color="#1D9BF0" onPress={()=>Linking.openURL('https://twitter.com/_ramoonmaia')}/>
          <AntDesign name="github" size={45} color="black"  onPress={()=>Linking.openURL('https://github.com/rmo02')}/>
        </View>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheet:{
    position:'absolute',
    width:'100%',
    height:'50%',
    bottom:BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android:{elevation:3},
      ios:{
        shadowColor:'#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset:{
          width:2,
          height:2
        },
      },
    }),
    backgroundColor:'#0A2650',
    borderTopLeftRadius:32,
    borderTopRightRadius:32
  },
  draggableArea:{
    alignItems:'center',
    justifyContent:'flex-start',
    width:132,
    height:45,
    alignSelf:'center', 
    marginTop:5
  },
  dragHandle:{
    width:100,
    height:6,
    backgroundColor:'#d3d3d3',
    borderRadius:10
  },
  viewText:{
    marginHorizontal:20,
    marginBottom:20
  },
  text:{
    color:'gray',
    fontSize: 20,

  }
})

export default BottomSheet