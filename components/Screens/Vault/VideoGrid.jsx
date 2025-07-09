import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');
const itemWidth = (width - 30) / 2; // 2 columns with padding

const videoData = [
  { id: '1', uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: '2', uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
  { id: '3', uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { id: '4', uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
];

const VideoGrid = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Video
        source={{ uri: item.uri }}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        muted={true}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
    </View>
  );

  return (
    <FlatList
      data={videoData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    width: itemWidth,
    margin: 5,
    aspectRatio: 1, // Square aspect ratio, adjust as needed
  },
  video: {
    flex: 1,
    borderRadius: 8,
  },
});

export default VideoGrid;