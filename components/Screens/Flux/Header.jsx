import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import logo from "../../../assets/images/idiotz.jpg";

//Main Function
const Header = () => {
const colorScheme = useColorScheme();  
return (
    <View style={styles.container}>
        <View style={styles.logo_header}>
             <Image source={logo} style={styles.logo}/>
            <ThemedText type="title" style={[styles.title]}>Flux</ThemedText>
        </View>
        <View style={styles.icons}>
            <IconSymbol size={25} name="bell" color={Colors[colorScheme ?? 'light'].icon}/>
            <IconSymbol size={25} name="message" color={Colors[colorScheme ?? 'light'].icon}/>
        </View>
    </View>
  )
}


const styles  = StyleSheet.create({
  container:{
  paddingHorizontal: 15,
  paddingVertical: 10,
  flexDirection: 'row',
  alignItems: 'center',
  shadowColor: 'grey',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 1,
  borderBottomColor: 'grey',
  },
  logo_header:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  logo:{
    width:40,
    height:40,
    borderRadius:10
  },
  title:{
    textTransform:'uppercase',
    fontWeight:'bold'
  },
  icons:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }
})
export default Header