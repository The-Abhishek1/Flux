import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Image } from 'expo-image';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import luffy from "../../../assets/images/luffy.jpg";
import luffy1 from "../../../assets/images/luffy1.jpg";
import luffy2 from "../../../assets/images/luffy2.jpg";
import luffy3 from "../../../assets/images/luffy3.jpg";
import luffy4 from "../../../assets/images/luffy4.jpg";
import luffy5 from "../../../assets/images/luffy5.jpg";
import luffy6 from "../../../assets/images/luffy6.jpg";
import luffy7 from "../../../assets/images/luffy7.jpg";
import luffy8 from "../../../assets/images/luffy8.jpg";
import Header from './Header';
import Suggestions from './Suggestions';

//Main Function
const Feed = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const DATA = [
  {
    id: '1',
    thumbnail: 'play-circle-outline',
    title: 'React Native Tutorial for Beginners',
    creator: 'Tech Guru',
    views: '1.2M views',
    year: '2024',
    duration: '15:30',
    img:luffy
  },
  {
    id: '2',
    thumbnail: 'play-circle-outline',
    title: 'Building a YouTube Clone App',
    creator: 'Code Master',
    views: '850K views',
    year: '2023',
    duration: '22:45',
    img:luffy4
  },
  {
    id: '3',
    thumbnail: 'play-circle-outline',
    title: 'Advanced JavaScript Concepts',
    creator: 'Dev Academy',
    views: '500K views',
    year: '2025',
    duration: '10:20',
    img:luffy7
  },
  {
    id: '4',
    thumbnail: 'play-circle-outline',
    title: 'Mastering Flexbox in React Native',
    creator: 'UI Pro',
    views: '300K views',
    year: '2024',
    duration: '12:10',
    img:luffy1
  },
  {
    id: '5',
    thumbnail: 'play-circle-outline',
    title: 'Understanding Redux Toolkit',
    creator: 'State Wizards',
    views: '780K views',
    year: '2022',
    duration: '18:40',
    img:luffy5
  },
  {
    id: '6',
    thumbnail: 'play-circle-outline',
    title: 'How to Use Expo for Rapid Dev',
    creator: 'Expo Masters',
    views: '420K views',
    year: '2023',
    duration: '16:05',
    img:luffy8
  },
  {
    id: '7',
    thumbnail: 'play-circle-outline',
    title: 'JavaScript Async/Await Explained',
    creator: 'Code Simplified',
    views: '1.1M views',
    year: '2021',
    duration: '14:50',
    img:luffy2
  },
  {
    id: '8',
    thumbnail: 'play-circle-outline',
    title: 'Top 10 React Native Libraries',
    creator: 'Dev Digest',
    views: '960K views',
    year: '2024',
    duration: '13:25',
    img:luffy6
  },
  {
    id: '9',
    thumbnail: 'play-circle-outline',
    title: 'React Navigation v6 Tutorial',
    creator: 'Mobile Dev',
    views: '610K views',
    year: '2022',
    duration: '19:35',
    img:luffy3
  },
];

  return (
    <View style={[{height: Dimensions.get("screen").height - (tabBarHeight + 45)}, styles.container]}>
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
                <Image source={item.img} style={styles.icon}/>
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

            {/* Video */}
            <View style={styles.videoContainer}>
              <Image source={item.img} style={styles.video}/>
              <ThemedText style={styles.duration}>{item.duration}</ThemedText>
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
  container:{
  },
  videoItem:{
    paddingBottom:5
  },
  video:{
    width:Dimensions.get('screen').width,
    height:200,
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
