import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Video } from 'expo-av';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import luffy from "../../../assets/images/luffy.jpg";



const { width: SCREEN_WIDTH } = Dimensions.get('screen');

// ✅ Separate component for each video item (so hooks are valid)
const VideoCard = ({ item,index }) => {
  const [duration, setDuration] = useState(null);
  const colorScheme = useColorScheme();  
  const router = useNavigation()

  const formatDuration = (millis) => {
    if (!millis) return '0:00';
    const seconds = Math.floor(millis / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.videoItem}>
      <View style={styles.title}>
        <View style={styles.iconTitle}>
          <Image source={luffy} style={styles.icon} />
          <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
        </View>
        <TouchableOpacity onPress={() => console.log("Menu tapped")}>
          <IconSymbol name="ellipsis.vertical" size={24} color={Colors[colorScheme ?? 'light'].icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <TouchableOpacity onPress={() => {
          router.navigate("Video")
          }}>
          <Video
            source={{ uri: item.thumbnail }}
            style={styles.video}
            resizeMode="cover"
            shouldPlay={false}
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
      <View style={styles.details}>
        <ThemedText>{item.creator} • {item.views} • {item.year}</ThemedText>
      </View>
    </View>
  );
};

export default function SearchedVideos() {
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
        contentContainerStyle={{paddingBottom:100}}
        initialNumToRender={2}        // Render only 2 videos initially
        windowSize={3}               // Keep only few videos in memory
        removeClippedSubviews={true} // Unmount videos out of view
        maxToRenderPerBatch={2} 
        showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({
  videoItem: {
    marginBottom: 20,
  },
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
