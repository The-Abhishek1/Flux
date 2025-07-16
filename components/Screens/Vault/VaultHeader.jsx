import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import History from './History';
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
      <Profile/>
      <ThemedText style={styles.header}>History</ThemedText>
      <History/>
      <ThemedText style={styles.header}>Your Videos</ThemedText>
      <VideoGrid/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:'column',
    gap:20,
  },
  iconTitle:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  header:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:-10
  }
})

export default VaultHeader