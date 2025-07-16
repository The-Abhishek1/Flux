import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Suggestion from './Suggestion';

//Main Function
export default function Input() {
    const colorScheme = useColorScheme();
    const [search,setSearch] = useState('')
    const [suggestion,showSuggestion] = useState(true)

    const router = useNavigation()
 
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
          <TextInput
          style={[styles.input,colorScheme === 'dark' ? styles.light : styles.dark]}
          placeholder="Search Video"
          placeholderTextColor={colorScheme == 'dark' ? 'white' : 'black'}
          onChangeText={setSearch}
          multiline
          value={search}
          numberOfLines={1}
          />
          <TouchableOpacity onPress={()=>{
            router.navigate('Video')
          }}>
            <IconSymbol size={28} name="magnifyingglass" color={'grey'} />
          </TouchableOpacity>
      </View>
      <Suggestion showSuggestion={search == '' ? true : false}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        padding:10,
        backgroundColor:'white',
        height:Dimensions.get('window').height
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:10,
        paddingHorizontal:10,
        gap:20
    },
    input:{
        padding:10,
        fontWeight:'600',
        fontSize:15,
        borderWidth:0.2,
        borderColor:'grey',
        width:'90%',
        borderRadius:30,
        paddingHorizontal:20,
    },
    light:{
        color:'white'
    },
    dark:{
       color:'black' 
    },
})