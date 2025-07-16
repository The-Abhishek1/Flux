import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Main Function
const Suggestion = ({showSuggestion}) => {
  const Trending = [
    { id: '1', title: 'Artificial Intelligence & Machine Learning' },
    { id: '2', title: 'Blockchain & Web3 Technologies' },
    { id: '3', title: 'Cybersecurity Trends in 2025' },
    { id: '4', title: 'Augmented Reality & Virtual Reality' },
    { id: '5', title: 'Quantum Computing Innovations' },
    { id: '6', title: 'Edge Computing & IoT Devices' },
    { id: '7', title: 'Sustainable Green Tech' },
  ];

  if(showSuggestion == false){
    return
  }
  else{

  return (
    <FlatList
      data={Trending}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.trendingItem}>
            <ThemedText style={styles.titleText} numberOfLines={2}>
            {item.title}
            </ThemedText>
            <IconSymbol size={22} name="flame.fill" color="orange" />
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};
    
}
export default Suggestion;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fffffd',
    borderRadius: 20,
    gap: 16,
    paddingHorizontal:10
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10,
    backgroundColor: '#fcf5f5',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  titleText: {
    flex: 1,
    fontSize: 16,
  },
});
