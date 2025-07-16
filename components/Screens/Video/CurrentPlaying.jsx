import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Video } from 'expo-av';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import luffy from "../../../assets/images/luffy3.jpg";
import bindu from "../../../assets/videos/bindu.mp4";

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

//Main Function
const CurrentPlaying = () => {

const colorScheme = useColorScheme(); 
const [like,setLike]  = useState(false)
const [dislike,setDislike]  = useState(false)
const [download,setDownload]  = useState(false)
const [share,setShare]  = useState(false)

  return (
    <View style={styles.playingContainer}>
        <Video
        source={bindu}
        style={styles.playing}
        useNativeControls
        shouldPlay={true}
        isMuted={false}
        />
        <View style={styles.titleIcons}>
            <View>
                <Image source={luffy} style={{width:40, height:40, borderRadius:40, resizeMode:'cover'}}/>
            </View>
            <View style={styles.titleIconContainer}>
                <ThemedText type="subtitle">React Native Tutorial for Beginners</ThemedText>
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.eachIcon} onPress={() => {
                        setLike(!like)
                        setDislike(false)}}>
                        <IconSymbol name="hand.thumbsup" size={20} color={like ? 'red':Colors[colorScheme ?? 'light'].icon } />
                        <ThemedText>Like</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachIcon} onPress={() => {setDislike(!dislike)
                        setLike(false)
                    }}>
                        <IconSymbol name="hand.thumbsdown" size={20} color={dislike ? "red" : Colors[colorScheme ?? 'light'].icon} />
                        <ThemedText>Dislike</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachIcon} onPress={() => setDownload(!download)}>
                        <IconSymbol name="arrow.down.circle" size={20} color={download ? "red" :Colors[colorScheme ?? 'light'].icon} />
                        <ThemedText>Download</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachIcon} onPress={() => setShare(!share)}>
                        <IconSymbol name="square.and.arrow.up.fill" size={20} color={share ? "red" :Colors[colorScheme ?? 'light'].icon} />
                        <ThemedText>Share</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CurrentPlaying

const styles = StyleSheet.create({
    playingContainer:{
    flexDirection:'column',
    gap:10,
    marginBottom:20
   },
   titleIconContainer:{
    flexDirection:'column',
    gap:10
   },
  playing: {
    width: SCREEN_WIDTH,
    height: 250,
  },
  titleIcons:{
    flexDirection:'row',
    gap:15,
    paddingHorizontal:20,
    alignItems:'center'
  },
  icons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    gap:20
  },
  eachIcon:{
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    justifyContent:'center'
  }
})