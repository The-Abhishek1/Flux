import { Video } from 'expo-av';
import { FlatList, StyleSheet, View } from 'react-native';


const DATA = [
  {
    id: '1',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'React Native Tutorial for Beginners',
  },
  {
    id: '2',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Building a YouTube Clone App',
  },
  {
    id: '3',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: 'Advanced JavaScript Concepts',
  },
  {
    id: '4',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'React Native Tutorial for Beginners',
  },
  {
    id: '5',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Building a YouTube Clone App',
  },
  {
    id: '6',
    thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: 'Advanced JavaScript Concepts',
  },
];



// ✅ Video Card Component
const VideoCard = ({ uri }) => {

  return (
    <View style={styles.videoContainer}>
       <Video
          source={{ uri:uri }}
          style={styles.video}
          resizeMode="cover"
          />
    </View>
  );
};

// ✅ Main History Component
export default function History() {
  return (
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard uri={item.thumbnail} />}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={2}
        horizontal={true}
      />
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    marginRight: 5,
  },
  video: {
    width: 180,
    height: 150,
  },
});