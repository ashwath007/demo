/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Sound from 'react-native-sound';
Sound.setCategory('Playback');
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import One from './assets/dice1.png';
import Two from './assets/dice2.png';
import Three from './assets/dice3.png';
import Four from './assets/dice4.png';
import Five from './assets/dice5.png';
import Six from './assets/dice6.png'






const App =  () => {

  const [roll, setroll] = useState(One);

  
  const soundList = [

    require('./sound/one.wav'),
    require('./sound/two.wav'),
    require('./sound/three.wav'),
    require('./sound/four.wav'),
    require('./sound/five.wav'),
    require('./sound/six.wav'),
    require('./sound/seven.wav'),
    require('./sound/eight.wav'),
    require('./sound/nine.wav'),
    require('./sound/ten.wav')
    
  ];

  const playSound = (sound) => {
    console.log(sound);
    var whoosh = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
     
      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });whoosh.setVolume(50);
    
  }

  const rollDice = () => {
    let R = Math.floor(Math.random() * 5 + 1);
    switch(R){
      case 1:
        setroll(One);
        break;
        case 2:
          setroll(Two);
          break;
          case 3:
            setroll(Three);
            break;
            case 4:
              setroll(Four);
              break;
              case 5:
        setroll(Five);
        break;
        case 6:
        setroll(Six);
        break;
    }
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.box}>
            <View>
            <Image
        style={styles.tinyLogo}
        source={roll}
      />

            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{rollDice()}}>

              <Text style={{color:'white'}}>
                Roll
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.soundbg}>
          <Image source={require('./sound/logo.png')}/>
          <View style={styles.intems}>

            {soundList.map((sound,i)=>{
              return(
                <TouchableOpacity key={sound} style={styles.btnbox} onPress={()=>{playSound(sound)}}>
                  <Text>{i+1}</Text>
                </TouchableOpacity>
              )
                
            })}
          </View>
          </View>
          <View style={styles.currencyBg}>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
cen:{
  fontSize:34
},

box:{
  justifyContent:'center',
  alignItems:'center',
  marginBottom:32
},
btn:{
  backgroundColor:"blue",
  paddingHorizontal:32,
  borderRadius:15,
  marginTop:50
},
tinyLogo:{
  height:100,
  width:100,
  marginTop:12
},
soundbg: {
  backgroundColor:'#207398',
  alignItems:'center',
},
intems:{
  backgroundColor:'#207398',
  alignItems:'center',
  justifyContent:'space-around',
  flex:1,
  flexDirection:'row',
  flexWrap:'wrap'
},
btnbox:{
  paddingHorizontal:50,
  paddingVertical:12,
  borderRadius:12,
  backgroundColor :'#CAD5E2',
  marginBottom:8

},
currencyBg:{

  backgroundColor:'#2827CC'
}
})
export default App;
