import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Video } from 'expo-av';
import { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';



const { width: SCREEN_WIDTH } = Dimensions.get('screen');

// ✅ Separate component for each video item (so hooks are valid)
const VideoCard = ({ item,index }) => {
  const [duration, setDuration] = useState(null);
  const [play,setPlay] = useState(false)
  const colorScheme = useColorScheme();  

  const formatDuration = (millis) => {
    if (!millis) return '0:00';
    const seconds = Math.floor(millis / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.videoContainer}>
      <TouchableOpacity onPress={() => setPlay(!play)}>
        <Video
          source={{ uri: item.thumbnail }}
          style={styles.video}
          resizeMode="cover"
          shouldPlay={play? true :false}
          isMuted
          onLoad={(status) => {
            if (status.durationMillis) setDuration(status.durationMillis);
          }}
          onError={(err) => console.warn("Video error", err)}
        /> 
      {duration && (
        <ThemedText style={styles.duration}>{formatDuration(duration)}</ThemedText>
      )}</TouchableOpacity>
    </View>
  );
};

export default function VideoGrid() {
  const DATA = [
    { id: '1', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', title: 'React Native Tutorial for Beginners', creator: 'Tech Guru', views: '1.2M views', year: '2024' },
    { id: '2', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', title: 'Building a YouTube Clone App', creator: 'Code Master', views: '850K views', year: '2023' },
    { id: '3', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', title: 'React Native Tutorial for Beginners', creator: 'Tech Guru', views: '1.2M views', year: '2024' },
    { id: '4', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', title: 'Building a YouTube Clone App', creator: 'Code Master', views: '850K views', year: '2023' },
    { id: '5', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', title: 'React Native Tutorial for Beginners', creator: 'Tech Guru', views: '1.2M views', year: '2024' },
    { id: '6', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', title: 'Building a YouTube Clone App', creator: 'Code Master', views: '850K views', year: '2023' },
    { id: '7', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', title: 'React Native Tutorial for Beginners', creator: 'Tech Guru', views: '1.2M views', year: '2024' },
    { id: '8', thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', title: 'Building a YouTube Clone App', creator: 'Code Master', views: '850K views', year: '2023' },
  ];

  return (
      <FlatList
        data={DATA}
        renderItem={({ item,index }) =>(<VideoCard item={item} index={index}/>)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingBottom:1550}}
        initialNumToRender={2}        // Render only 2 videos initially
        windowSize={3}               // Keep only few videos in memory
        removeClippedSubviews={true} // Unmount videos out of view
        maxToRenderPerBatch={2} 
        showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({
  video: {
    width: SCREEN_WIDTH,
    height: 250,
  },
  videoContainer: {
    position: 'relative',
  },
  duration: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  details: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});
