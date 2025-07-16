import { SafeAreaView } from 'react-native-safe-area-context';
import CurrentPlaying from '../components/Screens/Video/CurrentPlaying';
import MainVideo from '../components/Screens/Video/MainVideo';

const Video = () => {
  return (
    <SafeAreaView>
      <CurrentPlaying/>
      <MainVideo/>
    </SafeAreaView>
  )
}

export default Video