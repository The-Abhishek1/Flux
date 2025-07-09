import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import userImage from '../../../assets/images/luffy2.jpg';

//Main Function
const Profile = () => {
  return (
    <View>
      <View style={styles.profileDetails}>
        <View style={styles.imageName}>
            <Image source={userImage} style={styles.userImage}/>
            <View style={styles.Name}>
                <ThemedText type="subtitle">@VibeCreator</ThemedText>
                <ThemedText>UID: 0x12345678</ThemedText>
            </View>
        </View>
        <View style={styles.balanceEncryt}>
            <View style={styles.balance}>
                <ThemedText type='subtitle'>1.2 VIBE</ThemedText>
            </View> 
            <View style={styles.secure}>
                <IconSymbol size={20} name="shield" color='red'/>
                <ThemedText type='default'>Encrypted</ThemedText>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    userImage:{
        width:100,
        height:100,
        borderRadius:100,
    },
    profileDetails:{
        flexDirection:'column',
        gap:20
    },
    imageName:{
        flexDirection:'row',
        alignItems:'center',
        gap:30
    },
    Name:{
        flexDirection:'column',
        gap:10
    },
    balanceEncryt:{
        flexDirection:"column",
        alignItems:'flex-start',
        gap:10,
    },
    balance:{
        borderWidth:0.3,
        borderColor:'grey',
        paddingHorizontal:30,
        padding:5
    },
    secure:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    }
})