import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Video } from 'expo-av';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import luffy from "../../../assets/images/luffy.jpg";
import Header from './Header';
import Suggestions from './Suggestions';

//Main Function
const Feed = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const DATA = [
  {
    id: '1',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'React Native Tutorial for Beginners',
    creator: 'Tech Guru',
    views: '1.2M views',
    year: '2024',
    duration: '15:30',
  },
  {
    id: '2',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Building a YouTube Clone App',
    creator: 'Code Master',
    views: '850K views',
    year: '2023',
    duration: '22:45',
  },
  {
    id: '3',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: 'Advanced JavaScript Concepts',
    creator: 'Dev Academy',
    views: '500K views',
    year: '2025',
    duration: '10:20',
  },
  {
    id: '4',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Mastering Flexbox in React Native',
    creator: 'UI Pro',
    views: '300K views',
    year: '2024',
    duration: '12:10',
  },
  {
    id: '5',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Understanding Redux Toolkit',
    creator: 'State Wizards',
    views: '780K views',
    year: '2022',
    duration: '18:40',
  },
  {
    id: '6',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'How to Use Expo for Rapid Dev',
    creator: 'Expo Masters',
    views: '420K views',
    year: '2023',
    duration: '16:05',
  },
  {
    id: '7',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'JavaScript Async/Await Explained',
    creator: 'Code Simplified',
    views: '1.1M views',
    year: '2021',
    duration: '14:50',
  },
  {
    id: '8',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Top 10 React Native Libraries',
    creator: 'Dev Digest',
    views: '960K views',
    year: '2024',
    duration: '13:25',
  },
  {
    id: '9',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'React Navigation v6 Tutorial',
    creator: 'Mobile Dev',
    views: '610K views',
    year: '2022',
    duration: '19:35',
  },
];
  const [duration, setDuration] = useState(null);
  const [play, setPlay] = useState(false)
  const router = useNavigation()

  const formatDuration = (millis) => {
    if (!millis) return '0:00';
    const seconds = Math.floor(millis / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={[{height:Dimensions.get('window').height - tabBarHeight - 45,}, styles.container]}>
      <FlatList
      data={DATA}
      renderItem={({item, index}) => (
        <View>
          {index === 0 ? (
            <>
                    <Header/>
                  <Suggestions/>
                  </>
              ) : (
                  
        <View style={styles.videoItem}>  
            {/* Video Details */}
            <View style={styles.title}>

              <View style={styles.iconTitle}>
                <Image source={luffy} style={styles.icon}/>
                <ThemedText type="defaultSemiBold" style={styles.title}>{item.title}</ThemedText>
              </View>
              {/* Three-Dots Menu */}
              <TouchableOpacity
                onPress={() => console.log("Hii")}
                style={styles.optionsButton}
              >
                <IconSymbol name="ellipsis.vertical" size={24} color="grey" />
              </TouchableOpacity>
            </View>
            <View>
            {/* Video */}
            <TouchableOpacity style={styles.videoContainer} onPress={() => router.navigate("Video")}>
              <Video
            source={{ uri: item.thumbnail }}
            style={styles.video}
            isMuted={true}
            resizeMode="cover"
            shouldPlay={play ? true : false}
            onLoad={(status) => {
          if (status.durationMillis) {
            setDuration(status.durationMillis);
            }

          }}onError={(err) => {}}
            />
            </TouchableOpacity>
              <ThemedText style={styles.duration}>{formatDuration(duration)}</ThemedText>
            </View>

            {/* Details */}
            <View style={styles.details}> 
              <ThemedText type="link" style={styles.creator}>
                {item.creator} • {item.views} • {item.year}
              </ThemedText>
            </View>
          </View>
            )}
          </View>
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoItem:{
    paddingBottom:5
  },
  video:{
    width:Dimensions.get('screen').width,
    height:250,
    position:'relative'
  },
  icon:{
    height:30,
    width:30,
    borderRadius:100
  },
  videoContainer:{
    position:'relative'
  },
  duration:{
    position:'absolute',
    right:15,
    bottom:15,
    color:'white'
  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    padding:5
  },
  iconTitle:{
    flexDirection:'row',
    alignItems:'center',
  },
  details:{
    paddingHorizontal:20,
    paddingVertical:5,
    flexDirection:'row',
    alignItems:'center',
  }
});

export default Feed;
