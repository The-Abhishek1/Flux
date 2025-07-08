import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';
import { StyleSheet, Switch, TextInput, TouchableOpacity, View } from 'react-native';

//Main Function
const Video = () => {
  const colorScheme = useColorScheme();
  const [video, setVideo] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [uploading, setUploading] = useState(false);


  return (
    <View style={styles.container}>
        <View style={styles.video}>
        {video ? <ThemedText type='subtitle' style={styles.videoTitle}>{video.name}</ThemedText> : <ThemedText  type='subtitle' style={styles.videoTitle}>No Video Selected</ThemedText>}
        </View>
        <View style={styles.detailsWhole}>
            <TouchableOpacity style={styles.choose}>
                <ThemedText type='defaultSemiBold'>Choose Video</ThemedText>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Spark Title"
                placeholderTextColor="#A1A1D0"
                onChangeText={setTitle}
                />
                <TextInput
                style={[styles.input,styles.description]}
                placeholder="Describe Your Spark"
                placeholderTextColor="#A1A1D0"
                onChangeText={setDescription}
                multiline
                />
            </View>
            <View style={styles.secureEncrypt}>
                <View style={styles.secure}>
                    <Switch
                        value={isEncrypted}
                        onValueChange={setIsEncrypted}
                        trackColor={{ false: '#4A4A5A', true: 'red' }}
                        thumbColor="#E6E6FA"
                    />
                    <ThemedText type='default'>Secure Spark</ThemedText>
                </View>
                <View style={styles.encrypt}>
                    <IconSymbol size={25} name="shield" color='red'/>
                    <ThemedText type='default'>Encrypted Upload</ThemedText>
                </View>
            </View>
            <TouchableOpacity style={styles.uploadButton} disabled={uploading}>
                <ThemedText style={{color:'white'}} type='defaultSemiBold'>{uploading ? 'Uploading...' : 'Launch'}</ThemedText>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        gap:10,
        padding:10
    },
    video:{
        backgroundColor:'#4A4A5A',
        height:169,
        position:'relative',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        borderRadius:10
    },
    detailsWhole:{
        flexDirection:'column',
        gap:20,
        paddingHorizontal:30
    },
    choose:{
        borderWidth:0.2,
        borderColor:'grey',
        padding:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    inputContainer:{
        flexDirection:'column',
        gap:20,
        marginTop:50
    },
    input:{
        borderWidth:0.2,
        borderColor:'grey',
        padding:15,
        fontWeight:'600',
        fontSize:15
    },
    description:{
        minHeight:70
    },
    secureEncrypt:{
        flexDirection:'column',
        gap:5,
        alignItems:'flex-start',
    },
    secure:{
        flexDirection:'row',
        alignItems:'center',
    },
    encrypt:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        marginLeft:10
    },
    uploadButton:{
        borderWidth:0.2,
        borderColor:'grey',
        padding:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'red',
    }
})


export default Video