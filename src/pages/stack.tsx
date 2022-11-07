import { View, Text, StyleSheet, ScrollView, Animated, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

 export const StackPage = () => {

  const [progress, setProgress] = useState(new Animated.Value(40));
  const progressAnim = progress.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })

  const [progress2, setProgress2] = useState(new Animated.Value(70));
  const progressAnim2 = progress2.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })

  const [progress3, setProgress3] = useState(new Animated.Value(60));
  const progressAnim3 = progress3.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })

  const [progress4, setProgress4] = useState(new Animated.Value(30));
  const progressAnim4 = progress4.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })

  const [progress5, setProgress5] = useState(new Animated.Value(80));
  const progressAnim5 = progress5.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })

  const [progress6, setProgress6] = useState(new Animated.Value(90));
  const progressAnim6 = progress6.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })


  return (
    <View style={styles.container}>
      <View style={styles.intro}>
          <Text style={styles.text}>Skills</Text>
      </View>

      <ScrollView style={{marginTop:10}}>
        <View style={styles.cards}>
        <View style={styles.card}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <FontAwesome5 name="react" size={60} color="#2AB3FF" />
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#2AB3FF'}}>React Js</Text>
          <View>
          <View style={{width: '100%',
            height: 20,
            borderRadius: 30, marginTop:20, backgroundColor: '#2AB3FF' + 30}}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor:'#2AB3FF', alignItems:'center'
                },{
                    width: progressAnim
                }]}>
                <Text style={{color:"#fff"}}>50%</Text>
            </Animated.View>
            </View>
          </View>
          </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <FontAwesome5 name="react" size={60} color="#173796" />
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#173796'}}>React Native</Text>
          <View>
          <View style={{width: '100%',
            height: 20,
            borderRadius: 30, marginTop:20, backgroundColor: '#173796' + 30}}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor:'#173796', alignItems:'center'
                },{
                    width: progressAnim2
                }]}>
                <Text style={{color:"#fff"}}>70%</Text>
            </Animated.View>
            </View>
          </View>
          </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <Image 
            style={{height:90, width:60}} 
            resizeMode="contain" 
            source={require("../../assets/flutter-logo.png")} 
            />
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#54C5F8'}}>Flutter</Text>
          <View>
          <View style={{width: '100%',
            height: 20,
            borderRadius: 30, marginTop:20, backgroundColor: '#54C5F8' + 30}}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor:'#54C5F8', alignItems:'center'
                },{
                    width: progressAnim3
                }]}>
                <Text style={{color:"#fff"}}>60%</Text>
            </Animated.View>
            </View>
          </View>
          </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <MaterialCommunityIcons name="language-typescript" size={45} color="#2F72BC" />
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#2F72BC'}}>TypeScript</Text>
          <View>
          <View style={{width: '100%',
            height: 20,
            borderRadius: 30, marginTop:20, backgroundColor: '#2F72BC' + 30}}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor:'#2F72BC', alignItems:'center'
                },{
                    width: progressAnim4
                }]}>
                <Text style={{color:"#fff"}}>30%</Text>
            </Animated.View>
            </View>
          </View>
          </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <Ionicons name="logo-javascript" size={45} color="#EAD41C" />
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#EAD41C'}}>JavaScript</Text>
          <View>
          <View style={{width: '100%',
            height: 20,
            borderRadius: 30, marginTop:20, backgroundColor: '#EAD41C' + 30}}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor:'#EAD41C', alignItems:'center'
                },{
                    width: progressAnim5
                }]}>
                <Text style={{color:"#fff"}}>80%</Text>
            </Animated.View>
            </View>
          </View>
          </View>
          </View>
        </View>


        <View style={styles.card}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:30}}>
          <Image 
            style={{height:90, width:60}} 
            resizeMode="contain" 
            source={require("../../assets/git-bash.png")} 
            />
          <View style={{flexDirection: 'column', justifyContent:'space-around', width:'70%'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#F05033'}}>Git Bash</Text>
          <View>
          <View style={{width: '100%',
            height: 20,
            borderRadius: 30, marginTop:20, backgroundColor: '#F05033' + 30}}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor:'#F05033', alignItems:'center'
                },{
                    width: progressAnim6
                }]}>
                <Text style={{color:"#fff"}}>90%</Text>
            </Animated.View>
            </View>
          </View>
          </View>
          </View>
        </View>

        </View>
      </ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051428",
  },
  intro: {
    marginTop: 35,
    marginLeft: 20,
    width: "80%",
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
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
  backgroundColor: "#262840",
  marginBottom: 15,
  borderRadius: 10,
  elevation:5
},

});
