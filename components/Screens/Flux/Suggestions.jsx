import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FlatList, StyleSheet, View } from 'react-native';

//Main Function
const Suggestions = () => {
    const colorScheme = useColorScheme();
    const DATA = [
  {
    id: '1',
    title: 'Cricket',
  },
  {
    id: '2',
    title: 'Bollywood',
  },
  {
    id: '3',
    title: 'Anime',
  },
  {
    id: '4',
    title: 'Technology',
  },
  {
    id: '5',
    title: 'Science',
  },
];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={[{ id: 'icon' }, ...DATA]} // Add dummy item for icon
        renderItem={({item, index}) => 
            <View style={styles.item}>
                {index === 0 ? (
                    <IconSymbol size={25} name="brain" color={Colors[colorScheme ?? 'light'].icon} />
                ) : (
                    <ThemedText type="default">{DATA[index - 1].title}</ThemedText>
                )}
            </View>
        }
        keyExtractor={(item, index) => item.id || `icon-${index}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    padding:10,
    paddingVertical:15
    },
    item:{
    paddingHorizontal:10,
    marginHorizontal:5,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    }
})

export default Suggestions