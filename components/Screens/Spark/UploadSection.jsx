import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Dimensions, StyleSheet, Switch, TextInput, TouchableOpacity, View } from 'react-native';

//Main Function
const UploadSection = () => {
  const colorScheme = useColorScheme();
  const [showDefaultImage, setDefaultImage] = useState(false)
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [uploading, setUploading] = useState(false);

  const pickVideo = async () => {
    // Ask for permissions
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    // Launch picker for videos only
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      setDefaultImage(true); // Set showDefaultImage to true
      console.log(video)
    }
  };
 

  return (
    <View style={styles.container}>
        <View style={styles.video}>
        {showDefaultImage ?    
        <Video
          source={{ uri: video }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          useNativeControls
          style={{ width: Dimensions.get('window').width - 40, height: 300, marginTop: 20 }}

          /> : <ThemedText  type='defaultSemiBold' style={styles.videoTitle}>No Video Selected</ThemedText>}
        </View>
        <View style={styles.detailsWhole}>
            <TouchableOpacity onPress={pickVideo} style={styles.choose}>
                <ThemedText type='defaultSemiBold'>{showDefaultImage ? "Clear Video" : "Choose Video"}</ThemedText>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <TextInput
                style={[styles.input,colorScheme === 'dark' ? styles.light : styles.dark]}
                placeholder="Spark Title"
                placeholderTextColor={colorScheme == 'dark' ? 'white' : 'black'}
                onChangeText={setTitle}
                value={title}
                />
                <TextInput
                style={[styles.input,styles.description,colorScheme === 'dark' ? styles.light : styles.dark]}
                placeholder="Describe Your Spark"
                placeholderTextColor={colorScheme == 'dark' ? "white" : 'black'}
                onChangeText={setDescription}
                value={description}
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
        gap:100,
        padding:10
    },
    video:{
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
        marginTop:20
    },
    input:{
        borderWidth:0.2,
        borderColor:'grey',
        padding:15,
        fontWeight:'600',
        fontSize:15,
        color:'white'
    },
    light:{
        color:'white'
    },
    dark:{
       color:'black' 
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


export default UploadSection