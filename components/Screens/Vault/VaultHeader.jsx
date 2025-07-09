import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Profile from './Profile';
import VideoGrid from './VideoGrid';


//Main Function
const VaultHeader = () => {

  const colorScheme = useColorScheme();  
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View onT style={styles.iconTitle}>
        <TouchableOpacity onPress={()=>{
          router.navigate("Flux")
        }}>
           <IconSymbol size={25} name="chevron.left" color={Colors[colorScheme ?? 'light'].icon}/>
        </TouchableOpacity>
        <ThemedText type="title">Vault</ThemedText>
      </View>
      <View>
        <Profile/>
        <VideoGrid/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:'column',
    gap:20
  },
  iconTitle:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }
})

export default VaultHeader