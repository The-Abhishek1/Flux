import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import userImage from '../../../assets/images/luffy2.jpg';

//Main Function
const Profile = () => {
  return (
      <View style={styles.profileDetails}>
        <View style={styles.imageName}>
            <Image source={userImage} style={styles.userImage}/>
            <View style={styles.Name}>
                <ThemedText type="subtitle">@VibeCreator</ThemedText>
                <ThemedText>UID: 0x12345678</ThemedText>
            </View>
        </View>
        <View style={styles.buttonsWhole}>
            <View style={styles.balanceEncryt}>
                <View style={styles.button}>
                    <ThemedText type='subtitle'>Ƀ 1.20</ThemedText>
                </View>
                <TouchableOpacity style={styles.button}>
                    <IconSymbol name="pencil" size={20} color='red' />
                    <ThemedText style={styles.buttonText}>Edit</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <IconSymbol name="square.and.arrow.up.fill" size={20} color='red' />
                    <ThemedText style={styles.buttonText}>Share</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={styles.secure}>
                <IconSymbol size={15} name="shield" color='red'/>
                <ThemedText style={styles.encryptDescription}>Encrypted Wallet <ThemedText style={styles.encryptDescription}>[AES-256 Bit Secure]</ThemedText></ThemedText>
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
        gap:20,
        paddingHorizontal:20
    },
    Name:{
        flexDirection:'column',
        gap:10
    },
    buttonsWhole:{
        flexDirection:'column',
        gap:10,
        marginVertical:20,
        marginTop:10
    },
    balanceEncryt:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        gap:10,
    },
    secure:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        marginLeft:20
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        borderWidth:0.3,
        borderColor:'grey',
        paddingHorizontal:30,
        padding:5,
        borderRadius:10
    },
    encryptDescription:{
        fontSize:14
    }
})